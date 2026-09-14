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
| Sample dates | 2026-05-11-to-2026-09-06 |
| Sample days | 119 |
| BTIH count | 446 |
| Unique BTIH count | 403 |
| Downloaders total | 55,317,428 |
| Uploaders total | 7,488,151 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Sample coverage report

- Generated: 2026-09-13T17:13:09Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/project-hail-mary.xz`
- Hour directories: 2845
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 3 (5 missing hours)
- Missing days: 0

### Sample archive discontinuities

- hourly gap: last `2026-06-02 22:03`, resumed `2026-06-03 02:03` — missing 3 hour(s)
- hourly gap: last `2026-06-12 22:03`, resumed `2026-06-13 00:03` — missing 1 hour(s)
- hourly gap: last `2026-08-30 22:03`, resumed `2026-08-31 00:03` — missing 1 hour(s)

## 3. Media objects file size histogram

![Project Hail Mary collection size histogram](figures/project-hail-mary-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Visualization pass — graphs

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

## 5. Visualization pass — maps

### Cumulative geographic slices

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 1.84 | 15.58 | 37.34 | 39.43 | 1.24 | 0.79 |

### Cumulative network infrastructure

[![Project Hail Mary cumulative map](figures/project-hail-mary-carto.png)](figures/project-hail-mary-carto-4k.webp){:target="_blank" rel="noopener"}

### Cumulative data maps

**Cumulative >= 1080p**

[![Cumulative >= 1080p](figures/project-hail-mary-data-ge-1080p.webp)](figures/project-hail-mary-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

**Cumulative < 1080p**

[![Cumulative < 1080p](figures/project-hail-mary-data-lt-1080p.webp)](figures/project-hail-mary-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
