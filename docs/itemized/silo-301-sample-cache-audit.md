---
layout: default
title: "silo-301 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# silo-301 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Silo |
| Collection key | `silo-301` |
| imdb_id | [tt14688458](https://www.imdb.com/title/tt14688458/) |
| wikipedia_url | [Silo (TV series)](https://en.wikipedia.org/wiki/Silo_(TV_series)) |
| Sample dates | 2026-07-03-to-2026-08-27 |
| Sample days | 56 |
| BTIH count | 238 |
| Unique BTIH count | 236 |
| Downloaders total | 14,320,213 |
| Uploaders total | 1,706,771 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Sample coverage report

- Generated: 2026-09-13T17:13:09Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/silo-301.xz`
- Hour directories: 1327
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 0 (0 missing hours)
- Missing days: 0

### Sample archive discontinuities

None detected.

## 3. Media objects file size histogram

![Silo collection size histogram](figures/silo-301-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Visualization pass — graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/silo-301-downloads-by-week-silo-301-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![silo-301 downloads by day](figures/silo-301-downloads-by-day-day.svg)

## 5. Visualization pass — maps

### Cumulative geographic slices

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 2.73 | 18.85 | 31.28 | 42.16 | 1.65 | 0.77 |

### Cumulative network infrastructure

[![Silo cumulative map](figures/silo-301-carto.png)](figures/silo-301-carto-4k.webp){:target="_blank" rel="noopener"}

### Cumulative data maps

**Cumulative >= 1080p**

[![Cumulative >= 1080p](figures/silo-301-data-ge-1080p.webp)](figures/silo-301-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

**Cumulative < 1080p**

[![Cumulative < 1080p](figures/silo-301-data-lt-1080p.webp)](figures/silo-301-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
