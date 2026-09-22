---
layout: default
title: "silo-301 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# silo-301 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Silo |
| Collection key | `silo-301` |
| imdb_id | [tt14688458](https://www.imdb.com/title/tt14688458/) |
| wikipedia_url | [Silo (TV series)](https://en.wikipedia.org/wiki/Silo_(TV_series)) |
| Sample dates | 2026-07-03-to-2026-08-27 |
| Sample days | 56 |
| BTIH count | 238 |
| Unique BTIH count | 236 |
| Downloaders total | 14,320,213 |
| Uploaders total | 1,706,771 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-09-13T17:13:09Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/silo-301.xz`
- Hour directories: 1327
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 0 (0 missing hours)
- Missing days: 0

### Sample archive discontinuities

None detected.

## 3. File sizes histogram *median[lowest, highest]*

![Silo collection size histogram](figures/silo-301-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/silo-301-downloads-by-week-silo-301-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![silo-301 downloads by day](figures/silo-301-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/silo-301-cumulative-aggregate.geojson.gz" data-map-title="Silo — silo-301" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open Silo (silo-301) cumulative data map in new window" title="Opens interactive map for Silo (silo-301) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 2.73 | 18.85 | 31.28 | 42.16 | 1.65 | 0.77 |

### Network infrastructure

[![Silo cumulative map](figures/silo-301-carto.png)](figures/silo-301-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/silo-301-data-ge-1080p.webp)](figures/silo-301-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/silo-301-data-lt-1080p.webp)](figures/silo-301-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
