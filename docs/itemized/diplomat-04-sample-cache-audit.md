---
layout: default
title: "diplomat-04 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# diplomat-04 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | The Diplomat |
| Collection key | `diplomat-04` |
| imdb_id | [tt17491088](https://www.imdb.com/title/tt17491088/) |
| wikipedia_url | [The Diplomat (American TV series)](https://en.wikipedia.org/wiki/The_Diplomat_(American_TV_series)) |
| Sample dates | 2026-10-16-to-2026-11-05 |
| Sample days | 21 |
| BTIH count | 322 |
| Unique BTIH count | 321 |
| Downloaders total | 3,564,738 |
| Uploaders total | 258,548 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-11-17T03:01:56Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/diplomat-04.xz`
- Hour directories: 500
- Other unparsable sample files: 0
- Hourly discontinuities: 0 (0 missing hours)
- Missing days: 0

### Sample archive discontinuities

None detected.

## 3. File sizes histogram *median[lowest, highest]*

![The Diplomat collection size histogram](figures/diplomat-04-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/diplomat-04-downloads-by-week-diplomat-04-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![diplomat-04 downloads by day](figures/diplomat-04-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/diplomat-04-cumulative-aggregate.geojson.gz" data-map-title="The Diplomat — diplomat-04" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open The Diplomat (diplomat-04) cumulative data map in new window" title="Opens interactive map for The Diplomat (diplomat-04) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 2.10 | 20.37 | 31.59 | 43.31 | 1.80 | 0.83 |

### Network infrastructure

[![The Diplomat cumulative map](figures/diplomat-04-carto.png)](figures/diplomat-04-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/diplomat-04-data-ge-1080p.webp)](figures/diplomat-04-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/diplomat-04-data-lt-1080p.webp)](figures/diplomat-04-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
