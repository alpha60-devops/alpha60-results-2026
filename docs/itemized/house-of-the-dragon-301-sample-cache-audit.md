---
layout: default
title: "house-of-the-dragon-301 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# house-of-the-dragon-301 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | House of the Dragon |
| Collection key | `house-of-the-dragon-301` |
| imdb_id | [tt11198330](https://www.imdb.com/title/tt11198330/) |
| wikipedia_url | [House of the Dragon](https://en.wikipedia.org/wiki/House_of_the_Dragon) |
| Sample dates | 2026-06-22-to-2026-09-06 |
| Sample days | 77 |
| BTIH count | 448 |
| Unique BTIH count | 432 |
| Downloaders total | 35,919,849 |
| Uploaders total | 4,295,345 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Sample coverage report

- Generated: 2026-09-13T17:13:06Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/house-of-the-dragon-301.xz`
- Hour directories: 1762
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 3 (83 missing hours)
- Missing days: 3

### Sample archive discontinuities

- hourly gap: last `2026-07-03 22:05`, resumed `2026-07-05 01:05` — missing 26 hour(s)
- hourly gap: last `2026-07-06 02:05`, resumed `2026-07-06 04:05` — missing 1 hour(s)
- hourly gap: last `2026-08-12 15:05`, resumed `2026-08-15 00:05` — missing 56 hour(s)
- missing day: `2026-07-04`
- missing day: `2026-08-13`
- missing day: `2026-08-14`

## 3. Media objects file size histogram

![House of the Dragon collection size histogram](figures/house-of-the-dragon-301-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Visualization pass — graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/house-of-the-dragon-301-downloads-by-week-house-of-the-dragon-301-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![house-of-the-dragon-301 downloads by day](figures/house-of-the-dragon-301-downloads-by-day-day.svg)

## 5. Visualization pass — maps

### Cumulative geographic slices

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 3.51 | 17.33 | 34.63 | 40.40 | 1.70 | 0.73 |

### Cumulative network infrastructure

[![House of the Dragon cumulative map](figures/house-of-the-dragon-301-carto.png)](figures/house-of-the-dragon-301-carto-4k.webp){:target="_blank" rel="noopener"}

### Cumulative data maps

**Cumulative >= 1080p**

[![Cumulative >= 1080p](figures/house-of-the-dragon-301-data-ge-1080p.webp)](figures/house-of-the-dragon-301-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

**Cumulative < 1080p**

[![Cumulative < 1080p](figures/house-of-the-dragon-301-data-lt-1080p.webp)](figures/house-of-the-dragon-301-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
