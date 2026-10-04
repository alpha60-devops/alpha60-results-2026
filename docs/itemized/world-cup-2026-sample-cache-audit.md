---
layout: default
title: "world-cup-2026 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# world-cup-2026 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | 2026 FIFA World Cup |
| Collection key | `world-cup-2026` |
| imdb_id | [tt32915471](https://www.imdb.com/title/tt32915471/) |
| wikipedia_url | [2026 FIFA World Cup](https://en.wikipedia.org/wiki/2026_FIFA_World_Cup) |
| Sample dates | 2026-06-29-to-2026-09-29 |
| Sample days | 93 |
| BTIH count | 574 |
| Unique BTIH count | 493 |
| Downloaders total | 42,779,273 |
| Uploaders total | 469,114 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Sample coverage report

- Generated: 2026-10-03T19:10:22Z
- Frozen sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/world-cup-2026.xz`
- Hour directories: 2228
- Zero-length sample files: 0
- Malformed in-scope records accepted: 0 (producer rejects nonempty malformed input)
- Hourly discontinuities: 0 (0 missing hours)
- Missing days: 0

### Sample archive discontinuities

None detected.


### Frozen validation evidence

- Frozen content SHA-256: `6638b232844c05e8ad8baf18660f5f0a18f95a1d398fa39e0570dca583b3d2c6`
- Full-input producer receipt SHA-256: `489f64ee208d533bd6b892cf9a69d446f5b444ee07700b6b5311386aa6251d56`
- Frozen raw archives: 2228
- Empty sampler observations remain explicit gaps; no observations were imputed.
- Out-of-scope records retain the collection factory's established filtering.
- Excluded raw members: 9
- Excluded observations: 15212

## 3. Media objects file size histogram

![2026 FIFA World Cup collection size histogram](figures/world-cup-2026-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Visualization pass — graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/world-cup-2026-downloads-by-week-world-cup-2026-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![world-cup-2026 downloads by day](figures/world-cup-2026-downloads-by-day-day.svg)

## 5. Visualization pass — maps

### Cumulative geographic slices

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 1.25 | 17.80 | 34.44 | 44.59 | 1.02 | 0.89 |

### Cumulative network infrastructure

[![2026 FIFA World Cup cumulative map](figures/world-cup-2026-carto.png)](figures/world-cup-2026-carto-4k.webp){:target="_blank" rel="noopener"}

### Cumulative data maps

**Cumulative >= 1080p**

[![Cumulative >= 1080p](figures/world-cup-2026-data-ge-1080p.webp)](figures/world-cup-2026-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

**Cumulative < 1080p**

[![Cumulative < 1080p](figures/world-cup-2026-data-lt-1080p.webp)](figures/world-cup-2026-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
