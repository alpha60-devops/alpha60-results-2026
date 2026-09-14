---
layout: default
title: "invincible-401 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# invincible-401 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Invincible |
| Collection key | `invincible-401` |
| imdb_id | [tt6741278](https://www.imdb.com/title/tt6741278/) |
| wikipedia_url | [Invincible (TV series)](https://en.wikipedia.org/wiki/Invincible_(TV_series)) |
| Sample dates | 2026-03-18-to-2026-06-30 |
| Sample days | 105 |
| BTIH count | 223 |
| Unique BTIH count | 205 |
| Downloaders total | 22,874,525 |
| Uploaders total | 2,040,164 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Sample coverage report

- Generated: 2026-09-13T17:13:06Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/invincible-401.xz`
- Hour directories: 2495
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 4 (9 missing hours)
- Missing days: 0

### Sample archive discontinuities

- hourly gap: last `2026-03-29 01:00`, resumed `2026-03-29 03:00` — missing 1 hour(s)
- hourly gap: last `2026-04-25 22:00`, resumed `2026-04-26 03:00` — missing 4 hour(s)
- hourly gap: last `2026-06-02 22:00`, resumed `2026-06-03 02:00` — missing 3 hour(s)
- hourly gap: last `2026-06-12 22:00`, resumed `2026-06-13 00:00` — missing 1 hour(s)

## 3. Media objects file size histogram

![Invincible collection size histogram](figures/invincible-401-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Visualization pass — graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/invincible-401-downloads-by-week-invincible-401-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![invincible-401 downloads by day](figures/invincible-401-downloads-by-day-day.svg)

## 5. Visualization pass — maps

### Cumulative geographic slices

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 2.84 | 16.73 | 34.11 | 41.37 | 1.56 | 0.66 |

### Cumulative network infrastructure

[![Invincible cumulative map](figures/invincible-401-carto.png)](figures/invincible-401-carto-4k.webp){:target="_blank" rel="noopener"}

### Cumulative data maps

**Cumulative >= 1080p**

[![Cumulative >= 1080p](figures/invincible-401-data-ge-1080p.webp)](figures/invincible-401-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

**Cumulative < 1080p**

[![Cumulative < 1080p](figures/invincible-401-data-lt-1080p.webp)](figures/invincible-401-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
