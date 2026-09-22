---
layout: default
title: "sugar-201 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# sugar-201 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Sugar |
| Collection key | `sugar-201` |
| imdb_id | [tt16418808](https://www.imdb.com/title/tt16418808/) |
| wikipedia_url | [Sugar (2024 TV series)](https://en.wikipedia.org/wiki/Sugar_(2024_TV_series)) |
| Sample dates | 2026-06-19-to-2026-09-10 |
| Sample days | 84 |
| BTIH count | 220 |
| Unique BTIH count | 217 |
| Downloaders total | 15,259,081 |
| Uploaders total | 520,577 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-09-13T17:13:10Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/sugar-201.xz`
- Hour directories: 1997
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 0 (0 missing hours)
- Missing days: 0

### Sample archive discontinuities

None detected.

## 3. File sizes histogram *median[lowest, highest]*

![Sugar collection size histogram](figures/sugar-201-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/sugar-201-downloads-by-week-sugar-201-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![sugar-201 downloads by day](figures/sugar-201-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/sugar-201-cumulative-aggregate.geojson.gz" data-map-title="Sugar — sugar-201" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open Sugar (sugar-201) cumulative data map in new window" title="Opens interactive map for Sugar (sugar-201) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 1.35 | 16.98 | 35.05 | 43.01 | 1.20 | 0.85 |

### Network infrastructure

[![Sugar cumulative map](figures/sugar-201-carto.png)](figures/sugar-201-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/sugar-201-data-ge-1080p.webp)](figures/sugar-201-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/sugar-201-data-lt-1080p.webp)](figures/sugar-201-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
