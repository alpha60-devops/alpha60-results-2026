---
layout: default
title: "beastars-03.2 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# beastars-03.2 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | BEASTARS |
| Collection key | `beastars-03.2` |
| imdb_id | [tt11043632](https://www.imdb.com/title/tt11043632/) |
| wikipedia_url | UNAVAILABLE — no English Wikipedia page exists |
| Sample dates | 2026-03-07-to-2026-06-19 |
| Sample days | 105 |
| BTIH count | 167 |
| Unique BTIH count | 148 |
| Downloaders total | 11,596,597 |
| Uploaders total | 297,498 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Sample coverage report

- Generated: 2026-09-13T17:13:03Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/beastars-03.2.xz`
- Hour directories: 2490
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 2 (10 missing hours)
- Missing days: 0

### Sample archive discontinuities

- hourly gap: last `2026-03-27 22:04`, resumed `2026-03-28 08:04` — missing 9 hour(s)
- hourly gap: last `2026-03-29 01:04`, resumed `2026-03-29 03:04` — missing 1 hour(s)

## 3. Media objects file size histogram

![BEASTARS collection size histogram](figures/beastars-03.2-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Visualization pass — graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/beastars-03-2-downloads-by-week-beastars-03.2-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![beastars-03.2 downloads by day](figures/beastars-03-2-downloads-by-day-day.svg)

## 5. Visualization pass — maps

### Cumulative geographic slices

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 0.98 | 14.67 | 35.42 | 44.27 | 0.98 | 0.71 |

### Cumulative network infrastructure

[![BEASTARS cumulative map](figures/beastars-03.2-carto.png)](figures/beastars-03.2-carto-4k.webp){:target="_blank" rel="noopener"}

### Cumulative data maps

**Cumulative >= 1080p**

[![Cumulative >= 1080p](figures/beastars-03.2-data-ge-1080p.webp)](figures/beastars-03.2-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

**Cumulative < 1080p**

[![Cumulative < 1080p](figures/beastars-03.2-data-lt-1080p.webp)](figures/beastars-03.2-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
