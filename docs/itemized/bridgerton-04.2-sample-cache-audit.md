---
layout: default
title: "bridgerton-04.2 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# bridgerton-04.2 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Bridgerton |
| Collection key | `bridgerton-04.2` |
| imdb_id | [tt8740790](https://www.imdb.com/title/tt8740790/) |
| wikipedia_url | [Bridgerton](https://en.wikipedia.org/wiki/Bridgerton) |
| Sample dates | 2026-02-26-to-2026-09-02 |
| Sample days | 189 |
| BTIH count | 363 |
| Unique BTIH count | 330 |
| Downloaders total | 59,700,207 |
| Uploaders total | 2,131,396 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Sample coverage report

- Generated: 2026-09-13T17:13:04Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/bridgerton-04.2.xz`
- Hour directories: 4517
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 1 (1 missing hours)
- Missing days: 0

### Sample archive discontinuities

- hourly gap: last `2026-03-29 01:03`, resumed `2026-03-29 03:03` — missing 1 hour(s)

## 3. Media objects file size histogram

![Bridgerton collection size histogram](figures/bridgerton-04.2-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Visualization pass — graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/bridgerton-04-2-downloads-by-week-bridgerton-04.2-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![bridgerton-04.2 downloads by day](figures/bridgerton-04-2-downloads-by-day-day.svg)

## 5. Visualization pass — maps

### Cumulative geographic slices

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 1.48 | 15.97 | 34.75 | 44.52 | 1.25 | 0.79 |

### Cumulative network infrastructure

[![Bridgerton cumulative map](figures/bridgerton-04.2-carto.png)](figures/bridgerton-04.2-carto-4k.webp){:target="_blank" rel="noopener"}

### Cumulative data maps

**Cumulative >= 1080p**

[![Cumulative >= 1080p](figures/bridgerton-04.2-data-ge-1080p.webp)](figures/bridgerton-04.2-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

**Cumulative < 1080p**

[![Cumulative < 1080p](figures/bridgerton-04.2-data-lt-1080p.webp)](figures/bridgerton-04.2-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
