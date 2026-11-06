---
layout: default
title: "mandalorian-and-grogu Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# mandalorian-and-grogu sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | The Mandalorian and Grogu |
| Collection key | `mandalorian-and-grogu` |
| imdb_id | [tt30825738](https://www.imdb.com/title/tt30825738/) |
| wikipedia_url | [The Mandalorian and Grogu](https://en.wikipedia.org/wiki/The_Mandalorian_and_Grogu) |
| Sample dates | 2026-06-23-to-2026-09-28 |
| Sample days | 98 |
| BTIH count | 509 |
| Unique BTIH count | 472 |
| Downloaders total | 31,757,324 |
| Uploaders total | 3,582,551 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-10-07T14:25:16Z
- Frozen sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/mandalorian-and-grogu.xz`
- Hour directories: 2332
- Zero-length sample files: 0
- Malformed in-scope records accepted: 0 (producer rejects nonempty malformed input)
- Hourly discontinuities: 1 (15 missing hours)
- Missing days: 0

### Sample archive discontinuities

- hourly gap: last `2026-09-01 02:01`, resumed `2026-09-01 18:28` — missing 15 hour(s)


### Frozen validation evidence

- Frozen content SHA-256: `02ced277c0dbe6392a39f23c1c62b9a694c48f7762810a02d768bda03e997f05`
- Full-input producer receipt SHA-256: `08593e25e612f597c383cc4b874550cb80bf4ad3dee2f35852b68c2ba2f9228c`
- Frozen raw archives: 2332
- Empty sampler observations remain explicit gaps; no observations were imputed.
- Out-of-scope records retain the collection factory's established filtering.
- Excluded raw members: 0
- Excluded observations: 0

## 3. File sizes histogram *median[lowest, highest]*

![The Mandalorian and Grogu collection size histogram](figures/mandalorian-and-grogu-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/mandalorian-and-grogu-downloads-by-week-mandalorian-and-grogu-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![mandalorian-and-grogu downloads by day](figures/mandalorian-and-grogu-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/mandalorian-and-grogu-cumulative-aggregate.geojson.gz" data-map-title="The Mandalorian and Grogu — mandalorian-and-grogu" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open The Mandalorian and Grogu (mandalorian-and-grogu) cumulative data map in new window" title="Opens interactive map for The Mandalorian and Grogu (mandalorian-and-grogu) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 2.09 | 19.17 | 33.14 | 43.36 | 1.44 | 0.81 |

### Network infrastructure

[![The Mandalorian and Grogu cumulative map](figures/mandalorian-and-grogu-carto.png)](figures/mandalorian-and-grogu-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/mandalorian-and-grogu-data-ge-1080p.webp)](figures/mandalorian-and-grogu-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/mandalorian-and-grogu-data-lt-1080p.webp)](figures/mandalorian-and-grogu-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
