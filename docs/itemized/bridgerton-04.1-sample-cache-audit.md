---
layout: default
title: "bridgerton-04.1 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# bridgerton-04.1 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Bridgerton |
| Collection key | `bridgerton-04.1` |
| imdb_id | [tt8740790](https://www.imdb.com/title/tt8740790/) |
| wikipedia_url | [Bridgerton](https://en.wikipedia.org/wiki/Bridgerton) |
| Sample dates | 2026-01-29-to-2026-08-02 |
| Sample days | 186 |
| BTIH count | 325 |
| Unique BTIH count | 320 |
| Downloaders total | 48,128,893 |
| Uploaders total | 1,743,355 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-09-13T17:13:04Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/bridgerton-04.1.xz`
- Hour directories: 4437
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 2 (10 missing hours)
- Missing days: 0

### Sample archive discontinuities

- hourly gap: last `2026-03-27 22:01`, resumed `2026-03-28 08:01` — missing 9 hour(s)
- hourly gap: last `2026-03-29 01:01`, resumed `2026-03-29 03:01` — missing 1 hour(s)

## 3. File sizes histogram *median[lowest, highest]*

![Bridgerton collection size histogram](figures/bridgerton-04.1-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/bridgerton-04-1-downloads-by-week-bridgerton-04.1-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![bridgerton-04.1 downloads by day](figures/bridgerton-04-1-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/bridgerton-04.1-cumulative-aggregate.geojson.gz" data-map-title="Bridgerton — bridgerton-04.1" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open Bridgerton (bridgerton-04.1) cumulative data map in new window" title="Opens interactive map for Bridgerton (bridgerton-04.1) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 1.59 | 15.63 | 34.58 | 45.13 | 1.28 | 0.73 |

### Network infrastructure

[![Bridgerton cumulative map](figures/bridgerton-04.1-carto.png)](figures/bridgerton-04.1-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/bridgerton-04.1-data-ge-1080p.webp)](figures/bridgerton-04.1-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/bridgerton-04.1-data-lt-1080p.webp)](figures/bridgerton-04.1-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
