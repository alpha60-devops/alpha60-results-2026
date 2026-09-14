---
layout: default
title: "rick-and-morty-901 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# rick-and-morty-901 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Rick and Morty |
| Collection key | `rick-and-morty-901` |
| imdb_id | [tt2861424](https://www.imdb.com/title/tt2861424/) |
| wikipedia_url | [Rick and Morty](https://en.wikipedia.org/wiki/Rick_and_Morty) |
| Sample dates | 2026-05-25-to-2026-09-06 |
| Sample days | 105 |
| BTIH count | 218 |
| Unique BTIH count | 212 |
| Downloaders total | 22,552,397 |
| Uploaders total | 2,502,989 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Sample coverage report

- Generated: 2026-09-13T17:13:09Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/rick-and-morty-901.xz`
- Hour directories: 2500
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 0 (0 missing hours)
- Missing days: 0

### Sample archive discontinuities

None detected.

## 3. Media objects file size histogram

![Rick and Morty collection size histogram](figures/rick-and-morty-901-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Visualization pass — graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/rick-and-morty-901-downloads-by-week-rick-and-morty-901-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![rick-and-morty-901 downloads by day](figures/rick-and-morty-901-downloads-by-day-day.svg)

## 5. Visualization pass — maps

### Cumulative geographic slices

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 2.17 | 18.77 | 34.02 | 40.18 | 1.73 | 0.75 |

### Cumulative network infrastructure

[![Rick and Morty cumulative map](figures/rick-and-morty-901-carto.png)](figures/rick-and-morty-901-carto-4k.webp){:target="_blank" rel="noopener"}

### Cumulative data maps

**Cumulative >= 1080p**

[![Cumulative >= 1080p](figures/rick-and-morty-901-data-ge-1080p.webp)](figures/rick-and-morty-901-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

**Cumulative < 1080p**

[![Cumulative < 1080p](figures/rick-and-morty-901-data-lt-1080p.webp)](figures/rick-and-morty-901-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
