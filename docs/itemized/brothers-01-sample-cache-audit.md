---
layout: default
title: "brothers-01 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# brothers-01 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Brothers |
| Collection key | `brothers-01` |
| imdb_id | [tt6773088](https://www.imdb.com/title/tt6773088/) |
| wikipedia_url | [Brothers (2026 TV series)](https://en.wikipedia.org/wiki/Brothers_(2026_TV_series)) |
| Sample dates | 2026-09-24-to-2026-10-01 |
| Sample days | 8 |
| BTIH count | 180 |
| Unique BTIH count | 180 |
| Downloaders total | 508,983 |
| Uploaders total | 29,058 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Sample coverage report

- Generated: 2026-10-03T19:10:22Z
- Frozen sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/brothers-01.xz`
- Hour directories: 174
- Zero-length sample files: 0
- Malformed in-scope records accepted: 0 (producer rejects nonempty malformed input)
- Hourly discontinuities: 0 (0 missing hours)
- Missing days: 0

### Sample archive discontinuities

None detected.


### Frozen validation evidence

- Frozen content SHA-256: `0e595e14217a40f66eb90884a7b5dc6fed200d892065fe9a1069ad50bfff68f1`
- Full-input producer receipt SHA-256: `6eb691582b52e09abbcbbbfc8f569a2ae118a5536b98f722e5570475fec33f24`
- Frozen raw archives: 174
- Empty sampler observations remain explicit gaps; no observations were imputed.
- Out-of-scope records retain the collection factory's established filtering.
- Excluded raw members: 0
- Excluded observations: 0

## 3. Media objects file size histogram

![Brothers collection size histogram](figures/brothers-01-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Visualization pass — graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/brothers-01-downloads-by-week-brothers-01-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![brothers-01 downloads by day](figures/brothers-01-downloads-by-day-day.svg)

## 5. Visualization pass — maps

### Cumulative geographic slices

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 2.35 | 21.58 | 28.08 | 45.42 | 1.92 | 0.66 |

### Cumulative network infrastructure

[![Brothers cumulative map](figures/brothers-01-carto.png)](figures/brothers-01-carto-4k.webp){:target="_blank" rel="noopener"}

### Cumulative data maps

**Cumulative >= 1080p**

[![Cumulative >= 1080p](figures/brothers-01-data-ge-1080p.webp)](figures/brothers-01-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

**Cumulative < 1080p**

[![Cumulative < 1080p](figures/brothers-01-data-lt-1080p.webp)](figures/brothers-01-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
