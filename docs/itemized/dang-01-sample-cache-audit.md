---
layout: default
title: "dang-01 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# dang-01 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | DANG! |
| Collection key | `dang-01` |
| imdb_id | [tt40003445](https://www.imdb.com/title/tt40003445/) |
| wikipedia_url | UNAVAILABLE — no English Wikipedia page exists |
| Sample dates | 2026-09-09-to-2026-09-11 |
| Sample days | 3 |
| BTIH count | 163 |
| Unique BTIH count | 162 |
| Downloaders total | 224,069 |
| Uploaders total | 9,503 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-09-13T17:13:04Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/dang-01.xz`
- Hour directories: 71
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 0 (0 missing hours)
- Missing days: 0

### Sample archive discontinuities

None detected.

## 3. File sizes histogram *median[lowest, highest]*

![DANG! collection size histogram](figures/dang-01-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/dang-01-downloads-by-week-dang-01-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![dang-01 downloads by day](figures/dang-01-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/dang-01-cumulative-aggregate.geojson.gz" data-map-title="DANG! — dang-01" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open DANG! (dang-01) cumulative data map in new window" title="Opens interactive map for DANG! (dang-01) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 1.62 | 16.92 | 38.77 | 36.43 | 1.28 | 0.50 |

### Network infrastructure

[![DANG! cumulative map](figures/dang-01-carto.png)](figures/dang-01-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/dang-01-data-ge-1080p.webp)](figures/dang-01-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/dang-01-data-lt-1080p.webp)](figures/dang-01-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
