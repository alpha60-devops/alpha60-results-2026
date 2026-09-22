---
layout: default
title: "for-all-mankind-501 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# for-all-mankind-501 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | For All Mankind |
| Collection key | `for-all-mankind-501` |
| imdb_id | [tt7772588](https://www.imdb.com/title/tt7772588/) |
| wikipedia_url | [For All Mankind (TV series)](https://en.wikipedia.org/wiki/For_All_Mankind_(TV_series)) |
| Sample dates | 2026-03-27-to-2026-08-27 |
| Sample days | 154 |
| BTIH count | 204 |
| Unique BTIH count | 195 |
| Downloaders total | 20,642,406 |
| Uploaders total | 745,006 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-09-13T17:13:05Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/for-all-mankind-501.xz`
- Hour directories: 3649
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 2 (30 missing hours)
- Missing days: 1

### Sample archive discontinuities

- hourly gap: last `2026-03-29 01:01`, resumed `2026-03-29 03:01` — missing 1 hour(s)
- hourly gap: last `2026-08-14 18:01`, resumed `2026-08-16 00:01` — missing 29 hour(s)
- missing day: `2026-08-15`

## 3. File sizes histogram *median[lowest, highest]*

![For All Mankind collection size histogram](figures/for-all-mankind-501-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/for-all-mankind-501-downloads-by-week-for-all-mankind-501-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![for-all-mankind-501 downloads by day](figures/for-all-mankind-501-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/for-all-mankind-501-cumulative-aggregate.geojson.gz" data-map-title="For All Mankind — for-all-mankind-501" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open For All Mankind (for-all-mankind-501) cumulative data map in new window" title="Opens interactive map for For All Mankind (for-all-mankind-501) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 1.15 | 16.37 | 35.26 | 43.33 | 1.12 | 0.78 |

### Network infrastructure

[![For All Mankind cumulative map](figures/for-all-mankind-501-carto.png)](figures/for-all-mankind-501-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/for-all-mankind-501-data-ge-1080p.webp)](figures/for-all-mankind-501-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/for-all-mankind-501-data-lt-1080p.webp)](figures/for-all-mankind-501-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
