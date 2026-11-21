---
layout: default
title: "euphoria-301 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# euphoria-301 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Euphoria |
| Collection key | `euphoria-301` |
| imdb_id | [tt8772296](https://www.imdb.com/title/tt8772296/) |
| wikipedia_url | [Euphoria (American TV series)](https://en.wikipedia.org/wiki/Euphoria_(American_TV_series)) |
| Sample dates | 2026-04-13-to-2026-10-11 |
| Sample days | 182 |
| BTIH count | 410 |
| Unique BTIH count | 398 |
| Downloaders total | 64,314,443 |
| Uploaders total | 3,569,692 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-11-17T18:20:01Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/euphoria-301.xz`
- Hour directories: 4342
- Other unparsable sample files: 0
- Hourly discontinuities: 1 (19 missing hours)
- Missing days: 0

### Sample archive discontinuities

- hourly gap: last `2026-10-01 22:02`, resumed `2026-10-02 18:37` — missing 19 hour(s)

## 3. File sizes histogram *median[lowest, highest]*

![Euphoria collection size histogram](figures/euphoria-301-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/euphoria-301-downloads-by-week-euphoria-301-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![euphoria-301 downloads by day](figures/euphoria-301-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/euphoria-301-cumulative-aggregate.geojson.gz" data-map-title="Euphoria — euphoria-301" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open Euphoria (euphoria-301) cumulative data map in new window" title="Opens interactive map for Euphoria (euphoria-301) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 1.85 | 17.30 | 34.70 | 44.02 | 1.33 | 0.81 |

### Network infrastructure

[![Euphoria cumulative map](figures/euphoria-301-carto.png)](figures/euphoria-301-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/euphoria-301-data-ge-1080p.webp)](figures/euphoria-301-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/euphoria-301-data-lt-1080p.webp)](figures/euphoria-301-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
