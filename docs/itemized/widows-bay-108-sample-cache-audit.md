---
layout: default
title: "widows-bay-108 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# widows-bay-108 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | Widows Bay |
| Collection key | `widows-bay-108` |
| imdb_id | [tt33332385](https://www.imdb.com/title/tt33332385/) |
| wikipedia_url | [Widow's Bay](https://en.wikipedia.org/wiki/Widow%27s_Bay) |
| Sample dates | 2026-06-03-to-2026-10-31 |
| Sample days | 151 |
| BTIH count | 382 |
| Unique BTIH count | 378 |
| Downloaders total | 39,523,506 |
| Uploaders total | 2,269,719 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-11-19T15:35:06Z
- Sample archive directory: `/home/bkoz/src/alpha60-campaigns/year-2026/20261116-v8/objects/widows-bay-108/g1/results/coverage-inputs`
- Hour directories: 3553
- Other unparsable sample files: 0
- Hourly discontinuities: 1 (45 missing hours)
- Missing days: 1

### Sample archive discontinuities

- hourly gap: last `2026-10-11 22:01`, resumed `2026-10-13 20:24` — missing 45 hour(s)
- missing day: `2026-10-12`

## 3. File sizes histogram *median[lowest, highest]*

![Widows Bay collection size histogram](figures/widows-bay-108-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/widows-bay-108-downloads-by-week-widows-bay-108-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![widows-bay-108 downloads by day](figures/widows-bay-108-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/widows-bay-108-cumulative-aggregate.geojson.gz" data-map-title="Widows Bay — widows-bay-108" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open Widows Bay (widows-bay-108) cumulative data map in new window" title="Opens interactive map for Widows Bay (widows-bay-108) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 1.71 | 19.27 | 33.91 | 42.84 | 1.42 | 0.85 |

### Network infrastructure

[![Widows Bay cumulative map](figures/widows-bay-108-carto.png)](figures/widows-bay-108-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/widows-bay-108-data-ge-1080p.webp)](figures/widows-bay-108-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/widows-bay-108-data-lt-1080p.webp)](figures/widows-bay-108-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}

<!-- BEGIN alpha60-v8-source-dispositions -->

## Recovered and skipped source samples

1 damaged source archives yielded 5,030 complete, valid JSON sample files; 0 archives yielded none and were skipped.
Recovered files were retained only after complete JSON validation and archive readback. Damaged original archives remain preserved.
**These source hours are not fully recovered. Lost original membership is unknown.**
The sample-date range does not establish complete observations in the affected hours. No missing observations were fabricated.

| Source archive | Disposition | Valid JSON files recovered |
| --- | --- | ---: |
| `2026-10-31-at-13-01.tar.xz` | partial-recovery | 5,030 |

[Source dispositions and archive hashes](../../data/txt/year-2026-source-dispositions/widows-bay-108.json).

<!-- END alpha60-v8-source-dispositions -->
