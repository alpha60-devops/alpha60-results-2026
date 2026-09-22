---
layout: default
title: "all-you-need-is-kill Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# all-you-need-is-kill sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | All You Need Is Kill |
| Collection key | `all-you-need-is-kill` |
| imdb_id | [tt36148135](https://www.imdb.com/title/tt36148135/) |
| wikipedia_url | [All You Need Is Kill (film)](https://en.wikipedia.org/wiki/All_You_Need_Is_Kill_(film)) |
| Sample dates | 2026-04-16-to-2026-08-31 |
| Sample days | 138 |
| BTIH count | 13 |
| Unique BTIH count | 12 |
| Downloaders total | 1,641,245 |
| Uploaders total | 69,918 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-09-13T17:13:03Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/all-you-need-is-kill.xz`
- Hour directories: 3283
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 1 (26 missing hours)
- Missing days: 0

### Sample archive discontinuities

- hourly gap: last `2026-08-12 03:00`, resumed `2026-08-13 06:00` — missing 26 hour(s)

## 3. File sizes histogram *median[lowest, highest]*

![All You Need Is Kill collection size histogram](figures/all-you-need-is-kill-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/all-you-need-is-kill-downloads-by-week-all-you-need-is-kill-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![all-you-need-is-kill downloads by day](figures/all-you-need-is-kill-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/all-you-need-is-kill-cumulative-aggregate.geojson.gz" data-map-title="All You Need Is Kill — all-you-need-is-kill" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open All You Need Is Kill (all-you-need-is-kill) cumulative data map in new window" title="Opens interactive map for All You Need Is Kill (all-you-need-is-kill) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 0.95 | 14.51 | 32.39 | 37.14 | 0.91 | 0.71 |

### Network infrastructure

[![All You Need Is Kill cumulative map](figures/all-you-need-is-kill-carto.png)](figures/all-you-need-is-kill-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/all-you-need-is-kill-data-ge-1080p.webp)](figures/all-you-need-is-kill-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/all-you-need-is-kill-data-lt-1080p.webp)](figures/all-you-need-is-kill-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
