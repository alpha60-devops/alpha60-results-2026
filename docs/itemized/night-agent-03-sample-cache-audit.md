---
layout: default
title: "night-agent-03 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# night-agent-03 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Night Agent |
| Collection key | `night-agent-03` |
| imdb_id | [tt13918776](https://www.imdb.com/title/tt13918776/) |
| wikipedia_url | [The Night Agent](https://en.wikipedia.org/wiki/The_Night_Agent) |
| Sample dates | 2026-02-19-to-2026-08-26 |
| Sample days | 189 |
| BTIH count | 555 |
| Unique BTIH count | 484 |
| Downloaders total | 75,506,778 |
| Uploaders total | 3,145,767 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-09-13T17:13:08Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/night-agent-03.xz`
- Hour directories: 4473
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 2 (45 missing hours)
- Missing days: 0

### Sample archive discontinuities

- hourly gap: last `2026-03-02 02:06`, resumed `2026-03-03 23:46` — missing 44 hour(s)
- hourly gap: last `2026-03-29 01:06`, resumed `2026-03-29 03:06` — missing 1 hour(s)

## 3. File sizes histogram *median[lowest, highest]*

![Night Agent collection size histogram](figures/night-agent-03-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/night-agent-03-downloads-by-week-night-agent-03-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![night-agent-03 downloads by day](figures/night-agent-03-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/night-agent-03-cumulative-aggregate.geojson.gz" data-map-title="Night Agent — night-agent-03" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open Night Agent (night-agent-03) cumulative data map in new window" title="Opens interactive map for Night Agent (night-agent-03) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 1.94 | 15.99 | 34.90 | 44.09 | 1.22 | 0.79 |

### Network infrastructure

[![Night Agent cumulative map](figures/night-agent-03-carto.png)](figures/night-agent-03-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/night-agent-03-data-ge-1080p.webp)](figures/night-agent-03-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/night-agent-03-data-lt-1080p.webp)](figures/night-agent-03-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
