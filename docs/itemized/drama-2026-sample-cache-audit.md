---
layout: default
title: "drama-2026 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# drama-2026 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | The Drama |
| Collection key | `drama-2026` |
| imdb_id | [tt33071426](https://www.imdb.com/title/tt33071426/) |
| wikipedia_url | [The Drama (film)](https://en.wikipedia.org/wiki/The_Drama_(film)) |
| Sample dates | 2026-08-04-to-2026-09-10 |
| Sample days | 38 |
| BTIH count | 111 |
| Unique BTIH count | 104 |
| Downloaders total | 4,404,256 |
| Uploaders total | 490,206 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-09-13T17:13:04Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/drama-2026.xz`
- Hour directories: 907
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 0 (0 missing hours)
- Missing days: 0

### Sample archive discontinuities

None detected.

## 3. File sizes histogram *median[lowest, highest]*

![The Drama collection size histogram](figures/drama-2026-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/drama-2026-downloads-by-week-drama-2026-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![drama-2026 downloads by day](figures/drama-2026-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/drama-2026-cumulative-aggregate.geojson.gz" data-map-title="The Drama — drama-2026" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open The Drama (drama-2026) cumulative data map in new window" title="Opens interactive map for The Drama (drama-2026) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 1.89 | 17.29 | 32.15 | 40.89 | 1.13 | 0.76 |

### Network infrastructure

[![The Drama cumulative map](figures/drama-2026-carto.png)](figures/drama-2026-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/drama-2026-data-ge-1080p.webp)](figures/drama-2026-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/drama-2026-data-lt-1080p.webp)](figures/drama-2026-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
