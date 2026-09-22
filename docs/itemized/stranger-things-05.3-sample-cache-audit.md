---
layout: default
title: "stranger-things-05.3 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# stranger-things-05.3 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Stranger Things |
| Collection key | `stranger-things-05.3` |
| imdb_id | [tt4574334](https://www.imdb.com/title/tt4574334/) |
| wikipedia_url | [Stranger Things](https://en.wikipedia.org/wiki/Stranger_Things) |
| Sample dates | 2026-01-01-to-2026-07-01 |
| Sample days | 182 |
| BTIH count | 234 |
| Unique BTIH count | 220 |
| Downloaders total | 47,403,212 |
| Uploaders total | 2,418,583 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-09-13T17:13:10Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/stranger-things-05.3.xz`
- Hour directories: 4365
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 1 (1 missing hours)
- Missing days: 0

### Sample archive discontinuities

- hourly gap: last `2026-03-29 01:06`, resumed `2026-03-29 03:06` — missing 1 hour(s)

## 3. File sizes histogram *median[lowest, highest]*

![Stranger Things collection size histogram](figures/stranger-things-05.3-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/stranger-things-05-3-downloads-by-week-stranger-things-05.3-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![stranger-things-05.3 downloads by day](figures/stranger-things-05-3-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/stranger-things-05.3-cumulative-aggregate.geojson.gz" data-map-title="Stranger Things — stranger-things-05.3" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open Stranger Things (stranger-things-05.3) cumulative data map in new window" title="Opens interactive map for Stranger Things (stranger-things-05.3) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 1.18 | 14.28 | 35.66 | 45.35 | 0.99 | 0.70 |

### Network infrastructure

[![Stranger Things cumulative map](figures/stranger-things-05.3-carto.png)](figures/stranger-things-05.3-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/stranger-things-05.3-data-ge-1080p.webp)](figures/stranger-things-05.3-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/stranger-things-05.3-data-lt-1080p.webp)](figures/stranger-things-05.3-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
