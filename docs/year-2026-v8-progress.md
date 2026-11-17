---
layout: default
title: "November 2026 cache update progress"
---

# November 2026 cache update progress

Run `20261116-v8`. Sample cutoff: **2026-11-15**, America/Los_Angeles.

Last observation: **2026-11-17T03:32:50.572115+00:00**. This is a recorded heartbeat; refresh after the next publication.

**9 published, 54 remaining; 14.3% published.**

The input review covers 99 objects, including 36 predecessor objects without newly observed filenames. Existing published pages remain available while each update is validated.

| Stage | Objects |
| --- | ---: |
| inputs frozen | 98 |
| cache validated | 10 |
| bundle validated | 9 |
| installed | 9 |
| pushed | 9 |
| deployed | 9 |

`inputs frozen` counts the whole cohort; subsequent stages count this run’s update candidates.

| Worker | Observed activity |
| --- | --- |
| Eureka | Running: prepare-admissions. 165.1 GB free. |
| Ord | Pinned runtime verified. 1214.8 GB free; 578 stored local cache archives retired; Gold is the retained cache source. |

## Current constraints

- Input-source holds: bear-05. Completed objects proceed independently.
- 11 admitted objects need more scratch space; 25.0 GB stays reserved.
- Identity, scope, archive-adoption or source-quality holds: get-jiro-01, invincible-101, kung-fu-soccer-2026, invincible-201, invincible-301, legend-of-vox-machina-410, world-cup-2026, widows-bay-108, project-hail-mary.
- New claims paused: Restoring the shared cartography plate and resuming validated Ord caches at their results stage.

Finished objects are checked in individually after cache, page-bundle and storage verification. A pushed commit and a successful Pages deployment are recorded separately. Throughput and completion estimates will follow measured production pilots.

## Update candidates

| Media object | Source endpoint | Planned cache work | Current stage |
| --- | --- | --- | --- |
| `all-you-need-is-kill` | 2026-10-14 | incremental-candidate | deployed |
| `apothecary-diaries-03.1` | 2026-11-13 | build-no-2026-cache | ready |
| `avatar-seven-havens-01` | 2026-11-13 | build-no-2026-cache | ready |
| `avatar-the-last-airbender-2024-02` | 2026-11-13 | incremental-candidate | waiting for scratch capacity; estimated 1654.9 GB plus 25.0 GB reserve |
| `backrooms-2026` | 2026-11-10 | incremental-candidate | ready |
| `bass-x-machina-01` | 2026-11-13 | build-no-2026-cache | deployed |
| `bear-05` | 2026-11-13 | incremental-candidate | held: input freeze failed: invalid sample size/digest |
| `black-clover-02` | 2026-11-13 | build-no-2026-cache | ready |
| `blue-box-201` | 2026-11-14 | build-no-2026-cache | deployed |
| `boys-501` | 2026-10-06 | incremental-candidate | waiting for scratch capacity; estimated 2164.8 GB plus 25.0 GB reserve |
| `brothers-01` | 2026-11-13 | full-recache-count-increased | ready |
| `coyote-vs-acme` | 2026-11-08 | full-recache-count-increased | ready |
| `crew-girl-01` | 2026-11-11 | full-recache-count-increased | ready |
| `cyberpunk-edgerunners-02` | 2026-11-09 | build-no-2026-cache | ready |
| `dang-01` | 2026-11-10 | full-recache-count-increased | ready |
| `diplomat-04` | 2026-11-05 | build-no-2026-cache | failed |
| `drama-2026` | 2026-10-16 | incremental-candidate | ready |
| `enola-holmes-3` | 2026-10-16 | incremental-candidate | ready |
| `euphoria-301` | 2026-10-11 | incremental-candidate | waiting for scratch capacity; estimated 1880.7 GB plus 25.0 GB reserve |
| `fall-of-el-mayo-01` | 2026-11-13 | build-no-2026-cache | deployed |
| `furious-2025` | 2026-10-19 | full-recache-count-increased | ready |
| `get-jiro-01` | 2026-11-15 | resolve-torrent-definition | identity resolution |
| `ghost-in-the-shell-2026-01` | 2026-11-09 | full-recache-count-increased | waiting for scratch capacity; estimated 1731.0 GB plus 25.0 GB reserve |
| `hopeu-2026` | 2026-11-14 | build-no-2026-cache | deployed |
| `house-of-the-dragon-301` | 2026-11-15 | incremental-candidate | waiting for scratch capacity; estimated 1531.5 GB plus 25.0 GB reserve |
| `house-of-the-dragon-308` | 2026-11-15 | incremental-candidate | ready |
| `invincible-101` | 2026-04-28 | build-no-2026-cache | held: explicit annual continuation and historical cache layout review |
| `invincible-201` | 2026-05-05 | build-no-2026-cache | held: explicit annual continuation and historical cache layout review |
| `invincible-301` | 2026-06-30 | inspect-latest-cache-day | held: newer Eureka archive requires adoption review |
| `invite-2026` | 2026-11-13 | incremental-candidate | ready |
| `kill-jackie-01` | 2026-11-05 | build-no-2026-cache | ready |
| `kung-fu-soccer-2026` | 2026-11-13 | inspect-latest-cache-day | held: newer Gold cache requires adoption review |
| `lanterns-101` | 2026-11-08 | incremental-candidate | ready |
| `legend-of-vox-machina-410` | 2026-10-21 | incremental-candidate | held: XZ input inventory failed: xz: /mnt/gold/src/alpha60-samples-raw.gold/legend-of-vox-machina-410.xz/2026-10-10-at-22-04.tar.xz: Compressed data is corrupt |
| `lego-star-wars-the-mandalorian-2026` | 2026-11-15 | full-recache-count-increased | deployed |
| `lowdown-201` | 2026-11-11 | build-no-2026-cache | deployed |
| `lupin-04` | 2026-11-13 | build-no-2026-cache | building-results |
| `mandalorian-and-grogu` | 2026-11-09 | full-recache-count-increased | waiting for scratch capacity; estimated 1956.0 GB plus 25.0 GB reserve |
| `monarch-legacy-of-monsters-208` | 2026-10-15 | incremental-candidate | waiting for scratch capacity; estimated 1771.5 GB plus 25.0 GB reserve |
| `musk-2026` | 2026-11-13 | build-no-2026-cache | deployed |
| `my-brilliant-career-2026-01` | 2026-11-09 | full-recache-count-increased | ready |
| `neagley-01` | 2026-11-11 | full-recache-count-increased | ready |
| `obsession-2025` | 2026-10-29 | full-recache-count-increased | waiting for scratch capacity; estimated 1193.1 GB plus 25.0 GB reserve |
| `president-curtis-01` | 2026-11-13 | incremental-candidate | ready |
| `project-hail-mary` | 2026-11-08 | resolve-count-decreased | held: reduced canonical member count requires scope review |
| `reacher-401` | 2026-11-13 | incremental-candidate | ready |
| `resident-evil-2026` | 2026-11-13 | build-no-2026-cache | deployed |
| `season-2026-01` | 2026-10-10 | incremental-candidate | ready |
| `send-help` | 2026-10-18 | incremental-candidate | waiting for scratch capacity; estimated 1614.6 GB plus 25.0 GB reserve |
| `shards-101` | 2026-11-11 | incremental-candidate | ready |
| `silo-301` | 2026-11-13 | incremental-candidate | ready |
| `slow-horses-601` | 2026-10-24 | full-recache-count-increased | failed |
| `spider-man-brand-new-day` | 2026-11-10 | build-no-2026-cache | ready |
| `spider-noir-01` | 2026-11-10 | full-recache-count-increased | waiting for scratch capacity; estimated 3085.0 GB plus 25.0 GB reserve |
| `star-wars-visions-the-ninth-jedi-01` | 2026-11-09 | incremental-candidate | ready |
| `stranger-things-tales-from-85-02` | 2026-11-11 | full-recache-count-increased | ready |
| `sugar-201` | 2026-10-08 | incremental-candidate | ready |
| `super-mario-galaxy-movie` | 2026-11-10 | incremental-candidate | waiting for scratch capacity; estimated 1510.2 GB plus 25.0 GB reserve |
| `toy-story-5` | 2026-11-10 | full-recache-count-increased | ready |
| `visionquest-101` | 2026-11-10 | build-no-2026-cache | ready |
| `widows-bay-108` | 2026-10-31 | full-recache-count-increased | held: XZ input inventory failed: xz: /mnt/gold/src/alpha60-samples-raw.gold/widows-bay-108.xz/2026-10-31-at-13-01.tar.xz: Compressed data is corrupt |
| `world-cup-2026` | 2026-11-10 | inspect-latest-cache-day | held: newer Gold cache requires adoption review |
| `x-men-97-201` | 2026-11-11 | incremental-candidate | ready |

[Machine-readable progress](year-2026-v8-progress.json) · [Results home](../index.html) · [Pages deployments](https://github.com/alpha60-devops/alpha60-results-2026/actions)
