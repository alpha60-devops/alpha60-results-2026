---
layout: default
title: "beauty-108 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# beauty-108 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | The Beauty |
| Collection key | `beauty-108` |
| imdb_id | [tt33517752](https://www.imdb.com/title/tt33517752/) |
| wikipedia_url | [The Beauty (TV series)](https://en.wikipedia.org/wiki/The_Beauty_(TV_series)) |
| Sample dates | 2026-02-26-to-2026-06-10 |
| Sample days | 105 |
| BTIH count | 341 |
| Unique BTIH count | 320 |
| Downloaders total | 30,276,619 |
| Uploaders total | 743,955 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Sample coverage report

- Generated: 2026-09-13T17:13:03Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/beauty-108.xz`
- Hour directories: 2515
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 1 (1 missing hours)
- Missing days: 0

### Sample archive discontinuities

- hourly gap: last `2026-03-29 01:00`, resumed `2026-03-29 03:00` — missing 1 hour(s)

## 3. Media objects file size histogram

![The Beauty collection size histogram](figures/beauty-108-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Visualization pass — graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/beauty-108-downloads-by-week-beauty-108-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![beauty-108 downloads by day](figures/beauty-108-downloads-by-day-day.svg)

## 5. Visualization pass — maps

### Cumulative geographic slices

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 1.20 | 14.63 | 34.92 | 45.53 | 1.11 | 0.70 |

### Cumulative network infrastructure

[![The Beauty cumulative map](figures/beauty-108-carto.png)](figures/beauty-108-carto-4k.webp){:target="_blank" rel="noopener"}

### Cumulative data maps

**Cumulative >= 1080p**

[![Cumulative >= 1080p](figures/beauty-108-data-ge-1080p.webp)](figures/beauty-108-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

**Cumulative < 1080p**

[![Cumulative < 1080p](figures/beauty-108-data-lt-1080p.webp)](figures/beauty-108-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
