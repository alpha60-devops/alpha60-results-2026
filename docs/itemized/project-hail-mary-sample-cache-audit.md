---
layout: default
title: "project-hail-mary Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# project-hail-mary sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Project Hail Mary |
| Collection key | `project-hail-mary` |
| imdb_id | [tt12042730](https://www.imdb.com/title/tt12042730/) |
| wikipedia_url | [Project Hail Mary (film)](https://en.wikipedia.org/wiki/Project_Hail_Mary_(film)) |
| Sample dates | 2026-05-11-to-2026-11-08 |
| Sample days | 182 |
| BTIH count | 452 |
| Unique BTIH count | 416 |
| Downloaders total | 78,029,387 |
| Uploaders total | 9,103,613 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-11-19T14:19:05Z
- Sample archive directory: `/home/bkoz/src/alpha60-campaigns/year-2026/20261116-v8/objects/project-hail-mary/g1/results/coverage-inputs`
- Hour directories: 4334
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 5 (27 missing hours)
- Missing days: 0

### Sample archive discontinuities

- hourly gap: last `2026-06-02 22:03`, resumed `2026-06-03 02:03` — missing 3 hour(s)
- hourly gap: last `2026-06-12 22:03`, resumed `2026-06-13 00:03` — missing 1 hour(s)
- hourly gap: last `2026-08-30 22:03`, resumed `2026-08-31 00:03` — missing 1 hour(s)
- hourly gap: last `2026-09-10 22:03`, resumed `2026-09-11 08:03` — missing 9 hour(s)
- hourly gap: last `2026-10-24 10:03`, resumed `2026-10-25 00:03` — missing 13 hour(s)

## 3. File sizes histogram *median[lowest, highest]*

![Project Hail Mary collection size histogram](figures/project-hail-mary-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/project-hail-mary-downloads-by-week-project-hail-mary-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![project-hail-mary downloads by day](figures/project-hail-mary-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/project-hail-mary-cumulative-aggregate.geojson.gz" data-map-title="Project Hail Mary — project-hail-mary" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open Project Hail Mary (project-hail-mary) cumulative data map in new window" title="Opens interactive map for Project Hail Mary (project-hail-mary) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 2.15 | 17.21 | 37.42 | 41.07 | 1.31 | 0.84 |

### Network infrastructure

[![Project Hail Mary cumulative map](figures/project-hail-mary-carto.png)](figures/project-hail-mary-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/project-hail-mary-data-ge-1080p.webp)](figures/project-hail-mary-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/project-hail-mary-data-lt-1080p.webp)](figures/project-hail-mary-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}

<!-- BEGIN alpha60-v8-source-dispositions -->

## Recovered and skipped source samples

1 damaged source archives yielded 3,462 complete, valid JSON sample files; 0 archives yielded none and were skipped.
Recovered files were retained only after complete JSON validation and archive readback. Damaged original archives remain preserved.
**These source hours are not fully recovered. Lost original membership is unknown.**
The sample-date range does not establish complete observations in the affected hours. No missing observations were fabricated.

| Source archive | Disposition | Valid JSON files recovered |
| --- | --- | ---: |
| `2026-10-24-at-10-03.tar.xz` | partial-recovery | 3,462 |

[Source dispositions and archive hashes](../../data/txt/year-2026-source-dispositions/project-hail-mary.json).

<!-- END alpha60-v8-source-dispositions -->
