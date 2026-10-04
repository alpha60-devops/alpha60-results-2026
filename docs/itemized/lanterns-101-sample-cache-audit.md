---
layout: default
title: "lanterns-101 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# lanterns-101 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Lanterns |
| Collection key | `lanterns-101` |
| imdb_id | [tt26545992](https://www.imdb.com/title/tt26545992/) |
| wikipedia_url | [Lanterns (TV series)](https://en.wikipedia.org/wiki/Lanterns_(TV_series)) |
| Sample dates | 2026-08-17-to-2026-09-28 |
| Sample days | 43 |
| BTIH count | 282 |
| Unique BTIH count | 269 |
| Downloaders total | 9,898,427 |
| Uploaders total | 1,864,242 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Sample coverage report

- Generated: 2026-10-03T19:10:22Z
- Frozen sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/lanterns-101.xz`
- Hour directories: 1027
- Zero-length sample files: 0
- Malformed in-scope records accepted: 0 (producer rejects nonempty malformed input)
- Hourly discontinuities: 0 (0 missing hours)
- Missing days: 0

### Sample archive discontinuities

None detected.


### Frozen validation evidence

- Frozen content SHA-256: `0bb0bba181c9d7e3fc26746cc0a749b523e0d2b74c063cbf355b579c36e61dec`
- Full-input producer receipt SHA-256: `6a80a5d2dfad4c915004a1d9c82cd6b88bababe2cb547372abdc004b2b4a4e3b`
- Frozen raw archives: 1027
- Empty sampler observations remain explicit gaps; no observations were imputed.
- Out-of-scope records retain the collection factory's established filtering.
- Excluded raw members: 0
- Excluded observations: 0

## 3. Media objects file size histogram

![Lanterns collection size histogram](figures/lanterns-101-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Visualization pass — graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/lanterns-101-downloads-by-week-lanterns-101-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![lanterns-101 downloads by day](figures/lanterns-101-downloads-by-day-day.svg)

## 5. Visualization pass — maps

### Cumulative geographic slices

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 5.57 | 23.25 | 29.69 | 38.08 | 2.81 | 0.59 |

### Cumulative network infrastructure

[![Lanterns cumulative map](figures/lanterns-101-carto.png)](figures/lanterns-101-carto-4k.webp){:target="_blank" rel="noopener"}

### Cumulative data maps

**Cumulative >= 1080p**

[![Cumulative >= 1080p](figures/lanterns-101-data-ge-1080p.webp)](figures/lanterns-101-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

**Cumulative < 1080p**

[![Cumulative < 1080p](figures/lanterns-101-data-lt-1080p.webp)](figures/lanterns-101-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
