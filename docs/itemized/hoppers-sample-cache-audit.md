---
layout: default
title: "hoppers Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# hoppers sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Hoppers |
| Collection key | `hoppers` |
| imdb_id | [tt26443616](https://www.imdb.com/title/tt26443616/) |
| wikipedia_url | [Hoppers (film)](https://en.wikipedia.org/wiki/Hoppers_(film)) |
| Sample dates | 2026-03-26-to-2026-09-10 |
| Sample days | 169 |
| BTIH count | 352 |
| Unique BTIH count | 335 |
| Downloaders total | 45,186,008 |
| Uploaders total | 3,267,288 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Sample coverage report

- Generated: 2026-09-13T17:13:06Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/hoppers.xz`
- Hour directories: 4026
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 5 (9 missing hours)
- Missing days: 0

### Sample archive discontinuities

- hourly gap: last `2026-03-29 01:03`, resumed `2026-03-29 03:03` — missing 1 hour(s)
- hourly gap: last `2026-04-25 22:03`, resumed `2026-04-26 02:03` — missing 3 hour(s)
- hourly gap: last `2026-06-02 22:03`, resumed `2026-06-03 02:03` — missing 3 hour(s)
- hourly gap: last `2026-06-12 22:03`, resumed `2026-06-13 00:03` — missing 1 hour(s)
- hourly gap: last `2026-08-30 22:03`, resumed `2026-08-31 00:03` — missing 1 hour(s)

## 3. Media objects file size histogram

![Hoppers collection size histogram](figures/hoppers-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Visualization pass — graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/hoppers-downloads-by-week-hoppers-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![hoppers downloads by day](figures/hoppers-downloads-by-day-day.svg)

## 5. Visualization pass — maps

### Cumulative geographic slices

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 2.08 | 16.72 | 36.49 | 40.75 | 1.24 | 0.82 |

### Cumulative network infrastructure

[![Hoppers cumulative map](figures/hoppers-carto.png)](figures/hoppers-carto-4k.webp){:target="_blank" rel="noopener"}

### Cumulative data maps

**Cumulative >= 1080p**

[![Cumulative >= 1080p](figures/hoppers-data-ge-1080p.webp)](figures/hoppers-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

**Cumulative < 1080p**

[![Cumulative < 1080p](figures/hoppers-data-lt-1080p.webp)](figures/hoppers-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
