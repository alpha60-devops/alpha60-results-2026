---
layout: default
title: "x-men-97-201 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# x-men-97-201 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | X-Men '97 |
| Collection key | `x-men-97-201` |
| imdb_id | [tt16026746](https://www.imdb.com/title/tt16026746/) |
| wikipedia_url | [X-Men '97](https://en.wikipedia.org/wiki/X-Men_%2797) |
| Sample dates | 2026-07-02-to-2026-11-11 |
| Sample days | 133 |
| BTIH count | 254 |
| Unique BTIH count | 252 |
| Downloaders total | 23,184,977 |
| Uploaders total | 1,205,131 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-11-19T16:40:38Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/x-men-97-201.xz`
- Hour directories: 3144
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 1 (46 missing hours)
- Missing days: 1

### Sample archive discontinuities

- hourly gap: last `2026-10-11 22:02`, resumed `2026-10-13 21:02` — missing 46 hour(s)
- missing day: `2026-10-12`

## 3. File sizes histogram *median[lowest, highest]*

![X-Men '97 collection size histogram](figures/x-men-97-201-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/x-men-97-201-downloads-by-week-x-men-97-201-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![x-men-97-201 downloads by day](figures/x-men-97-201-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/x-men-97-201-cumulative-aggregate.geojson.gz" data-map-title="X-Men &#x27;97 — x-men-97-201" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open X-Men &#x27;97 (x-men-97-201) cumulative data map in new window" title="Opens interactive map for X-Men &#x27;97 (x-men-97-201) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 1.86 | 21.06 | 33.02 | 41.96 | 1.25 | 0.84 |

### Network infrastructure

[![X-Men '97 cumulative map](figures/x-men-97-201-carto.png)](figures/x-men-97-201-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/x-men-97-201-data-ge-1080p.webp)](figures/x-men-97-201-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/x-men-97-201-data-lt-1080p.webp)](figures/x-men-97-201-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
