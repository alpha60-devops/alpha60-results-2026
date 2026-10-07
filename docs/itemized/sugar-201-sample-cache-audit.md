---
layout: default
title: "sugar-201 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# sugar-201 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Sugar |
| Collection key | `sugar-201` |
| imdb_id | [tt16418808](https://www.imdb.com/title/tt16418808/) |
| wikipedia_url | [Sugar (2024 TV series)](https://en.wikipedia.org/wiki/Sugar_(2024_TV_series)) |
| Sample dates | 2026-06-19-to-2026-10-01 |
| Sample days | 105 |
| BTIH count | 220 |
| Unique BTIH count | 217 |
| Downloaders total | 18,040,002 |
| Uploaders total | 540,407 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Sample coverage report

- Generated: 2026-10-07T11:57:09Z
- Frozen sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/sugar-201.xz`
- Hour directories: 2501
- Zero-length sample files: 0
- Malformed in-scope records accepted: 0 (producer rejects nonempty malformed input)
- Hourly discontinuities: 0 (0 missing hours)
- Missing days: 0

### Sample archive discontinuities

None detected.


### Frozen validation evidence

- Frozen content SHA-256: `428bc44411b371da130963280b47faea0228780049b9a3c52c972647a2b1a677`
- Full-input producer receipt SHA-256: `6c614faca21b821fe2558af8d9044ad3070c4d8a46a21224998d568681927d50`
- Frozen raw archives: 2501
- Empty sampler observations remain explicit gaps; no observations were imputed.
- Out-of-scope records retain the collection factory's established filtering.
- Excluded raw members: 0
- Excluded observations: 0

## 3. Media objects file size histogram

![Sugar collection size histogram](figures/sugar-201-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Visualization pass — graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/sugar-201-downloads-by-week-sugar-201-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![sugar-201 downloads by day](figures/sugar-201-downloads-by-day-day.svg)

## 5. Visualization pass — maps

### Cumulative geographic slices

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 1.45 | 17.66 | 34.88 | 43.97 | 1.18 | 0.87 |

### Cumulative network infrastructure

[![Sugar cumulative map](figures/sugar-201-carto.png)](figures/sugar-201-carto-4k.webp){:target="_blank" rel="noopener"}

### Cumulative data maps

**Cumulative >= 1080p**

[![Cumulative >= 1080p](figures/sugar-201-data-ge-1080p.webp)](figures/sugar-201-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

**Cumulative < 1080p**

[![Cumulative < 1080p](figures/sugar-201-data-lt-1080p.webp)](figures/sugar-201-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
