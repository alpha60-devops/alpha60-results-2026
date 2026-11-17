---
layout: default
title: "November 2026 cache update progress"
---

# November 2026 cache update progress

Run `20261116-v8`. Sample cutoff: **2026-11-15**, America/Los_Angeles.

Last observation: **2026-11-17T22:03:19.316008+00:00**. This is a recorded heartbeat; refresh after the next publication.

**26 published, 37 remaining; 41.3% published.**

The input review covers 99 objects, including 36 predecessor objects without newly observed filenames. Existing published pages remain available while each update is validated.

| Stage | Objects |
| --- | ---: |
| inputs frozen | 98 |
| cache validated | 28 |
| bundle validated | 27 |
| installed | 26 |
| pushed | 26 |
| deployed | 26 |

`inputs frozen` counts the whole cohort; subsequent stages count this run’s update candidates.

| Worker | Observed activity |
| --- | --- |
| Eureka | Running: prepare-admissions, eureka-obsession-2025-g1. 441.2 GB free. |
| Ord | Pinned runtime verified. 1177.8 GB free; 578 stored local cache archives retired; Gold is the retained cache source. |

Incremental updates reuse verified hourly caches and extract new or affected sample hours. Full-history comparison is optional. Each finished canonical Gold archive contains hour, day, week and cumulative results.

## Current constraints

- Coordinator recovery hold: unreviewed shared-file change: docs/year-2026-v8-progress.json

Finished objects are checked in individually after cache, page-bundle and storage verification. A pushed commit and a successful Pages deployment are recorded separately. Throughput and completion estimates will follow measured production pilots.

## Update candidates

| Media object | Source endpoint | Planned cache work | Current stage |
| --- | --- | --- | --- |
| `all-you-need-is-kill` | 2026-10-14 | incremental-candidate | deployed |
| `apothecary-diaries-03.1` | 2026-11-13 | build-no-2026-cache | deployed |
| `avatar-seven-havens-01` | 2026-11-13 | build-no-2026-cache | ready |
| `avatar-the-last-airbender-2024-02` | 2026-11-13 | incremental-candidate | ready |
| `backrooms-2026` | 2026-11-10 | incremental-candidate | ready |
| `bass-x-machina-01` | 2026-11-13 | build-no-2026-cache | deployed |
| `bear-05` | 2026-11-13 | rebuild | ready |
| `black-clover-02` | 2026-11-13 | build-no-2026-cache | deployed |
| `blue-box-201` | 2026-11-14 | build-no-2026-cache | deployed |
| `boys-501` | 2026-10-06 | incremental-candidate | bundle-validated |
| `brothers-01` | 2026-11-13 | full-recache-count-increased | deployed |
| `coyote-vs-acme` | 2026-11-08 | full-recache-count-increased | deployed |
| `crew-girl-01` | 2026-11-11 | full-recache-count-increased | ready |
| `cyberpunk-edgerunners-02` | 2026-11-09 | build-no-2026-cache | ready |
| `dang-01` | 2026-11-10 | full-recache-count-increased | ready |
| `diplomat-04` | 2026-11-05 | build-no-2026-cache | deployed |
| `drama-2026` | 2026-10-16 | incremental-candidate | deployed |
| `enola-holmes-3` | 2026-10-16 | incremental-candidate | ready |
| `euphoria-301` | 2026-10-11 | incremental-candidate | deployed |
| `fall-of-el-mayo-01` | 2026-11-13 | build-no-2026-cache | deployed |
| `furious-2025` | 2026-10-19 | full-recache-count-increased | ready |
| `get-jiro-106` | 2026-11-15 | build | ready |
| `ghost-in-the-shell-2026-01` | 2026-11-09 | full-recache-count-increased | ready |
| `hopeu-2026` | 2026-11-14 | build-no-2026-cache | deployed |
| `house-of-the-dragon-301` | 2026-11-15 | incremental-candidate | ready |
| `house-of-the-dragon-308` | 2026-11-15 | incremental-candidate | ready |
| `invincible-101` | 2026-04-28 | build | ready |
| `invincible-201` | 2026-05-05 | build | ready |
| `invincible-301` | 2026-06-30 | extend | ready |
| `invite-2026` | 2026-11-13 | incremental-candidate | deployed |
| `kill-jackie-01` | 2026-11-05 | build-no-2026-cache | deployed |
| `kung-fu-soccer-2026` | 2026-11-13 | extend | ready |
| `lanterns-101` | 2026-11-08 | incremental-candidate | ready |
| `legend-of-vox-machina-410` | 2026-10-21 | rebuild | ready |
| `lego-star-wars-the-mandalorian-2026` | 2026-11-15 | full-recache-count-increased | deployed |
| `lowdown-201` | 2026-11-11 | build-no-2026-cache | deployed |
| `lupin-04` | 2026-11-13 | build-no-2026-cache | deployed |
| `mandalorian-and-grogu` | 2026-11-09 | full-recache-count-increased | ready |
| `monarch-legacy-of-monsters-208` | 2026-10-15 | incremental-candidate | results-offloaded |
| `musk-2026` | 2026-11-13 | build-no-2026-cache | deployed |
| `my-brilliant-career-2026-01` | 2026-11-09 | full-recache-count-increased | deployed |
| `neagley-01` | 2026-11-11 | full-recache-count-increased | ready |
| `obsession-2025` | 2026-10-29 | full-recache-count-increased | caching |
| `president-curtis-01` | 2026-11-13 | incremental-candidate | ready |
| `project-hail-mary` | 2026-11-08 | rebuild | ready |
| `reacher-401` | 2026-11-13 | incremental-candidate | deployed |
| `resident-evil-2026` | 2026-11-13 | build-no-2026-cache | deployed |
| `season-2026-01` | 2026-10-10 | incremental-candidate | deployed |
| `send-help` | 2026-10-18 | incremental-candidate | ready |
| `shards-101` | 2026-11-11 | incremental-candidate | deployed |
| `silo-301` | 2026-11-13 | incremental-candidate | ready |
| `slow-horses-601` | 2026-10-24 | full-recache-count-increased | deployed |
| `spider-man-brand-new-day` | 2026-11-10 | build-no-2026-cache | ready |
| `spider-noir-01` | 2026-11-10 | full-recache-count-increased | ready |
| `star-wars-visions-the-ninth-jedi-01` | 2026-11-09 | incremental-candidate | ready |
| `stranger-things-tales-from-85-02` | 2026-11-11 | full-recache-count-increased | ready |
| `sugar-201` | 2026-10-08 | incremental-candidate | deployed |
| `super-mario-galaxy-movie` | 2026-11-10 | incremental-candidate | ready |
| `toy-story-5` | 2026-11-10 | full-recache-count-increased | ready |
| `visionquest-101` | 2026-11-10 | build-no-2026-cache | deployed |
| `widows-bay-108` | 2026-10-31 | rebuild | ready |
| `world-cup-2026` | 2026-11-10 | extend | ready |
| `x-men-97-201` | 2026-11-11 | incremental-candidate | ready |

[Machine-readable progress](year-2026-v8-progress.json) · [Results home](../index.html) · [Pages deployments](https://github.com/alpha60-devops/alpha60-results-2026/actions)
