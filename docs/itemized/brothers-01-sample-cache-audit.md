---
layout: default
title: "brothers-01 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# brothers-01 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Brothers |
| Collection key | `brothers-01` |
| imdb_id | [tt6773088](https://www.imdb.com/title/tt6773088/) |
| wikipedia_url | [Brothers (2026 TV series)](https://en.wikipedia.org/wiki/Brothers_(2026_TV_series)) |
| Sample dates | 2026-09-24-to-2026-11-13 |
| Sample days | 51 |
| BTIH count | 228 |
| Unique BTIH count | 226 |
| Downloaders total | 5,358,979 |
| Uploaders total | 146,914 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-11-17T04:35:01Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/brothers-01.xz`
- Hour directories: 1160
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 1 (46 missing hours)
- Missing days: 1

### Sample archive discontinuities

- hourly gap: last `2026-10-11 22:03`, resumed `2026-10-13 21:03` — missing 46 hour(s)
- missing day: `2026-10-12`

## 3. File sizes histogram *median[lowest, highest]*

![Brothers collection size histogram](figures/brothers-01-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/brothers-01-downloads-by-week-brothers-01-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![brothers-01 downloads by day](figures/brothers-01-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/brothers-01-cumulative-aggregate.geojson.gz" data-map-title="Brothers — brothers-01" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open Brothers (brothers-01) cumulative data map in new window" title="Opens interactive map for Brothers (brothers-01) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 1.83 | 20.07 | 30.84 | 45.04 | 1.36 | 0.85 |

### Network infrastructure

[![Brothers cumulative map](figures/brothers-01-carto.png)](figures/brothers-01-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/brothers-01-data-ge-1080p.webp)](figures/brothers-01-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/brothers-01-data-lt-1080p.webp)](figures/brothers-01-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
