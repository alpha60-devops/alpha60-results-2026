---
layout: default
title: "knight-of-the-seven-kingdoms-106 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# knight-of-the-seven-kingdoms-106 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Knight of the Seven Kingdoms |
| Collection key | `knight-of-the-seven-kingdoms-106` |
| imdb_id | [tt27497448](https://www.imdb.com/title/tt27497448/) |
| wikipedia_url | [A Knight of the Seven Kingdoms (TV series)](https://en.wikipedia.org/wiki/A_Knight_of_the_Seven_Kingdoms_(TV_series)) |
| Sample dates | 2026-02-23-to-2026-08-23 |
| Sample days | 182 |
| BTIH count | 286 |
| Unique BTIH count | 262 |
| Downloaders total | 47,239,651 |
| Uploaders total | 3,544,554 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Sample coverage report

- Generated: 2026-09-13T17:13:06Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/knight-of-the-seven-kingdoms-106.xz`
- Hour directories: 4335
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 3 (28 missing hours)
- Missing days: 1

### Sample archive discontinuities

- hourly gap: last `2026-03-29 01:00`, resumed `2026-03-29 03:00` — missing 1 hour(s)
- hourly gap: last `2026-05-27 22:00`, resumed `2026-05-28 00:14` — missing 1 hour(s)
- hourly gap: last `2026-07-03 22:00`, resumed `2026-07-05 01:00` — missing 26 hour(s)
- missing day: `2026-07-04`

## 3. Media objects file size histogram

![Knight of the Seven Kingdoms collection size histogram](figures/knight-of-the-seven-kingdoms-106-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Visualization pass — graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/knight-of-the-seven-kingdoms-106-downloads-by-week-knight-of-the-seven-kingdoms-106-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![knight-of-the-seven-kingdoms-106 downloads by day](figures/knight-of-the-seven-kingdoms-106-downloads-by-day-day.svg)

## 5. Visualization pass — maps

### Cumulative geographic slices

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 1.74 | 14.63 | 34.21 | 44.58 | 1.23 | 0.77 |

### Cumulative network infrastructure

[![Knight of the Seven Kingdoms cumulative map](figures/knight-of-the-seven-kingdoms-106-carto.png)](figures/knight-of-the-seven-kingdoms-106-carto-4k.webp){:target="_blank" rel="noopener"}

### Cumulative data maps

**Cumulative >= 1080p**

[![Cumulative >= 1080p](figures/knight-of-the-seven-kingdoms-106-data-ge-1080p.webp)](figures/knight-of-the-seven-kingdoms-106-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

**Cumulative < 1080p**

[![Cumulative < 1080p](figures/knight-of-the-seven-kingdoms-106-data-lt-1080p.webp)](figures/knight-of-the-seven-kingdoms-106-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
