---
layout: default
title: "hijack-201 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# hijack-201 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Hijack |
| Collection key | `hijack-201` |
| imdb_id | [tt19854762](https://www.imdb.com/title/tt19854762/) |
| wikipedia_url | [Hijack (TV series)](https://en.wikipedia.org/wiki/Hijack_(TV_series)) |
| Sample dates | 2026-01-14-to-2026-04-29 |
| Sample days | 106 |
| BTIH count | 297 |
| Unique BTIH count | 276 |
| Downloaders total | 29,047,725 |
| Uploaders total | 1,171,159 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-09-13T17:13:06Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/hijack-201.xz`
- Hour directories: 2481
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 2 (46 missing hours)
- Missing days: 1

### Sample archive discontinuities

- hourly gap: last `2026-03-02 02:04`, resumed `2026-03-04 00:04` — missing 45 hour(s)
- hourly gap: last `2026-03-29 01:04`, resumed `2026-03-29 03:04` — missing 1 hour(s)
- missing day: `2026-03-03`

## 3. File sizes histogram *median[lowest, highest]*

![Hijack collection size histogram](figures/hijack-201-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/hijack-201-downloads-by-week-hijack-201-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![hijack-201 downloads by day](figures/hijack-201-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/hijack-201-cumulative-aggregate.geojson.gz" data-map-title="Hijack — hijack-201" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open Hijack (hijack-201) cumulative data map in new window" title="Opens interactive map for Hijack (hijack-201) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 1.65 | 14.63 | 33.34 | 47.22 | 1.16 | 0.67 |

### Network infrastructure

[![Hijack cumulative map](figures/hijack-201-carto.png)](figures/hijack-201-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/hijack-201-data-ge-1080p.webp)](figures/hijack-201-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/hijack-201-data-lt-1080p.webp)](figures/hijack-201-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
