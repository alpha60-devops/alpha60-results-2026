---
layout: default
title: "spider-noir-01 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# spider-noir-01 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Spider-Noir |
| Collection key | `spider-noir-01` |
| imdb_id | [tt30460310](https://www.imdb.com/title/tt30460310/) |
| wikipedia_url | [Spider-Noir](https://en.wikipedia.org/wiki/Spider-Noir) |
| Sample dates | 2026-05-27-to-2026-09-08 |
| Sample days | 105 |
| BTIH count | 878 |
| Unique BTIH count | 867 |
| Downloaders total | 85,901,037 |
| Uploaders total | 5,395,713 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Sample coverage report

- Generated: 2026-09-13T17:13:09Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/spider-noir-01.xz`
- Hour directories: 2477
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 1 (26 missing hours)
- Missing days: 0

### Sample archive discontinuities

- hourly gap: last `2026-08-12 03:04`, resumed `2026-08-13 06:04` — missing 26 hour(s)

## 3. Media objects file size histogram

![Spider-Noir collection size histogram](figures/spider-noir-01-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Visualization pass — graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/spider-noir-01-downloads-by-week-spider-noir-01-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![spider-noir-01 downloads by day](figures/spider-noir-01-downloads-by-day-day.svg)

## 5. Visualization pass — maps

### Cumulative geographic slices

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 1.80 | 17.11 | 36.31 | 41.71 | 1.22 | 0.83 |

### Cumulative network infrastructure

[![Spider-Noir cumulative map](figures/spider-noir-01-carto.png)](figures/spider-noir-01-carto-4k.webp){:target="_blank" rel="noopener"}

### Cumulative data maps

**Cumulative >= 1080p**

[![Cumulative >= 1080p](figures/spider-noir-01-data-ge-1080p.webp)](figures/spider-noir-01-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

**Cumulative < 1080p**

[![Cumulative < 1080p](figures/spider-noir-01-data-lt-1080p.webp)](figures/spider-noir-01-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
