---
layout: default
title: "toy-story-5 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# toy-story-5 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Toy Story 5 |
| Collection key | `toy-story-5` |
| imdb_id | [tt29355505](https://www.imdb.com/title/tt29355505/) |
| wikipedia_url | [Toy Story 5](https://en.wikipedia.org/wiki/Toy_Story_5) |
| Sample dates | 2026-08-19-to-2026-09-15 |
| Sample days | 28 |
| BTIH count | 224 |
| Unique BTIH count | 209 |
| Downloaders total | 7,134,803 |
| Uploaders total | 1,275,148 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Sample coverage report

- Generated: 2026-10-07T10:10:22Z
- Frozen sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/toy-story-5.xz`
- Hour directories: 672
- Zero-length sample files: 0
- Malformed in-scope records accepted: 0 (producer rejects nonempty malformed input)
- Hourly discontinuities: 0 (0 missing hours)
- Missing days: 0

### Sample archive discontinuities

None detected.


### Frozen validation evidence

- Frozen content SHA-256: `15a31753e812ccb426dc2e54a7e08db5eca37f0ff3089512acdc9c740c054ab4`
- Full-input producer receipt SHA-256: `e64ff2d0870ffafd0c8ab87f794a9815caf2b535408a2b359bde2ca264e3c088`
- Frozen raw archives: 672
- Empty sampler observations remain explicit gaps; no observations were imputed.
- Out-of-scope records retain the collection factory's established filtering.
- Excluded raw members: 0
- Excluded observations: 0

## 3. Media objects file size histogram

![Toy Story 5 collection size histogram](figures/toy-story-5-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Visualization pass — graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/toy-story-5-downloads-by-week-toy-story-5-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![toy-story-5 downloads by day](figures/toy-story-5-downloads-by-day-day.svg)

## 5. Visualization pass — maps

### Cumulative geographic slices

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 3.66 | 21.20 | 37.09 | 35.37 | 1.96 | 0.72 |

### Cumulative network infrastructure

[![Toy Story 5 cumulative map](figures/toy-story-5-carto.png)](figures/toy-story-5-carto-4k.webp){:target="_blank" rel="noopener"}

### Cumulative data maps

**Cumulative >= 1080p**

[![Cumulative >= 1080p](figures/toy-story-5-data-ge-1080p.webp)](figures/toy-story-5-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

**Cumulative < 1080p**

[![Cumulative < 1080p](figures/toy-story-5-data-lt-1080p.webp)](figures/toy-story-5-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
