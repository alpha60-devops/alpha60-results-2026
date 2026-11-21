---
layout: default
title: "visionquest-101 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# visionquest-101 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | VisionQuest |
| Collection key | `visionquest-101` |
| imdb_id | [tt23112594](https://www.imdb.com/title/tt23112594/) |
| wikipedia_url | [VisionQuest](https://en.wikipedia.org/wiki/VisionQuest) |
| Sample dates | 2026-10-14-to-2026-11-10 |
| Sample days | 28 |
| BTIH count | 264 |
| Unique BTIH count | 259 |
| Downloaders total | 7,148,620 |
| Uploaders total | 983,533 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-11-17T06:40:20Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/visionquest-101.xz`
- Hour directories: 654
- Other unparsable sample files: 0
- Hourly discontinuities: 0 (0 missing hours)
- Missing days: 0

### Sample archive discontinuities

None detected.

## 3. File sizes histogram *median[lowest, highest]*

![VisionQuest collection size histogram](figures/visionquest-101-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/visionquest-101-downloads-by-week-visionquest-101-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![visionquest-101 downloads by day](figures/visionquest-101-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/visionquest-101-cumulative-aggregate.geojson.gz" data-map-title="VisionQuest — visionquest-101" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open VisionQuest (visionquest-101) cumulative data map in new window" title="Opens interactive map for VisionQuest (visionquest-101) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 3.74 | 22.89 | 32.00 | 38.74 | 1.92 | 0.71 |

### Network infrastructure

[![VisionQuest cumulative map](figures/visionquest-101-carto.png)](figures/visionquest-101-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/visionquest-101-data-ge-1080p.webp)](figures/visionquest-101-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/visionquest-101-data-lt-1080p.webp)](figures/visionquest-101-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
