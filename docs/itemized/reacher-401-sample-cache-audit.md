---
layout: default
title: "reacher-401 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# reacher-401 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Reacher |
| Collection key | `reacher-401` |
| imdb_id | [tt9288030](https://www.imdb.com/title/tt9288030/) |
| wikipedia_url | [Reacher (TV series)](https://en.wikipedia.org/wiki/Reacher_(TV_series)) |
| Sample dates | 2026-08-14-to-2026-10-01 |
| Sample days | 49 |
| BTIH count | 204 |
| Unique BTIH count | 197 |
| Downloaders total | 4,345,720 |
| Uploaders total | 433,762 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Sample coverage report

- Generated: 2026-10-07T11:57:09Z
- Frozen sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/reacher-401.xz`
- Hour directories: 1170
- Zero-length sample files: 0
- Malformed in-scope records accepted: 0 (producer rejects nonempty malformed input)
- Hourly discontinuities: 1 (1 missing hours)
- Missing days: 0

### Sample archive discontinuities

- hourly gap: last `2026-09-09 22:01`, resumed `2026-09-10 00:01` — missing 1 hour(s)


### Frozen validation evidence

- Frozen content SHA-256: `9f8183ecdedea3f8788007c0710ea7aaf53780b9728b7ff8af11a9c0cef4384c`
- Full-input producer receipt SHA-256: `aeb117ff3d2c6d590a57bf251c93b778a86958f81ab59a45f5058fe646a99115`
- Frozen raw archives: 1170
- Empty sampler observations remain explicit gaps; no observations were imputed.
- Out-of-scope records retain the collection factory's established filtering.
- Excluded raw members: 0
- Excluded observations: 0

## 3. Media objects file size histogram

![Reacher collection size histogram](figures/reacher-401-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Visualization pass — graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/reacher-401-downloads-by-week-reacher-401-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![reacher-401 downloads by day](figures/reacher-401-downloads-by-day-day.svg)

## 5. Visualization pass — maps

### Cumulative geographic slices

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 5.55 | 19.61 | 30.40 | 41.97 | 1.75 | 0.73 |

### Cumulative network infrastructure

[![Reacher cumulative map](figures/reacher-401-carto.png)](figures/reacher-401-carto-4k.webp){:target="_blank" rel="noopener"}

### Cumulative data maps

**Cumulative >= 1080p**

[![Cumulative >= 1080p](figures/reacher-401-data-ge-1080p.webp)](figures/reacher-401-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

**Cumulative < 1080p**

[![Cumulative < 1080p](figures/reacher-401-data-lt-1080p.webp)](figures/reacher-401-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}
