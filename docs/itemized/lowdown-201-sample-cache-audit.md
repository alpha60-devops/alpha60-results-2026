---
layout: default
title: "lowdown-201 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# lowdown-201 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | The Lowdown |
| Collection key | `lowdown-201` |
| imdb_id | [tt31289994](https://www.imdb.com/title/tt31289994/) |
| wikipedia_url | [The Lowdown (American TV series)](https://en.wikipedia.org/wiki/The_Lowdown_(American_TV_series)) |
| Sample dates | 2026-10-15-to-2026-11-11 |
| Sample days | 28 |
| BTIH count | 199 |
| Unique BTIH count | 199 |
| Downloaders total | 3,155,301 |
| Uploaders total | 120,185 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-11-16T20:20:40Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/lowdown-201.xz`
- Hour directories: 666
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 0 (0 missing hours)
- Missing days: 0

### Sample archive discontinuities

None detected.

## 3. File sizes histogram *median[lowest, highest]*

![The Lowdown collection size histogram](figures/lowdown-201-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/lowdown-201-downloads-by-week-lowdown-201-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![lowdown-201 downloads by day](figures/lowdown-201-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/lowdown-201-cumulative-aggregate.geojson.gz" data-map-title="The Lowdown — lowdown-201" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open The Lowdown (lowdown-201) cumulative data map in new window" title="Opens interactive map for The Lowdown (lowdown-201) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 1.52 | 20.32 | 31.71 | 44.11 | 1.50 | 0.84 |

### Network infrastructure

[![The Lowdown cumulative map](figures/lowdown-201-carto.png)](figures/lowdown-201-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/lowdown-201-data-ge-1080p.webp)](figures/lowdown-201-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/lowdown-201-data-lt-1080p.webp)](figures/lowdown-201-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
