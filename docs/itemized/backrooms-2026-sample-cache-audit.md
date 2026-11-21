---
layout: default
title: "backrooms-2026 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# backrooms-2026 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Backrooms |
| Collection key | `backrooms-2026` |
| imdb_id | [tt26657236](https://www.imdb.com/title/tt26657236/) |
| wikipedia_url | [Backrooms (film)](https://en.wikipedia.org/wiki/Backrooms_(film)) |
| Sample dates | 2026-07-15-to-2026-11-10 |
| Sample days | 119 |
| BTIH count | 304 |
| Unique BTIH count | 283 |
| Downloaders total | 33,317,026 |
| Uploaders total | 3,957,904 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-11-19T19:16:13Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/backrooms.xz`
- Hour directories: 2818
- Other unparsable sample files: 0
- Hourly discontinuities: 2 (38 missing hours)
- Missing days: 0

### Sample archive discontinuities

- hourly gap: last `2026-10-01 22:03`, resumed `2026-10-02 18:38` — missing 19 hour(s)
- hourly gap: last `2026-10-12 22:03`, resumed `2026-10-13 18:03` — missing 19 hour(s)

## 3. File sizes histogram *median[lowest, highest]*

![Backrooms collection size histogram](figures/backrooms-2026-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/backrooms-2026-downloads-by-week-backrooms-2026-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![backrooms-2026 downloads by day](figures/backrooms-2026-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/backrooms-2026-cumulative-aggregate.geojson.gz" data-map-title="Backrooms — backrooms-2026" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open Backrooms (backrooms-2026) cumulative data map in new window" title="Opens interactive map for Backrooms (backrooms-2026) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 2.37 | 19.91 | 34.59 | 41.01 | 1.32 | 0.80 |

### Network infrastructure

[![Backrooms cumulative map](figures/backrooms-2026-carto.png)](figures/backrooms-2026-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/backrooms-2026-data-ge-1080p.webp)](figures/backrooms-2026-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/backrooms-2026-data-lt-1080p.webp)](figures/backrooms-2026-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
