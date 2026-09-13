---
layout: default
title: "bear-00 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# bear-00 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | The Bear |
| Collection key | `bear-00` |
| imdb_id | [tt14452776](https://www.imdb.com/title/tt14452776/) |
| wikipedia_url | [The Bear (TV series)](https://en.wikipedia.org/wiki/The_Bear_(TV_series)) |
| Sample dates | 2026-05-06-to-2026-08-18 |
| Sample days | 105 |
| BTIH count | 50 |
| Unique BTIH count | 50 |
| Downloaders total | 3,744,382 |
| Uploaders total | 108,526 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Sample coverage report

- Generated: 2026-09-13T17:13:03Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/bear-00.xz`
- Hour directories: 2515
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 2 (4 missing hours)
- Missing days: 0

### Sample archive discontinuities

- hourly gap: last `2026-06-02 22:01`, resumed `2026-06-03 02:01` — missing 3 hour(s)
- hourly gap: last `2026-06-12 22:01`, resumed `2026-06-13 00:01` — missing 1 hour(s)

## 3. Media objects file size histogram

![The Bear collection size histogram](figures/bear-00-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Visualization pass — graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/bear-00-downloads-by-week-bear-00-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![bear-00 downloads by day](figures/bear-00-downloads-by-day-day.svg)

## 5. Visualization pass — maps

### Cumulative geographic slices

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 1.11 | 15.96 | 34.54 | 41.63 | 1.17 | 0.79 |

### Cumulative network infrastructure

[![The Bear cumulative map](figures/bear-00-carto.png)](figures/bear-00-carto-4k.webp){:target="_blank" rel="noopener"}

### Cumulative data maps

**Cumulative >= 1080p**

[![Cumulative >= 1080p](figures/bear-00-data-ge-1080p.webp)](figures/bear-00-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

**Cumulative < 1080p**

[![Cumulative < 1080p](figures/bear-00-data-lt-1080p.webp)](figures/bear-00-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
