---
layout: default
title: "dang-01 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# dang-01 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | DANG! |
| Collection key | `dang-01` |
| imdb_id | [tt40003445](https://www.imdb.com/title/tt40003445/) |
| wikipedia_url | UNAVAILABLE — no English Wikipedia page exists |
| Sample dates | 2026-09-09-to-2026-09-29 |
| Sample days | 21 |
| BTIH count | 175 |
| Unique BTIH count | 174 |
| Downloaders total | 1,405,793 |
| Uploaders total | 37,982 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-10-03T19:10:22Z
- Frozen sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/dang-01.xz`
- Hour directories: 503
- Zero-length sample files: 0
- Malformed in-scope records accepted: 0 (producer rejects nonempty malformed input)
- Hourly discontinuities: 0 (0 missing hours)
- Missing days: 0

### Sample archive discontinuities

None detected.


### Frozen validation evidence

- Frozen content SHA-256: `3301adf70fb824f9aca6455b993a9e2f9350ba02f592b05d0612e151db24d0f7`
- Full-input producer receipt SHA-256: `47f7268fd0709dad61d2f007e52c0398fe493bf8f0a285cd3d5d2368ab07ebcd`
- Frozen raw archives: 503
- Empty sampler observations remain explicit gaps; no observations were imputed.
- Out-of-scope records retain the collection factory's established filtering.
- Excluded raw members: 0
- Excluded observations: 0

## 3. File sizes histogram *median[lowest, highest]*

![DANG! collection size histogram](figures/dang-01-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/dang-01-downloads-by-week-dang-01-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![dang-01 downloads by day](figures/dang-01-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/dang-01-cumulative-aggregate.geojson.gz" data-map-title="DANG! — dang-01" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open DANG! (dang-01) cumulative data map in new window" title="Opens interactive map for DANG! (dang-01) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 1.75 | 18.92 | 34.70 | 42.86 | 1.15 | 0.62 |

### Network infrastructure

[![DANG! cumulative map](figures/dang-01-carto.png)](figures/dang-01-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/dang-01-data-ge-1080p.webp)](figures/dang-01-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/dang-01-data-lt-1080p.webp)](figures/dang-01-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
