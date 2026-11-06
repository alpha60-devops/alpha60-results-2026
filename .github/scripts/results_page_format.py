#!/usr/bin/env python3
"""Shared audit-page format for staging, migration, and sparse Pages CI.

This module has only standard-library dependencies. Stage its exact bytes at
``.github/scripts/results_page_format.py`` in a results repository so CI uses
the same format contract as the publisher. Data and figure validation remains
in check-results-github-pages-v2.py and check-results-site-baseline-v2.py.
"""

from __future__ import annotations

import argparse
import html
import json
import pathlib
import re


MEDIA_RE = re.compile(r"^\| Media object \| (.+?) \|$", re.MULTILINE)
KEY_RE = re.compile(r"^\| Collection key \| `([^`]+)` \|$", re.MULTILINE)
KEY_SAFE_RE = re.compile(r"^[a-z0-9][a-z0-9._-]*$")
MAP_LOADER = "izzi-map-leaflet-geojson-v7.8.js"
CI_PATH = pathlib.Path(".github/scripts/results_page_format.py")
MAP_PREFIX_RE = re.compile(
    r"^## 5\. Cumulative Maps\n.*?(?=^### Geographic Regions\n)",
    re.MULTILINE | re.DOTALL,
)
HEADING_REPLACEMENTS = {
    "## 2. Sample coverage report": "## 2. Coverage report",
    "## 3. Media objects file size histogram":
        "## 3. File sizes histogram *median[lowest, highest]*",
    "## 4. Visualization pass — graphs": "## 4. Graphs",
    "## 5. Visualization pass — maps": "## 5. Cumulative Maps",
    "### Cumulative geographic slices": "### Geographic Regions",
    "### Cumulative network infrastructure": "### Network infrastructure",
    "**Cumulative >= 1080p**": "### Resolution >= 1080p",
    "**Cumulative < 1080p**": "### Resolution < 1080p",
}
HEADINGS = tuple(HEADING_REPLACEMENTS.values())
LEGACY_HEADINGS = (*HEADING_REPLACEMENTS, "### Cumulative data maps")


def page_identity(text: str, filename: str) -> tuple[str, str]:
    fields = []
    for pattern, label in ((MEDIA_RE, "Media object"), (KEY_RE, "Collection key")):
        matches = pattern.findall(text)
        if len(matches) != 1:
            raise ValueError(f"expected one {label} row, found {len(matches)}")
        fields.append(matches[0])
    title, key = fields
    if not KEY_SAFE_RE.fullmatch(key):
        raise ValueError(f"unsafe collection key {key!r}")
    if filename != f"{key}-sample-cache-audit.md":
        raise ValueError("filename does not match collection key")
    return title, key


def data_url(repository: str, key: str) -> str:
    return ("https://raw.githubusercontent.com/alpha60-devops/"
            f"{repository}/refs/heads/main/data/geojson.cumulative/"
            f"{key}-cumulative-aggregate.geojson.gz")


def map_attributes(repository: str, key: str, title: str) -> tuple[str, ...]:
    title, key_label = html.escape(title, quote=True), html.escape(key, quote=True)
    return (
        f'href="{data_url(repository, key)}"',
        f'data-map-title="{title} — {key_label}"',
        'onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;"',
        f'aria-label="Open {title} ({key_label}) cumulative data map in new window"',
        f'title="Opens interactive map for {title} ({key_label}) data"',
    )


def canonical_prefix(year: int, repository: str, key: str, title: str) -> str:
    if repository != f"alpha60-results-{year}":
        raise ValueError("repository does not match publication year")
    href, label, onclick, aria, tooltip = map_attributes(repository, key, title)
    return (
        "## 5. Cumulative Maps\n\n"
        '<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"\n'
        f'        src="../../resources/{MAP_LOADER}"></script>\n\n'
        f"<!-- https://raw.githubusercontent.com/alpha60-devops/{repository}/"
        "refs/heads/main/data/ -->\n\n"
        f'### <a {href} {label} {onclick} class="table-link" {aria} {tooltip}>Swarm Detail</a>\n\n'
    )


def validate_page_format(text: str, year: int, filename: str) -> list[str]:
    try:
        title, key = page_identity(text, filename)
    except ValueError as error:
        return [str(error)]
    repository = f"alpha60-results-{year}"
    issues = []
    for heading in HEADINGS:
        count = text.splitlines().count(heading)
        if count != 1:
            issues.append(f"expected one {heading!r}, found {count}")
    for marker in (*LEGACY_HEADINGS, f"github.com/alpha60-devops/{repository}/raw/"):
        if marker in text:
            issues.append(f"legacy marker remains: {marker}")
    for fragment, label in (
        ('id="geojson-map"', "geojson-map ID"),
        (f'src="../../resources/{MAP_LOADER}"', "v7.8 loader reference"),
        (">Swarm Detail</a>", "Swarm Detail link"),
    ):
        if text.count(fragment) != 1:
            issues.append(f"{label} count is not one")
    for attribute in map_attributes(repository, key, title):
        if text.count(attribute) != 1:
            issues.append(f"expected one page-specific map attribute {attribute!r}")
    return issues


def normalize_page(text: str, year: int, filename: str) -> str:
    title, key = page_identity(text, filename)
    for old, new in HEADING_REPLACEMENTS.items():
        text = re.sub(r"^" + re.escape(old) + r"$", lambda _: new, text,
                      flags=re.MULTILINE)
    text = text.replace("### Cumulative data maps\n\n", "")
    if len(MAP_PREFIX_RE.findall(text)) != 1:
        raise ValueError("expected one canonicalizable map prefix")
    text = MAP_PREFIX_RE.sub(
        lambda _: canonical_prefix(year, f"alpha60-results-{year}", key, title),
        text, count=1)
    if not text.endswith("\n"):
        text += "\n"
    issues = validate_page_format(text, year, filename)
    if issues:
        raise ValueError("; ".join(issues))
    return text


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--results-root", type=pathlib.Path, required=True)
    parser.add_argument("--year", type=int, required=True)
    parser.add_argument("--expected-pages", type=int)
    args = parser.parse_args()
    pages = sorted((args.results_root / "docs/itemized").glob("*-sample-cache-audit.md"))
    failures = []
    if not pages:
        failures.append("no audit pages found")
    if args.expected_pages is not None and len(pages) != args.expected_pages:
        failures.append(f"expected {args.expected_pages} pages, found {len(pages)}")
    if not (args.results_root / "resources" / MAP_LOADER).is_file():
        failures.append(f"missing map loader resource: {MAP_LOADER}")
    for page in pages:
        failures.extend(f"{page.name}: {issue}" for issue in validate_page_format(
            page.read_text(encoding="utf-8"), args.year, page.name))
    print(json.dumps({
        "schema": "alpha60-results-page-format/1", "year": args.year,
        "audit_pages": len(pages), "status": "failed" if failures else "passed",
        "failures": failures,
    }, indent=2))
    return 1 if failures else 0


if __name__ == "__main__":
    raise SystemExit(main())
