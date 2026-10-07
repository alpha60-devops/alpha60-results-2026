---
layout: default
title: "boys-501 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# boys-501 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | The Boys |
| Collection key | `boys-501` |
| imdb_id | [tt1190634](https://www.imdb.com/title/tt1190634/) |
| wikipedia_url | [The Boys (TV series)](https://en.wikipedia.org/wiki/The_Boys_(TV_series)) |
| Sample dates | 2026-04-08-to-2026-09-29 |
| Sample days | 175 |
| BTIH count | 409 |
| Unique BTIH count | 392 |
| Downloaders total | 68,625,238 |
| Uploaders total | 6,107,125 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Sample coverage report

- Generated: 2026-10-07T11:57:08Z
- Frozen sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/boys-501.xz`
- Hour directories: 4179
- Zero-length sample files: 0
- Malformed in-scope records accepted: 0 (producer rejects nonempty malformed input)
- Hourly discontinuities: 1 (4 missing hours)
- Missing days: 0

### Sample archive discontinuities

- hourly gap: last `2026-04-25 22:00`, resumed `2026-04-26 03:00` — missing 4 hour(s)


### Frozen validation evidence

- Frozen content SHA-256: `1d9bcbd27f56f9533844e567bc8d0cb247a99fed10ea24e4e31d8bdcfce1bf66`
- Full-input producer receipt SHA-256: `1cb5869eba1fac433577fa4f4900db8adbf744c26a99acfe6c6cd90c7b3010fe`
- Frozen raw archives: 4179
- Empty sampler observations remain explicit gaps; no observations were imputed.
- Out-of-scope records retain the collection factory's established filtering.
- Excluded raw members: 4
- Excluded observations: 47674

## 3. Media objects file size histogram

![The Boys collection size histogram](figures/boys-501-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Visualization pass — graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/boys-501-downloads-by-week-boys-501-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![boys-501 downloads by day](figures/boys-501-downloads-by-day-day.svg)

## 5. Visualization pass — maps

### Cumulative geographic slices

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 2.22 | 17.30 | 36.61 | 41.75 | 1.36 | 0.76 |

### Cumulative network infrastructure

[![The Boys cumulative map](figures/boys-501-carto.png)](figures/boys-501-carto-4k.webp){:target="_blank" rel="noopener"}

### Cumulative data maps

**Cumulative >= 1080p**

[![Cumulative >= 1080p](figures/boys-501-data-ge-1080p.webp)](figures/boys-501-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

**Cumulative < 1080p**

[![Cumulative < 1080p](figures/boys-501-data-lt-1080p.webp)](figures/boys-501-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
