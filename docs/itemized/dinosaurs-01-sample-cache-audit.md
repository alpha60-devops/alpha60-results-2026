---
layout: default
title: "dinosaurs-01 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# dinosaurs-01 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | The Dinosaurs |
| Collection key | `dinosaurs-01` |
| imdb_id | [tt32493765](https://www.imdb.com/title/tt32493765/) |
| wikipedia_url | [The Dinosaurs (miniseries)](https://en.wikipedia.org/wiki/The_Dinosaurs_(miniseries)) |
| Sample dates | 2026-03-06-to-2026-06-25 |
| Sample days | 112 |
| BTIH count | 166 |
| Unique BTIH count | 164 |
| Downloaders total | 17,795,117 |
| Uploaders total | 578,385 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-09-13T17:13:04Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/dinosaurs-01.xz`
- Hour directories: 2640
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 3 (31 missing hours)
- Missing days: 0

### Sample archive discontinuities

- hourly gap: last `2026-03-27 22:00`, resumed `2026-03-28 08:00` — missing 9 hour(s)
- hourly gap: last `2026-03-29 01:00`, resumed `2026-03-29 03:00` — missing 1 hour(s)
- hourly gap: last `2026-04-03 02:00`, resumed `2026-04-04 00:00` — missing 21 hour(s)

## 3. File sizes histogram *median[lowest, highest]*

![The Dinosaurs collection size histogram](figures/dinosaurs-01-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/dinosaurs-01-downloads-by-week-dinosaurs-01-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![dinosaurs-01 downloads by day](figures/dinosaurs-01-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/dinosaurs-01-cumulative-aggregate.geojson.gz" data-map-title="The Dinosaurs — dinosaurs-01" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open The Dinosaurs (dinosaurs-01) cumulative data map in new window" title="Opens interactive map for The Dinosaurs (dinosaurs-01) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 1.16 | 14.75 | 36.08 | 44.40 | 1.19 | 0.71 |

### Network infrastructure

[![The Dinosaurs cumulative map](figures/dinosaurs-01-carto.png)](figures/dinosaurs-01-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/dinosaurs-01-data-ge-1080p.webp)](figures/dinosaurs-01-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/dinosaurs-01-data-lt-1080p.webp)](figures/dinosaurs-01-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
