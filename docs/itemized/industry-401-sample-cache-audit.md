---
layout: default
title: "industry-401 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# industry-401 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Industry |
| Collection key | `industry-401` |
| imdb_id | [tt7671070](https://www.imdb.com/title/tt7671070/) |
| wikipedia_url | [Industry (TV series)](https://en.wikipedia.org/wiki/Industry_(TV_series)) |
| Sample dates | 2026-01-12-to-2026-04-26 |
| Sample days | 105 |
| BTIH count | 222 |
| Unique BTIH count | 212 |
| Downloaders total | 17,845,087 |
| Uploaders total | 417,404 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-09-13T17:13:06Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/industry-401.xz`
- Hour directories: 2516
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 1 (1 missing hours)
- Missing days: 0

### Sample archive discontinuities

- hourly gap: last `2026-03-29 01:06`, resumed `2026-03-29 03:06` — missing 1 hour(s)

## 3. File sizes histogram *median[lowest, highest]*

![Industry collection size histogram](figures/industry-401-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/industry-401-downloads-by-week-industry-401-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![industry-401 downloads by day](figures/industry-401-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/industry-401-cumulative-aggregate.geojson.gz" data-map-title="Industry — industry-401" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open Industry (industry-401) cumulative data map in new window" title="Opens interactive map for Industry (industry-401) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 1.35 | 14.24 | 33.81 | 46.76 | 1.18 | 0.66 |

### Network infrastructure

[![Industry cumulative map](figures/industry-401-carto.png)](figures/industry-401-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/industry-401-data-ge-1080p.webp)](figures/industry-401-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/industry-401-data-lt-1080p.webp)](figures/industry-401-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
