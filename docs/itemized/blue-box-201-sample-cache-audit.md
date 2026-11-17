---
layout: default
title: "blue-box-201 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# blue-box-201 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Blue Box |
| Collection key | `blue-box-201` |
| imdb_id | [tt32639706](https://www.imdb.com/title/tt32639706/) |
| wikipedia_url | UNAVAILABLE — no English Wikipedia page exists |
| Sample dates | 2026-10-05-to-2026-11-14 |
| Sample days | 41 |
| BTIH count | 123 |
| Unique BTIH count | 120 |
| Downloaders total | 2,885,066 |
| Uploaders total | 252,374 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-11-16T20:13:26Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/blue-box-201.xz`
- Hour directories: 962
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 0 (0 missing hours)
- Missing days: 0

### Sample archive discontinuities

None detected.

## 3. File sizes histogram *median[lowest, highest]*

![Blue Box collection size histogram](figures/blue-box-201-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/blue-box-201-downloads-by-week-blue-box-201-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![blue-box-201 downloads by day](figures/blue-box-201-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/blue-box-201-cumulative-aggregate.geojson.gz" data-map-title="Blue Box — blue-box-201" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open Blue Box (blue-box-201) cumulative data map in new window" title="Opens interactive map for Blue Box (blue-box-201) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 1.35 | 17.79 | 40.22 | 38.87 | 0.96 | 0.82 |

### Network infrastructure

[![Blue Box cumulative map](figures/blue-box-201-carto.png)](figures/blue-box-201-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/blue-box-201-data-ge-1080p.webp)](figures/blue-box-201-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/blue-box-201-data-lt-1080p.webp)](figures/blue-box-201-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
