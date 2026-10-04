---
layout: default
title: "neagley-01 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# neagley-01 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Neagley |
| Collection key | `neagley-01` |
| imdb_id | [tt33539520](https://www.imdb.com/title/tt33539520/) |
| wikipedia_url | [Neagley](https://en.wikipedia.org/wiki/Neagley) |
| Sample dates | 2026-09-17-to-2026-10-01 |
| Sample days | 15 |
| BTIH count | 481 |
| Unique BTIH count | 477 |
| Downloaders total | 4,675,218 |
| Uploaders total | 612,019 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Sample coverage report

- Generated: 2026-10-03T19:10:22Z
- Frozen sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/neagley-01.xz`
- Hour directories: 360
- Zero-length sample files: 0
- Malformed in-scope records accepted: 0 (producer rejects nonempty malformed input)
- Hourly discontinuities: 0 (0 missing hours)
- Missing days: 0

### Sample archive discontinuities

None detected.


### Frozen validation evidence

- Frozen content SHA-256: `3978f78c7f66af6ab0d65fff504301b95fe77f4b88c908aaea9c8e5f523a5210`
- Full-input producer receipt SHA-256: `b5217ab6fbd24f7bfa6423990e5b6407c80299a4ab685e83de7526d112926e23`
- Frozen raw archives: 360
- Empty sampler observations remain explicit gaps; no observations were imputed.
- Out-of-scope records retain the collection factory's established filtering.
- Excluded raw members: 0
- Excluded observations: 0

## 3. Media objects file size histogram

![Neagley collection size histogram](figures/neagley-01-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Visualization pass — graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/neagley-01-downloads-by-week-neagley-01-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![neagley-01 downloads by day](figures/neagley-01-downloads-by-day-day.svg)

## 5. Visualization pass — maps

### Cumulative geographic slices

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 5.73 | 19.96 | 29.96 | 41.28 | 2.36 | 0.70 |

### Cumulative network infrastructure

[![Neagley cumulative map](figures/neagley-01-carto.png)](figures/neagley-01-carto-4k.webp){:target="_blank" rel="noopener"}

### Cumulative data maps

**Cumulative >= 1080p**

[![Cumulative >= 1080p](figures/neagley-01-data-ge-1080p.webp)](figures/neagley-01-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

**Cumulative < 1080p**

[![Cumulative < 1080p](figures/neagley-01-data-lt-1080p.webp)](figures/neagley-01-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
