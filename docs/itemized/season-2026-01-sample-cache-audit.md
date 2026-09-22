---
layout: default
title: "season-2026-01 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# season-2026-01 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | The Season |
| Collection key | `season-2026-01` |
| imdb_id | [tt36237567](https://www.imdb.com/title/tt36237567/) |
| wikipedia_url | [The Season](https://en.wikipedia.org/wiki/The_Season) |
| Sample dates | 2026-06-17-to-2026-09-08 |
| Sample days | 84 |
| BTIH count | 169 |
| Unique BTIH count | 161 |
| Downloaders total | 9,617,136 |
| Uploaders total | 95,742 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-09-13T17:13:09Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/season-2026-01.xz`
- Hour directories: 1968
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 1 (29 missing hours)
- Missing days: 1

### Sample archive discontinuities

- hourly gap: last `2026-08-14 18:00`, resumed `2026-08-16 00:00` — missing 29 hour(s)
- missing day: `2026-08-15`

## 3. File sizes histogram *median[lowest, highest]*

![The Season collection size histogram](figures/season-2026-01-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/season-2026-01-downloads-by-week-season-2026-01-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![season-2026-01 downloads by day](figures/season-2026-01-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/season-2026-01-cumulative-aggregate.geojson.gz" data-map-title="The Season — season-2026-01" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open The Season (season-2026-01) cumulative data map in new window" title="Opens interactive map for The Season (season-2026-01) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 1.12 | 16.07 | 36.70 | 42.03 | 1.08 | 0.85 |

### Network infrastructure

[![The Season cumulative map](figures/season-2026-01-carto.png)](figures/season-2026-01-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/season-2026-01-data-ge-1080p.webp)](figures/season-2026-01-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/season-2026-01-data-lt-1080p.webp)](figures/season-2026-01-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
