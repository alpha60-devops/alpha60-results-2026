---
layout: default
title: "furious-2025 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# furious-2025 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | The Furious |
| Collection key | `furious-2025` |
| imdb_id | [tt33311069](https://www.imdb.com/title/tt33311069/) |
| wikipedia_url | [The Furious](https://en.wikipedia.org/wiki/The_Furious) |
| Sample dates | 2026-07-07-to-2026-08-31 |
| Sample days | 56 |
| BTIH count | 128 |
| Unique BTIH count | 119 |
| Downloaders total | 10,432,240 |
| Uploaders total | 1,934,557 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Sample coverage report

- Generated: 2026-09-13T17:13:05Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/furious-2025.xz`
- Hour directories: 1325
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 2 (2 missing hours)
- Missing days: 0

### Sample archive discontinuities

- hourly gap: last `2026-08-24 22:06`, resumed `2026-08-25 00:06` — missing 1 hour(s)
- hourly gap: last `2026-08-30 22:06`, resumed `2026-08-31 00:06` — missing 1 hour(s)

## 3. Media objects file size histogram

![The Furious collection size histogram](figures/furious-2025-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Visualization pass — graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/furious-2025-downloads-by-week-furious-2025-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![furious-2025 downloads by day](figures/furious-2025-downloads-by-day-day.svg)

## 5. Visualization pass — maps

### Cumulative geographic slices

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 4.16 | 14.83 | 41.70 | 32.73 | 1.21 | 0.69 |

### Cumulative network infrastructure

[![The Furious cumulative map](figures/furious-2025-carto.png)](figures/furious-2025-carto-4k.webp){:target="_blank" rel="noopener"}

### Cumulative data maps

**Cumulative >= 1080p**

[![Cumulative >= 1080p](figures/furious-2025-data-ge-1080p.webp)](figures/furious-2025-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

**Cumulative < 1080p**

[![Cumulative < 1080p](figures/furious-2025-data-lt-1080p.webp)](figures/furious-2025-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
