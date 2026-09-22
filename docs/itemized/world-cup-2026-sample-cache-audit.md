---
layout: default
title: "world-cup-2026 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# world-cup-2026 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | 2026 FIFA World Cup |
| Collection key | `world-cup-2026` |
| imdb_id | [tt32915471](https://www.imdb.com/title/tt32915471/) |
| wikipedia_url | [2026 FIFA World Cup](https://en.wikipedia.org/wiki/2026_FIFA_World_Cup) |
| Sample dates | 2026-06-29-to-2026-09-08 |
| Sample days | 72 |
| BTIH count | 574 |
| Unique BTIH count | 493 |
| Downloaders total | 34,662,047 |
| Uploaders total | 412,914 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-09-13T17:13:10Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/world-cup-2026.xz`
- Hour directories: 1724
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 0 (0 missing hours)
- Missing days: 0

### Sample archive discontinuities

None detected.

## 3. File sizes histogram *median[lowest, highest]*

![2026 FIFA World Cup collection size histogram](figures/world-cup-2026-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/world-cup-2026-downloads-by-week-world-cup-2026-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![world-cup-2026 downloads by day](figures/world-cup-2026-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/world-cup-2026-cumulative-aggregate.geojson.gz" data-map-title="2026 FIFA World Cup — world-cup-2026" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open 2026 FIFA World Cup (world-cup-2026) cumulative data map in new window" title="Opens interactive map for 2026 FIFA World Cup (world-cup-2026) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 1.13 | 17.18 | 34.96 | 44.04 | 1.03 | 0.89 |

### Network infrastructure

[![2026 FIFA World Cup cumulative map](figures/world-cup-2026-carto.png)](figures/world-cup-2026-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/world-cup-2026-data-ge-1080p.webp)](figures/world-cup-2026-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/world-cup-2026-data-lt-1080p.webp)](figures/world-cup-2026-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
