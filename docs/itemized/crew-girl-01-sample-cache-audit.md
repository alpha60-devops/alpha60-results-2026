---
layout: default
title: "crew-girl-01 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# crew-girl-01 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Crew Girl |
| Collection key | `crew-girl-01` |
| imdb_id | [tt38218082](https://www.imdb.com/title/tt38218082/) |
| wikipedia_url | [Crew Girl](https://en.wikipedia.org/wiki/Crew_Girl) |
| Sample dates | 2026-09-10-to-2026-09-23 |
| Sample days | 14 |
| BTIH count | 196 |
| Unique BTIH count | 195 |
| Downloaders total | 1,254,086 |
| Uploaders total | 75,730 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-10-03T19:10:22Z
- Frozen sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/crew-girl-01.xz`
- Hour directories: 315
- Zero-length sample files: 0
- Malformed in-scope records accepted: 0 (producer rejects nonempty malformed input)
- Hourly discontinuities: 0 (0 missing hours)
- Missing days: 0

### Sample archive discontinuities

None detected.


### Frozen validation evidence

- Frozen content SHA-256: `8a2f37ce3267e4be2806cc529aa0116497fbe7cf1bf19460bd270929ebaaa9f8`
- Full-input producer receipt SHA-256: `035071dff47200bb166115eba75ea325a16217e0d600ed3b3674e5376bbbf108`
- Frozen raw archives: 315
- Empty sampler observations remain explicit gaps; no observations were imputed.
- Out-of-scope records retain the collection factory's established filtering.
- Excluded raw members: 1
- Excluded observations: 6

## 3. File sizes histogram *median[lowest, highest]*

![Crew Girl collection size histogram](figures/crew-girl-01-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/crew-girl-01-downloads-by-week-crew-girl-01-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![crew-girl-01 downloads by day](figures/crew-girl-01-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/crew-girl-01-cumulative-aggregate.geojson.gz" data-map-title="Crew Girl — crew-girl-01" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open Crew Girl (crew-girl-01) cumulative data map in new window" title="Opens interactive map for Crew Girl (crew-girl-01) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 2.86 | 19.32 | 31.48 | 44.26 | 1.56 | 0.52 |

### Network infrastructure

[![Crew Girl cumulative map](figures/crew-girl-01-carto.png)](figures/crew-girl-01-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/crew-girl-01-data-ge-1080p.webp)](figures/crew-girl-01-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/crew-girl-01-data-lt-1080p.webp)](figures/crew-girl-01-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
