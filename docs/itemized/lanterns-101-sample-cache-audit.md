---
layout: default
title: "lanterns-101 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# lanterns-101 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Lanterns |
| Collection key | `lanterns-101` |
| imdb_id | [tt26545992](https://www.imdb.com/title/tt26545992/) |
| wikipedia_url | [Lanterns (TV series)](https://en.wikipedia.org/wiki/Lanterns_(TV_series)) |
| Sample dates | 2026-08-17-to-2026-09-06 |
| Sample days | 21 |
| BTIH count | 281 |
| Unique BTIH count | 268 |
| Downloaders total | 5,474,293 |
| Uploaders total | 1,074,204 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-09-13T17:13:06Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/lanterns-101.xz`
- Hour directories: 499
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 0 (0 missing hours)
- Missing days: 0

### Sample archive discontinuities

None detected.

## 3. File sizes histogram *median[lowest, highest]*

![Lanterns collection size histogram](figures/lanterns-101-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/lanterns-101-downloads-by-week-lanterns-101-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![lanterns-101 downloads by day](figures/lanterns-101-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/lanterns-101-cumulative-aggregate.geojson.gz" data-map-title="Lanterns — lanterns-101" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open Lanterns (lanterns-101) cumulative data map in new window" title="Opens interactive map for Lanterns (lanterns-101) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 5.32 | 22.13 | 26.89 | 35.46 | 2.88 | 0.57 |

### Network infrastructure

[![Lanterns cumulative map](figures/lanterns-101-carto.png)](figures/lanterns-101-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/lanterns-101-data-ge-1080p.webp)](figures/lanterns-101-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/lanterns-101-data-lt-1080p.webp)](figures/lanterns-101-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
