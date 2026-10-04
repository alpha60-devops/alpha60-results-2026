---
layout: default
title: "drama-2026 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# drama-2026 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | The Drama |
| Collection key | `drama-2026` |
| imdb_id | [tt33071426](https://www.imdb.com/title/tt33071426/) |
| wikipedia_url | [The Drama (film)](https://en.wikipedia.org/wiki/The_Drama_(film)) |
| Sample dates | 2026-08-04-to-2026-10-02 |
| Sample days | 60 |
| BTIH count | 111 |
| Unique BTIH count | 104 |
| Downloaders total | 6,718,352 |
| Uploaders total | 651,871 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Sample coverage report

- Generated: 2026-10-03T19:10:22Z
- Frozen sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/drama-2026.xz`
- Hour directories: 1412
- Zero-length sample files: 0
- Malformed in-scope records accepted: 0 (producer rejects nonempty malformed input)
- Hourly discontinuities: 0 (0 missing hours)
- Missing days: 0

### Sample archive discontinuities

None detected.


### Frozen validation evidence

- Frozen content SHA-256: `1c07acdc79a0a0d5786a14e396732b3b01cd6c7f73ce464b1fc4e6a2cccd0b8e`
- Full-input producer receipt SHA-256: `4fcaddc00bd0135190ea491749924f718d9a51d0cfcdd86da49b0f94bca0d3fb`
- Frozen raw archives: 1412
- Empty sampler observations remain explicit gaps; no observations were imputed.
- Out-of-scope records retain the collection factory's established filtering.
- Excluded raw members: 3
- Excluded observations: 72

## 3. Media objects file size histogram

![The Drama collection size histogram](figures/drama-2026-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Visualization pass — graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/drama-2026-downloads-by-week-drama-2026-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![drama-2026 downloads by day](figures/drama-2026-downloads-by-day-day.svg)

## 5. Visualization pass — maps

### Cumulative geographic slices

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 2.42 | 19.16 | 33.13 | 43.29 | 1.24 | 0.76 |

### Cumulative network infrastructure

[![The Drama cumulative map](figures/drama-2026-carto.png)](figures/drama-2026-carto-4k.webp){:target="_blank" rel="noopener"}

### Cumulative data maps

**Cumulative >= 1080p**

[![Cumulative >= 1080p](figures/drama-2026-data-ge-1080p.webp)](figures/drama-2026-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

**Cumulative < 1080p**

[![Cumulative < 1080p](figures/drama-2026-data-lt-1080p.webp)](figures/drama-2026-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
