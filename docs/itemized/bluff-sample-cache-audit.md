---
layout: default
title: "bluff Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# bluff sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | The Bluff |
| Collection key | `bluff` |
| imdb_id | [tt14181714](https://www.imdb.com/title/tt14181714/) |
| wikipedia_url | [The Bluff (film)](https://en.wikipedia.org/wiki/The_Bluff_(film)) |
| Sample dates | 2026-02-26-to-2026-06-10 |
| Sample days | 105 |
| BTIH count | 198 |
| Unique BTIH count | 180 |
| Downloaders total | 26,937,145 |
| Uploaders total | 1,906,987 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-09-13T17:13:04Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/bluff.xz`
- Hour directories: 2501
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 1 (1 missing hours)
- Missing days: 0

### Sample archive discontinuities

- hourly gap: last `2026-03-29 01:01`, resumed `2026-03-29 03:01` — missing 1 hour(s)

## 3. File sizes histogram *median[lowest, highest]*

![The Bluff collection size histogram](figures/bluff-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/bluff-downloads-by-week-bluff-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![bluff downloads by day](figures/bluff-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/bluff-cumulative-aggregate.geojson.gz" data-map-title="The Bluff — bluff" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open The Bluff (bluff) cumulative data map in new window" title="Opens interactive map for The Bluff (bluff) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 3.19 | 12.76 | 35.87 | 44.21 | 1.05 | 0.67 |

### Network infrastructure

[![The Bluff cumulative map](figures/bluff-carto.png)](figures/bluff-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/bluff-data-ge-1080p.webp)](figures/bluff-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/bluff-data-lt-1080p.webp)](figures/bluff-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
