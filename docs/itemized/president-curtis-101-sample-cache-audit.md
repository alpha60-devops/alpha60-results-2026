---
layout: default
title: "president-curtis-101 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# president-curtis-101 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | President Curtis |
| Collection key | `president-curtis-101` |
| imdb_id | [tt37692332](https://www.imdb.com/title/tt37692332/) |
| wikipedia_url | [President Curtis (TV series)](https://en.wikipedia.org/wiki/President_Curtis_(TV_series)) |
| Sample dates | 2026-07-28-to-2026-11-16 |
| Sample days | 112 |
| BTIH count | 259 |
| Unique BTIH count | 259 |
| Downloaders total | 12,233,584 |
| Uploaders total | 868,094 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-11-20T06:05:53Z
- Sample archive directory: `/home/bkoz/src/alpha60-campaigns/year-2026/20261116-v8/objects/president-curtis-101/g1/results/coverage-inputs`
- Hour directories: 2650
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 2 (38 missing hours)
- Missing days: 1

### Sample archive discontinuities

- hourly gap: last `2026-08-14 18:03`, resumed `2026-08-16 00:03` — missing 29 hour(s)
- hourly gap: last `2026-08-30 23:03`, resumed `2026-08-31 09:03` — missing 9 hour(s)
- missing day: `2026-08-15`

## 3. File sizes histogram *median[lowest, highest]*

![President Curtis collection size histogram](figures/president-curtis-101-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/president-curtis-101-downloads-by-week-president-curtis-101-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![president-curtis-101 downloads by day](figures/president-curtis-101-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/president-curtis-101-cumulative-aggregate.geojson.gz" data-map-title="President Curtis — president-curtis-101" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open President Curtis (president-curtis-101) cumulative data map in new window" title="Opens interactive map for President Curtis (president-curtis-101) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 2.24 | 20.13 | 33.08 | 42.34 | 1.43 | 0.79 |

### Network infrastructure

[![President Curtis cumulative map](figures/president-curtis-101-carto.png)](figures/president-curtis-101-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/president-curtis-101-data-ge-1080p.webp)](figures/president-curtis-101-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/president-curtis-101-data-lt-1080p.webp)](figures/president-curtis-101-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
