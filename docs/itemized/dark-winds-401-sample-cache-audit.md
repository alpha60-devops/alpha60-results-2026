---
layout: default
title: "dark-winds-401 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# dark-winds-401 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Dark Winds |
| Collection key | `dark-winds-401` |
| imdb_id | [tt15017118](https://www.imdb.com/title/tt15017118/) |
| wikipedia_url | [Dark Winds](https://en.wikipedia.org/wiki/Dark_Winds) |
| Sample dates | 2026-02-15-to-2026-05-30 |
| Sample days | 105 |
| BTIH count | 158 |
| Unique BTIH count | 140 |
| Downloaders total | 14,527,731 |
| Uploaders total | 411,163 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Sample coverage report

- Generated: 2026-09-13T17:13:04Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/dark-winds-401.xz`
- Hour directories: 2451
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 2 (46 missing hours)
- Missing days: 1

### Sample archive discontinuities

- hourly gap: last `2026-03-02 02:00`, resumed `2026-03-04 00:00` — missing 45 hour(s)
- hourly gap: last `2026-03-29 01:00`, resumed `2026-03-29 03:00` — missing 1 hour(s)
- missing day: `2026-03-03`

## 3. Media objects file size histogram

![Dark Winds collection size histogram](figures/dark-winds-401-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Visualization pass — graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/dark-winds-401-downloads-by-week-dark-winds-401-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![dark-winds-401 downloads by day](figures/dark-winds-401-downloads-by-day-day.svg)

## 5. Visualization pass — maps

### Cumulative geographic slices

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 0.98 | 14.88 | 33.96 | 44.84 | 1.31 | 0.69 |

### Cumulative network infrastructure

[![Dark Winds cumulative map](figures/dark-winds-401-carto.png)](figures/dark-winds-401-carto-4k.webp){:target="_blank" rel="noopener"}

### Cumulative data maps

**Cumulative >= 1080p**

[![Cumulative >= 1080p](figures/dark-winds-401-data-ge-1080p.webp)](figures/dark-winds-401-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

**Cumulative < 1080p**

[![Cumulative < 1080p](figures/dark-winds-401-data-lt-1080p.webp)](figures/dark-winds-401-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
