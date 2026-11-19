---
layout: default
title: "neagley-01 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# neagley-01 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Neagley |
| Collection key | `neagley-01` |
| imdb_id | [tt33539520](https://www.imdb.com/title/tt33539520/) |
| wikipedia_url | [Neagley](https://en.wikipedia.org/wiki/Neagley) |
| Sample dates | 2026-09-17-to-2026-11-11 |
| Sample days | 56 |
| BTIH count | 521 |
| Unique BTIH count | 518 |
| Downloaders total | 17,946,454 |
| Uploaders total | 1,028,359 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-11-19T23:31:28Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/neagley-01.xz`
- Hour directories: 1344
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 0 (0 missing hours)
- Missing days: 0

### Sample archive discontinuities

None detected.

## 3. File sizes histogram *median[lowest, highest]*

![Neagley collection size histogram](figures/neagley-01-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/neagley-01-downloads-by-week-neagley-01-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![neagley-01 downloads by day](figures/neagley-01-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/neagley-01-cumulative-aggregate.geojson.gz" data-map-title="Neagley — neagley-01" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open Neagley (neagley-01) cumulative data map in new window" title="Opens interactive map for Neagley (neagley-01) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 3.49 | 19.63 | 31.15 | 43.35 | 1.56 | 0.83 |

### Network infrastructure

[![Neagley cumulative map](figures/neagley-01-carto.png)](figures/neagley-01-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/neagley-01-data-ge-1080p.webp)](figures/neagley-01-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/neagley-01-data-lt-1080p.webp)](figures/neagley-01-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
