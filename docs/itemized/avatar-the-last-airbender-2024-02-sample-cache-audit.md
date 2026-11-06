---
layout: default
title: "avatar-the-last-airbender-2024-02 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# avatar-the-last-airbender-2024-02 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Avatar: The Last Airbender |
| Collection key | `avatar-the-last-airbender-2024-02` |
| imdb_id | [tt9018736](https://www.imdb.com/title/tt9018736/) |
| wikipedia_url | [Avatar: The Last Airbender (2024 TV series)](https://en.wikipedia.org/wiki/Avatar:_The_Last_Airbender_(2024_TV_series)) |
| Sample dates | 2026-06-25-to-2026-10-02 |
| Sample days | 100 |
| BTIH count | 500 |
| Unique BTIH count | 498 |
| Downloaders total | 28,061,681 |
| Uploaders total | 1,459,233 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-10-07T14:25:15Z
- Frozen sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/avatar-the-last-airbender-2024-02.xz`
- Hour directories: 2362
- Zero-length sample files: 0
- Malformed in-scope records accepted: 0 (producer rejects nonempty malformed input)
- Hourly discontinuities: 1 (20 missing hours)
- Missing days: 0

### Sample archive discontinuities

- hourly gap: last `2026-10-01 22:06`, resumed `2026-10-02 19:06` — missing 20 hour(s)


### Frozen validation evidence

- Frozen content SHA-256: `6b65464a3222393bfe9bc72012faa55fb07101653540d3bbc541635eee2b09ca`
- Full-input producer receipt SHA-256: `19f157e48f5c1e28adb9b308c3122a51b9040fe4d99eb6cd80dfc460c9dc9ef2`
- Frozen raw archives: 2362
- Empty sampler observations remain explicit gaps; no observations were imputed.
- Out-of-scope records retain the collection factory's established filtering.
- Excluded raw members: 5
- Excluded observations: 5959

## 3. File sizes histogram *median[lowest, highest]*

![Avatar: The Last Airbender collection size histogram](figures/avatar-the-last-airbender-2024-02-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/avatar-the-last-airbender-2024-02-downloads-by-week-avatar-the-last-airbender-2024-02-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![avatar-the-last-airbender-2024-02 downloads by day](figures/avatar-the-last-airbender-2024-02-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/avatar-the-last-airbender-2024-02-cumulative-aggregate.geojson.gz" data-map-title="Avatar: The Last Airbender — avatar-the-last-airbender-2024-02" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open Avatar: The Last Airbender (avatar-the-last-airbender-2024-02) cumulative data map in new window" title="Opens interactive map for Avatar: The Last Airbender (avatar-the-last-airbender-2024-02) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 2.32 | 17.82 | 35.91 | 41.82 | 1.31 | 0.82 |

### Network infrastructure

[![Avatar: The Last Airbender cumulative map](figures/avatar-the-last-airbender-2024-02-carto.png)](figures/avatar-the-last-airbender-2024-02-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/avatar-the-last-airbender-2024-02-data-ge-1080p.webp)](figures/avatar-the-last-airbender-2024-02-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/avatar-the-last-airbender-2024-02-data-lt-1080p.webp)](figures/avatar-the-last-airbender-2024-02-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
