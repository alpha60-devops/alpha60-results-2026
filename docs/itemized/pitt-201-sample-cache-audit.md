---
layout: default
title: "pitt-201 Sample Cache Audit"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Cache coverage and visualization audit for one media object."
---

# pitt-201 sample cache audit

## 1. Media object

| Field | Value |
| --- | --- |
| Media object | The Pitt |
| Collection key | `pitt-201` |
| imdb_id | [tt31938062](https://www.imdb.com/title/tt31938062/) |
| wikipedia_url | [The Pitt](https://en.wikipedia.org/wiki/The_Pitt) |
| Sample dates | 2026-01-09-to-2026-07-09 |
| Sample days | 182 |
| BTIH count | 416 |
| Unique BTIH count | 392 |
| Downloaders total | 67,397,119 |
| Uploaders total | 3,331,462 |
| Data version | `2026-08-05` |
| IP geolocation version | `6:1777968300` |

## 2. Coverage report

- Generated: 2026-09-13T17:13:08Z
- Sample archive directory: `/mnt/gold/src/alpha60-samples-raw.gold/pitt-201.xz`
- Hour directories: 4325
- Zero-length sample files: 0
- Other unparsable sample files: 0
- Hourly discontinuities: 3 (34 missing hours)
- Missing days: 1

### Sample archive discontinuities

- hourly gap: last `2026-02-08 22:00`, resumed `2026-02-09 00:00` — missing 1 hour(s)
- hourly gap: last `2026-03-29 01:00`, resumed `2026-03-29 03:00` — missing 1 hour(s)
- hourly gap: last `2026-07-02 23:00`, resumed `2026-07-04 08:26` — missing 32 hour(s)
- missing day: `2026-07-03`

## 3. File sizes histogram *median[lowest, highest]*

![The Pitt collection size histogram](figures/pitt-201-cumulative-detail-btiha-itemized-by-bytes.svg)

## 4. Graphs

### Downloads by week cumulative (normalized start)

<script type="text/javascript" crossorigin="anonymous" id="graph-hover"
	src="../../resources/izzi-graph-hover-txt-polyline-red.js">
</script>

<div class="media-object-audit-week-graph" style="max-width: 100%;">
{% include_relative figures/pitt-201-downloads-by-week-pitt-201-week.svg %}
</div>
<style>
.media-object-audit-week-graph svg {
  display: block;
  width: 100%;
  height: auto;
}
</style>

### Downloads by day, Saturday and Sunday in gray

![pitt-201 downloads by day](figures/pitt-201-downloads-by-day-day.svg)

## 5. Cumulative Maps

<script defer type="text/javascript" crossorigin="anonymous" id="geojson-map"
        src="../../resources/izzi-map-leaflet-geojson-v7.8.js"></script>

<!-- https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/ -->

### <a href="https://raw.githubusercontent.com/alpha60-devops/alpha60-results-2026/refs/heads/main/data/geojson.cumulative/pitt-201-cumulative-aggregate.geojson.gz" data-map-title="The Pitt — pitt-201" onclick="leaflet_map_open_window(this.href, this.dataset.mapTitle); return false;" class="table-link" aria-label="Open The Pitt (pitt-201) cumulative data map in new window" title="Opens interactive map for The Pitt (pitt-201) data">Swarm Detail</a>

### Geographic Regions

| Africa | Americas | Asia | Europe | Oceania | Unknown |
| --- | --- | --- | --- | --- | --- |
| 1.25 | 15.20 | 34.40 | 45.96 | 1.29 | 0.72 |

### Network infrastructure

[![The Pitt cumulative map](figures/pitt-201-carto.png)](figures/pitt-201-carto-4k.webp){:target="_blank" rel="noopener"}

### Resolution >= 1080p

[![Cumulative >= 1080p](figures/pitt-201-data-ge-1080p.webp)](figures/pitt-201-data-ge-1080p-4k.webp){:target="_blank" rel="noopener"}

### Resolution < 1080p

[![Cumulative < 1080p](figures/pitt-201-data-lt-1080p.webp)](figures/pitt-201-data-lt-1080p-4k.webp){:target="_blank" rel="noopener"}

<!-- BEGIN country-resolution-detail -->

## Country resolution detail

Input: **sample-cache-cumulative**. These country close-ups are drawn directly from the original cumulative sample cache after duplicate-BTIH coalescing and IP geolocation. No published GeoJSON, cell publication threshold or product rescaling is used. No ITU adjustment or missing-hour imputation is applied.

Country membership follows the exact source ISO3 code. Boundaries are Natural Earth 1:10m v5.1.2, with vector lake/reservoir water removed from land; boundary disagreements are retained and reported in the downloadable receipts. Maps use native izzi and Cartofreako vector outlines, registered Cahill–Keyes coordinates, and fixed page-space bubble areas. All countries and resolution views share the same bubble coefficient and 5% opacity.

### Philippines (PHL)

Sample: **2026-01-09-to-2026-07-09**. Radius coefficient: `1.01309219884`. Combined = 1080 + 2160 + 720 + SD; ≥1080p = 1080 + 2160; <1080p = 720 + SD.

<div style="max-width:100%;overflow-x:auto" tabindex="0" role="region" aria-label="Country weight comparison" markdown="1">

| View | Cumulative-cache downloaders | Cumulative-cache uploaders |
| --- | ---: | ---: |
| combined | 124,061 | 25,674 |
| ge-1080p | 88,607 | 22,684 |
| lt-1080p | 35,454 | 2,990 |

</div>

[Accounting and layout receipt](figures/pitt-201-data-country-phl.json)

![Philippines cumulative combined downloader map](figures/pitt-201-data-country-phl-combined.webp)

[Vector SVG](figures/pitt-201-data-country-phl-combined.svg) · [3840-pixel long edge](figures/pitt-201-data-country-phl-combined-4k.webp)

<details markdown="1">
<summary>ge-1080p plate</summary>

![Philippines cumulative ge-1080p downloader map](figures/pitt-201-data-country-phl-ge-1080p.webp)

[Vector SVG](figures/pitt-201-data-country-phl-ge-1080p.svg) · [3840-pixel long edge](figures/pitt-201-data-country-phl-ge-1080p-4k.webp)

</details>

<details markdown="1">
<summary>lt-1080p plate</summary>

![Philippines cumulative lt-1080p downloader map](figures/pitt-201-data-country-phl-lt-1080p.webp)

[Vector SVG](figures/pitt-201-data-country-phl-lt-1080p.svg) · [3840-pixel long edge](figures/pitt-201-data-country-phl-lt-1080p-4k.webp)

</details>

<details markdown="1">
<summary>Country-ranked locations and diagnostics</summary>

<div style="max-width:100%;overflow-x:auto" tabindex="0" role="region" aria-label="Country ranked locations" markdown="1">

| View | City | Downloader weight | Label drawn |
| --- | --- | ---: | --- |
| combined | Quezon City | 42,160 | yes |
| combined | Manila | 10,323 | yes |
| combined | Cebu City | 9,543 | yes |
| combined | Davao | 5,659 | yes |
| combined | Taguig | 4,064 | yes |
| combined | Makati City | 3,406 | yes |
| combined | Angeles City | 3,274 | yes |
| combined | Pasig City | 2,406 | yes |
| combined | Calamba | 2,205 | yes |
| combined | Cagayan de Oro | 2,167 | yes |
| ge-1080p | Quezon City | 29,645 | yes |
| ge-1080p | Manila | 7,284 | yes |
| ge-1080p | Cebu City | 6,778 | yes |
| ge-1080p | Davao | 4,120 | yes |
| ge-1080p | Taguig | 2,846 | yes |
| ge-1080p | Makati City | 2,467 | yes |
| ge-1080p | Angeles City | 2,213 | yes |
| ge-1080p | Pasig City | 1,671 | yes |
| ge-1080p | Cagayan de Oro | 1,589 | yes |
| ge-1080p | Calamba | 1,528 | yes |
| lt-1080p | Quezon City | 11,935 | yes |
| lt-1080p | Manila | 2,922 | yes |
| lt-1080p | Cebu City | 2,658 | yes |
| lt-1080p | Davao | 1,477 | yes |
| lt-1080p | Taguig | 1,149 | yes |
| lt-1080p | Angeles City | 1,010 | yes |
| lt-1080p | Makati City | 890 | yes |
| lt-1080p | Pasig City | 702 | yes |
| lt-1080p | Calamba | 662 | yes |
| lt-1080p | Las Piñas | 622 | yes |

</div>

Outside-boundary coordinate pairs retained: **51**. Unsupported-resolution downloader weight excluded: **0**.

</details>

### India (IND)

Sample: **2026-01-09-to-2026-07-09**. Radius coefficient: `1.01309219884`. Combined = 1080 + 2160 + 720 + SD; ≥1080p = 1080 + 2160; <1080p = 720 + SD.

<div style="max-width:100%;overflow-x:auto" tabindex="0" role="region" aria-label="Country weight comparison" markdown="1">

| View | Cumulative-cache downloaders | Cumulative-cache uploaders |
| --- | ---: | ---: |
| combined | 355,002 | 31,458 |
| ge-1080p | 235,230 | 25,881 |
| lt-1080p | 119,772 | 5,577 |

</div>

[Accounting and layout receipt](figures/pitt-201-data-country-ind.json)

![India cumulative combined downloader map](figures/pitt-201-data-country-ind-combined.webp)

[Vector SVG](figures/pitt-201-data-country-ind-combined.svg) · [3840-pixel long edge](figures/pitt-201-data-country-ind-combined-4k.webp)

<details markdown="1">
<summary>ge-1080p plate</summary>

![India cumulative ge-1080p downloader map](figures/pitt-201-data-country-ind-ge-1080p.webp)

[Vector SVG](figures/pitt-201-data-country-ind-ge-1080p.svg) · [3840-pixel long edge](figures/pitt-201-data-country-ind-ge-1080p-4k.webp)

</details>

<details markdown="1">
<summary>lt-1080p plate</summary>

![India cumulative lt-1080p downloader map](figures/pitt-201-data-country-ind-lt-1080p.webp)

[Vector SVG](figures/pitt-201-data-country-ind-lt-1080p.svg) · [3840-pixel long edge](figures/pitt-201-data-country-ind-lt-1080p-4k.webp)

</details>

<details markdown="1">
<summary>Country-ranked locations and diagnostics</summary>

<div style="max-width:100%;overflow-x:auto" tabindex="0" role="region" aria-label="Country ranked locations" markdown="1">

| View | City | Downloader weight | Label drawn |
| --- | --- | ---: | --- |
| combined | Hyderabad | 30,909 | yes |
| combined | Bengaluru | 29,168 | yes |
| combined | Delhi | 26,920 | yes |
| combined | Chennai | 25,542 | yes |
| combined | Mumbai | 21,243 | yes |
| combined | Kolkata | 8,865 | yes |
| combined | Pune | 7,403 | yes |
| combined | Garhchiroli | 6,603 | yes |
| combined | Agartala | 6,379 | yes |
| combined | Alappuzha | 6,134 | yes |
| ge-1080p | Bengaluru | 19,964 | yes |
| ge-1080p | Hyderabad | 19,920 | yes |
| ge-1080p | Delhi | 18,736 | yes |
| ge-1080p | Mumbai | 13,741 | yes |
| ge-1080p | Chennai | 13,687 | yes |
| ge-1080p | Kolkata | 5,927 | yes |
| ge-1080p | Pune | 5,290 | yes |
| ge-1080p | Garhchiroli | 4,223 | yes |
| ge-1080p | Agartala | 4,058 | yes |
| ge-1080p | Alappuzha | 3,956 | yes |
| lt-1080p | Hyderabad | 10,694 | yes |
| lt-1080p | Chennai | 9,639 | yes |
| lt-1080p | Bengaluru | 8,892 | yes |
| lt-1080p | Delhi | 8,054 | yes |
| lt-1080p | Mumbai | 7,398 | yes |
| lt-1080p | Kolkata | 2,905 | yes |
| lt-1080p | Garhchiroli | 2,358 | yes |
| lt-1080p | Agartala | 2,302 | yes |
| lt-1080p | Alappuzha | 2,155 | yes |
| lt-1080p | Kollam | 2,114 | yes |

</div>

Outside-boundary coordinate pairs retained: **14**. Unsupported-resolution downloader weight excluded: **0**.

</details>

### Japan (JPN)

Sample: **2026-01-09-to-2026-07-09**. Radius coefficient: `1.01309219884`. Combined = 1080 + 2160 + 720 + SD; ≥1080p = 1080 + 2160; <1080p = 720 + SD.

<div style="max-width:100%;overflow-x:auto" tabindex="0" role="region" aria-label="Country weight comparison" markdown="1">

| View | Cumulative-cache downloaders | Cumulative-cache uploaders |
| --- | ---: | ---: |
| combined | 910,256 | 8,632 |
| ge-1080p | 586,037 | 7,499 |
| lt-1080p | 324,219 | 1,133 |

</div>

[Accounting and layout receipt](figures/pitt-201-data-country-jpn.json)

![Japan cumulative combined downloader map](figures/pitt-201-data-country-jpn-combined.webp)

[Vector SVG](figures/pitt-201-data-country-jpn-combined.svg) · [3840-pixel long edge](figures/pitt-201-data-country-jpn-combined-4k.webp)

<details markdown="1">
<summary>ge-1080p plate</summary>

![Japan cumulative ge-1080p downloader map](figures/pitt-201-data-country-jpn-ge-1080p.webp)

[Vector SVG](figures/pitt-201-data-country-jpn-ge-1080p.svg) · [3840-pixel long edge](figures/pitt-201-data-country-jpn-ge-1080p-4k.webp)

</details>

<details markdown="1">
<summary>lt-1080p plate</summary>

![Japan cumulative lt-1080p downloader map](figures/pitt-201-data-country-jpn-lt-1080p.webp)

[Vector SVG](figures/pitt-201-data-country-jpn-lt-1080p.svg) · [3840-pixel long edge](figures/pitt-201-data-country-jpn-lt-1080p-4k.webp)

</details>

<details markdown="1">
<summary>Country-ranked locations and diagnostics</summary>

<div style="max-width:100%;overflow-x:auto" tabindex="0" role="region" aria-label="Country ranked locations" markdown="1">

| View | City | Downloader weight | Label drawn |
| --- | --- | ---: | --- |
| combined | Tokyo | 240,677 | yes |
| combined | Osaka | 89,369 | yes |
| combined | Yokohama | 68,698 | yes |
| combined | Nagoya | 39,609 | yes |
| combined | Kobe | 18,175 | yes |
| combined | Saitama | 16,106 | yes |
| combined | Kawasaki | 14,210 | yes |
| combined | Fukuoka | 11,976 | yes |
| combined | Chiba | 11,637 | yes |
| combined | Kyoto | 10,744 | yes |
| ge-1080p | Tokyo | 154,924 | yes |
| ge-1080p | Osaka | 57,461 | yes |
| ge-1080p | Yokohama | 43,618 | yes |
| ge-1080p | Nagoya | 25,216 | yes |
| ge-1080p | Kobe | 11,504 | yes |
| ge-1080p | Saitama | 10,236 | yes |
| ge-1080p | Kawasaki | 9,018 | yes |
| ge-1080p | Fukuoka | 7,625 | yes |
| ge-1080p | Chiba | 7,411 | yes |
| ge-1080p | Kyoto | 6,765 | yes |
| lt-1080p | Tokyo | 83,621 | yes |
| lt-1080p | Osaka | 31,081 | yes |
| lt-1080p | Yokohama | 24,414 | yes |
| lt-1080p | Nagoya | 14,029 | yes |
| lt-1080p | Kobe | 6,501 | yes |
| lt-1080p | Saitama | 5,727 | yes |
| lt-1080p | Kawasaki | 5,063 | yes |
| lt-1080p | Fukuoka | 4,233 | yes |
| lt-1080p | Chiba | 4,122 | yes |
| lt-1080p | Kyoto | 3,891 | yes |

</div>

Outside-boundary coordinate pairs retained: **16**. Unsupported-resolution downloader weight excluded: **0**.

</details>

### South Korea (KOR)

Sample: **2026-01-09-to-2026-07-09**. Radius coefficient: `1.01309219884`. Combined = 1080 + 2160 + 720 + SD; ≥1080p = 1080 + 2160; <1080p = 720 + SD.

<div style="max-width:100%;overflow-x:auto" tabindex="0" role="region" aria-label="Country weight comparison" markdown="1">

| View | Cumulative-cache downloaders | Cumulative-cache uploaders |
| --- | ---: | ---: |
| combined | 8,567,725 | 11,546 |
| ge-1080p | 5,491,536 | 10,766 |
| lt-1080p | 3,076,189 | 780 |

</div>

[Accounting and layout receipt](figures/pitt-201-data-country-kor.json)

![South Korea cumulative combined downloader map](figures/pitt-201-data-country-kor-combined.webp)

[Vector SVG](figures/pitt-201-data-country-kor-combined.svg) · [3840-pixel long edge](figures/pitt-201-data-country-kor-combined-4k.webp)

<details markdown="1">
<summary>ge-1080p plate</summary>

![South Korea cumulative ge-1080p downloader map](figures/pitt-201-data-country-kor-ge-1080p.webp)

[Vector SVG](figures/pitt-201-data-country-kor-ge-1080p.svg) · [3840-pixel long edge](figures/pitt-201-data-country-kor-ge-1080p-4k.webp)

</details>

<details markdown="1">
<summary>lt-1080p plate</summary>

![South Korea cumulative lt-1080p downloader map](figures/pitt-201-data-country-kor-lt-1080p.webp)

[Vector SVG](figures/pitt-201-data-country-kor-lt-1080p.svg) · [3840-pixel long edge](figures/pitt-201-data-country-kor-lt-1080p-4k.webp)

</details>

<details markdown="1">
<summary>Country-ranked locations and diagnostics</summary>

<div style="max-width:100%;overflow-x:auto" tabindex="0" role="region" aria-label="Country ranked locations" markdown="1">

| View | City | Downloader weight | Label drawn |
| --- | --- | ---: | --- |
| combined | Seoul | 3,000,383 | yes |
| combined | Incheon | 754,101 | yes |
| combined | Busan | 361,401 | yes |
| combined | Daegu | 305,963 | yes |
| combined | Suwon | 230,554 | yes |
| combined | Gwangju | 224,049 | yes |
| combined | Daejeon | 192,179 | yes |
| combined | Seongnam-si | 182,565 | yes |
| combined | Hwaseong-si | 174,805 | yes |
| combined | Goyang-si | 170,500 | yes |
| ge-1080p | Seoul | 1,914,794 | yes |
| ge-1080p | Incheon | 480,780 | yes |
| ge-1080p | Busan | 230,256 | yes |
| ge-1080p | Daegu | 195,283 | yes |
| ge-1080p | Suwon | 147,513 | yes |
| ge-1080p | Gwangju | 142,957 | yes |
| ge-1080p | Daejeon | 122,012 | yes |
| ge-1080p | Seongnam-si | 116,313 | yes |
| ge-1080p | Hwaseong-si | 111,521 | yes |
| ge-1080p | Goyang-si | 108,849 | yes |
| lt-1080p | Seoul | 1,061,753 | yes |
| lt-1080p | Incheon | 267,303 | yes |
| lt-1080p | Busan | 128,060 | yes |
| lt-1080p | Daegu | 108,030 | yes |
| lt-1080p | Suwon | 81,251 | yes |
| lt-1080p | Gwangju | 79,249 | yes |
| lt-1080p | Daejeon | 68,595 | yes |
| lt-1080p | Seongnam-si | 64,755 | yes |
| lt-1080p | Hwaseong-si | 61,907 | yes |
| lt-1080p | Goyang-si | 60,238 | yes |

</div>

Outside-boundary coordinate pairs retained: **0**. Unsupported-resolution downloader weight excluded: **0**.

</details>

### China (CHN)

Sample: **2026-01-09-to-2026-07-09**. Radius coefficient: `1.01309219884`. Combined = 1080 + 2160 + 720 + SD; ≥1080p = 1080 + 2160; <1080p = 720 + SD.

<div style="max-width:100%;overflow-x:auto" tabindex="0" role="region" aria-label="Country weight comparison" markdown="1">

| View | Cumulative-cache downloaders | Cumulative-cache uploaders |
| --- | ---: | ---: |
| combined | 5,572,194 | 191,732 |
| ge-1080p | 3,692,339 | 178,919 |
| lt-1080p | 1,879,855 | 12,813 |

</div>

[Accounting and layout receipt](figures/pitt-201-data-country-chn.json)

![China cumulative combined downloader map](figures/pitt-201-data-country-chn-combined.webp)

[Vector SVG](figures/pitt-201-data-country-chn-combined.svg) · [3840-pixel long edge](figures/pitt-201-data-country-chn-combined-4k.webp)

<details markdown="1">
<summary>ge-1080p plate</summary>

![China cumulative ge-1080p downloader map](figures/pitt-201-data-country-chn-ge-1080p.webp)

[Vector SVG](figures/pitt-201-data-country-chn-ge-1080p.svg) · [3840-pixel long edge](figures/pitt-201-data-country-chn-ge-1080p-4k.webp)

</details>

<details markdown="1">
<summary>lt-1080p plate</summary>

![China cumulative lt-1080p downloader map](figures/pitt-201-data-country-chn-lt-1080p.webp)

[Vector SVG](figures/pitt-201-data-country-chn-lt-1080p.svg) · [3840-pixel long edge](figures/pitt-201-data-country-chn-lt-1080p-4k.webp)

</details>

<details markdown="1">
<summary>Country-ranked locations and diagnostics</summary>

<div style="max-width:100%;overflow-x:auto" tabindex="0" role="region" aria-label="Country ranked locations" markdown="1">

| View | City | Downloader weight | Label drawn |
| --- | --- | ---: | --- |
| combined | Nanjing | 1,431,109 | yes |
| combined | Shanghai | 976,105 | yes |
| combined | Hangzhou | 804,076 | yes |
| combined | Shenzhen | 531,103 | yes |
| combined | Beijing | 180,027 | yes |
| combined | Jiaxing | 135,494 | yes |
| combined | Zhengzhou | 128,052 | yes |
| combined | Qingdao | 115,529 | yes |
| combined | Shaoxing | 84,888 | yes |
| combined | Shenyang | 82,631 | yes |
| ge-1080p | Nanjing | 1,003,347 | yes |
| ge-1080p | Shanghai | 625,879 | yes |
| ge-1080p | Hangzhou | 517,807 | yes |
| ge-1080p | Shenzhen | 339,961 | yes |
| ge-1080p | Beijing | 116,386 | yes |
| ge-1080p | Jiaxing | 86,629 | yes |
| ge-1080p | Zhengzhou | 81,990 | yes |
| ge-1080p | Qingdao | 73,724 | yes |
| ge-1080p | Shaoxing | 54,798 | yes |
| ge-1080p | Shenyang | 52,933 | yes |
| lt-1080p | Nanjing | 419,552 | yes |
| lt-1080p | Shanghai | 341,899 | yes |
| lt-1080p | Hangzhou | 280,390 | yes |
| lt-1080p | Shenzhen | 186,224 | yes |
| lt-1080p | Beijing | 62,065 | yes |
| lt-1080p | Jiaxing | 47,715 | yes |
| lt-1080p | Zhengzhou | 44,757 | yes |
| lt-1080p | Qingdao | 40,723 | yes |
| lt-1080p | Shaoxing | 29,437 | yes |
| lt-1080p | Shenyang | 28,841 | yes |

</div>

Outside-boundary coordinate pairs retained: **3**. Unsupported-resolution downloader weight excluded: **0**.

</details>

### United States (USA)

Sample: **2026-01-09-to-2026-07-09**. Radius coefficient: `1.01309219884`. Combined = 1080 + 2160 + 720 + SD; ≥1080p = 1080 + 2160; <1080p = 720 + SD.

<div style="max-width:100%;overflow-x:auto" tabindex="0" role="region" aria-label="Country weight comparison" markdown="1">

| View | Cumulative-cache downloaders | Cumulative-cache uploaders |
| --- | ---: | ---: |
| combined | 4,079,334 | 428,680 |
| ge-1080p | 2,748,899 | 348,554 |
| lt-1080p | 1,330,435 | 80,126 |

</div>

[Accounting and layout receipt](figures/pitt-201-data-country-usa.json)

Insets use independent geographic scales. Bubble areas retain the same weight scale in every panel.

![United States cumulative combined downloader map](figures/pitt-201-data-country-usa-combined.webp)

[Vector SVG](figures/pitt-201-data-country-usa-combined.svg) · [3840-pixel long edge](figures/pitt-201-data-country-usa-combined-4k.webp)

<details markdown="1">
<summary>ge-1080p plate</summary>

![United States cumulative ge-1080p downloader map](figures/pitt-201-data-country-usa-ge-1080p.webp)

[Vector SVG](figures/pitt-201-data-country-usa-ge-1080p.svg) · [3840-pixel long edge](figures/pitt-201-data-country-usa-ge-1080p-4k.webp)

</details>

<details markdown="1">
<summary>lt-1080p plate</summary>

![United States cumulative lt-1080p downloader map](figures/pitt-201-data-country-usa-lt-1080p.webp)

[Vector SVG](figures/pitt-201-data-country-usa-lt-1080p.svg) · [3840-pixel long edge](figures/pitt-201-data-country-usa-lt-1080p-4k.webp)

</details>

<details markdown="1">
<summary>Country-ranked locations and diagnostics</summary>

<div style="max-width:100%;overflow-x:auto" tabindex="0" role="region" aria-label="Country ranked locations" markdown="1">

| View | City | Downloader weight | Label drawn |
| --- | --- | ---: | --- |
| combined | Ashburn | 358,012 | yes |
| combined | New York City | 273,087 | yes |
| combined | Los Angeles | 187,828 | yes |
| combined | Chicago | 153,825 | yes |
| combined | Seattle | 104,856 | yes |
| combined | Atlanta | 104,627 | yes |
| combined | Dallas | 98,432 | yes |
| combined | Miami | 81,906 | yes |
| combined | San Jose | 73,123 | yes |
| combined | Denver | 66,999 | yes |
| ge-1080p | Ashburn | 233,697 | yes |
| ge-1080p | New York City | 190,674 | yes |
| ge-1080p | Los Angeles | 130,922 | yes |
| ge-1080p | Chicago | 108,874 | yes |
| ge-1080p | Seattle | 74,470 | yes |
| ge-1080p | Atlanta | 74,070 | yes |
| ge-1080p | Dallas | 69,057 | yes |
| ge-1080p | Miami | 58,381 | yes |
| ge-1080p | San Jose | 49,855 | yes |
| ge-1080p | Denver | 47,004 | yes |
| lt-1080p | Ashburn | 118,438 | yes |
| lt-1080p | New York City | 80,249 | yes |
| lt-1080p | Los Angeles | 55,137 | yes |
| lt-1080p | Chicago | 43,742 | yes |
| lt-1080p | Atlanta | 29,727 | yes |
| lt-1080p | Seattle | 29,533 | yes |
| lt-1080p | Dallas | 28,342 | yes |
| lt-1080p | Miami | 22,789 | yes |
| lt-1080p | San Jose | 22,719 | yes |
| lt-1080p | Phoenix | 19,794 | yes |

</div>

Outside-boundary coordinate pairs retained: **123**. Unsupported-resolution downloader weight excluded: **0**.

</details>

<!-- END country-resolution-detail -->
