---
layout: default
title: "goat-2026 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# goat-2026 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | GOAT |
| Collection key | `goat-2026` |
| imdb_id | [tt27613895](https://www.imdb.com/title/tt27613895/) |
| wikipedia_url | [Goat (2026 film)](https://en.wikipedia.org/wiki/Goat_(2026_film)) |
| Sample dates | 2026-03-26-to-2026-07-08 |
| Sample days | 105 |
| BTIH count | 225 |
| Unique BTIH count | 206 |
| Downloaders total | 25,986,657 |
| Uploaders total | 1,739,432 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Sample coverage report

- Generated: 2026-09-13T17:13:05Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/goat-2026.xz`
- Hour directories: 2503
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 1 (1 missing hours)
- Missing days: 0

### Sample archive discontinuities

- hourly gap: last `2026-03-29 01:03`, resumed `2026-03-29 03:03` — missing 1 hour(s)

## 3. Media objects file size histogram

![GOAT collection size histogram](figures/goat-2026-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Visualization pass — graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/goat-2026-downloads-by-week-goat-2026-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![goat-2026 downloads by day](figures/goat-2026-downloads-by-day-day.svg)

## 5. Visualization pass — maps

### Cumulative geographic slices

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 2.63 | 14.53 | 37.79 | 41.10 | 1.24 | 0.74 |

### Cumulative network infrastructure

[![GOAT cumulative map](figures/goat-2026-carto.png)](figures/goat-2026-carto-4k.webp){:target="_blank" rel="noopener"}

### Cumulative data maps

**Cumulative >= 1080p**

[![Cumulative >= 1080p](figures/goat-2026-data-ge-1080p.webp)](figures/goat-2026-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

**Cumulative < 1080p**

[![Cumulative < 1080p](figures/goat-2026-data-lt-1080p.webp)](figures/goat-2026-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
