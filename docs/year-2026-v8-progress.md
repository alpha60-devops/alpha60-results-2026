---
layout: default
title: "November 2026 cache update progress"
---

# November 2026 cache update progress

Run `20261116-v8`. Sample cutoff: **2026-11-15**, America/Los_Angeles.

Last observation: **2026-11-19T21:10:31.208772+00:00**. This is a recorded heartbeat; refresh after the next publication.

**51 complete, 12 remaining; 81.0% complete.**

The input review covers 99 objects, including 36 predecessor objects without newly observed filenames. Existing published pages remain available while each update is validated.

| Stage | Objects |
| --- | ---: |
| inputs frozen | 98 |
| cache validated | 51 |
| bundle validated | 51 |
| installed | 51 |
| pushed | 51 |
| deployed | 51 |

First-pass coverage: **58 attempted, 5 not started**; 51 validated bundles in total, including 0 awaiting Gold installation. 6 individual errors are deferred to the second pass.

Complete means Gold installation/readback and deployed Pages verification. First-pass production can advance while that acceptance count stays unchanged.

`inputs frozen` counts the whole cohort; subsequent stages count this run’s update candidates.

| Worker | Observed activity |
| --- | --- |
| Eureka | Running: prepare-admissions. 426.7 GB free. |
| Ord | Running: alpha60-v8-ord-avatar-the-last-airbender-2024-02-g1.service. 1147.7 GB free; 578 stored local cache archives retired; Gold is the retained cache source. |

Incremental updates reuse verified hourly caches and extract new or affected sample hours. Full-history comparison is optional. Each finished canonical Gold archive contains hour, day, week and cumulative results.

## Current constraints

- Individual object errors are recorded; other eligible work continues. Individual errors deferred; pass 1 work continues

Finished objects are checked in individually after cache, page-bundle and storage verification. A pushed commit and a successful Pages deployment are recorded separately. Throughput and completion estimates will follow measured production pilots.

## Update candidates

| Media object | Source endpoint | Planned cache work | Current stage |
| --- | --- | --- | --- |
| `all-you-need-is-kill` | 2026-10-14 | incremental-candidate | deployed |
| `apothecary-diaries-03.1` | 2026-11-13 | build-no-2026-cache | deployed |
| `avatar-seven-havens-01` | 2026-11-13 | build-no-2026-cache | deployed |
| `avatar-the-last-airbender-2024-02` | 2026-11-13 | incremental-candidate | caching |
| `backrooms-2026` | 2026-11-10 | incremental-candidate | deployed |
| `bass-x-machina-01` | 2026-11-13 | build-no-2026-cache | deployed |
| `bear-05` | 2026-11-13 | rebuild | deployed |
| `black-clover-02` | 2026-11-13 | build-no-2026-cache | deployed |
| `blue-box-201` | 2026-11-14 | build-no-2026-cache | deployed |
| `boys-501` | 2026-10-06 | incremental-candidate | deployed |
| `brothers-01` | 2026-11-13 | full-recache-count-increased | deployed |
| `coyote-vs-acme` | 2026-11-08 | full-recache-count-increased | deployed |
| `crew-girl-01` | 2026-11-11 | full-recache-count-increased | deployed |
| `cyberpunk-edgerunners-02` | 2026-11-09 | build-no-2026-cache | deployed |
| `dang-01` | 2026-11-10 | full-recache-count-increased | deployed |
| `diplomat-04` | 2026-11-05 | build-no-2026-cache | deployed |
| `drama-2026` | 2026-10-16 | incremental-candidate | deployed |
| `enola-holmes-3` | 2026-10-16 | incremental-candidate | ready |
| `euphoria-301` | 2026-10-11 | incremental-candidate | deployed |
| `fall-of-el-mayo-01` | 2026-11-13 | build-no-2026-cache | deployed |
| `furious-2025` | 2026-10-19 | full-recache-count-increased | ready |
| `get-jiro-106` | 2026-11-15 | build | deployed |
| `ghost-in-the-shell-2026-01` | 2026-11-09 | full-recache-count-increased | deployed |
| `hopeu-2026` | 2026-11-14 | build-no-2026-cache | deployed |
| `house-of-the-dragon-301` | 2026-11-15 | incremental-candidate | failed |
| `house-of-the-dragon-308` | 2026-11-15 | incremental-candidate | deployed |
| `invincible-101` | 2026-04-28 | build | failed |
| `invincible-201` | 2026-05-05 | build | failed |
| `invincible-301` | 2026-06-30 | extend | deployed |
| `invite-2026` | 2026-11-13 | incremental-candidate | deployed |
| `kill-jackie-01` | 2026-11-05 | build-no-2026-cache | deployed |
| `kung-fu-soccer-2026` | 2026-11-13 | extend | deployed |
| `lanterns-101` | 2026-11-08 | incremental-candidate | deployed |
| `legend-of-vox-machina-410` | 2026-10-21 | rebuild | deployed |
| `lego-star-wars-the-mandalorian-2026` | 2026-11-15 | full-recache-count-increased | deployed |
| `lowdown-201` | 2026-11-11 | build-no-2026-cache | deployed |
| `lupin-04` | 2026-11-13 | build-no-2026-cache | deployed |
| `mandalorian-and-grogu` | 2026-11-09 | full-recache-count-increased | failed |
| `monarch-legacy-of-monsters-208` | 2026-10-15 | incremental-candidate | deployed |
| `musk-2026` | 2026-11-13 | build-no-2026-cache | deployed |
| `my-brilliant-career-2026-01` | 2026-11-09 | full-recache-count-increased | deployed |
| `neagley-01` | 2026-11-11 | full-recache-count-increased | ready |
| `obsession-2025` | 2026-10-29 | full-recache-count-increased | deployed |
| `president-curtis-01` | 2026-11-13 | incremental-candidate | failed |
| `project-hail-mary` | 2026-11-08 | rebuild | deployed |
| `reacher-401` | 2026-11-13 | incremental-candidate | deployed |
| `resident-evil-2026` | 2026-11-13 | build-no-2026-cache | deployed |
| `season-2026-01` | 2026-10-10 | incremental-candidate | deployed |
| `send-help` | 2026-10-18 | incremental-candidate | deployed |
| `shards-101` | 2026-11-11 | incremental-candidate | deployed |
| `silo-301` | 2026-11-13 | incremental-candidate | deployed |
| `slow-horses-601` | 2026-10-24 | full-recache-count-increased | deployed |
| `spider-man-brand-new-day` | 2026-11-10 | build-no-2026-cache | ready |
| `spider-noir-01` | 2026-11-10 | full-recache-count-increased | failed |
| `star-wars-visions-the-ninth-jedi-01` | 2026-11-09 | incremental-candidate | deployed |
| `stranger-things-tales-from-85-02` | 2026-11-11 | full-recache-count-increased | deployed |
| `sugar-201` | 2026-10-08 | incremental-candidate | deployed |
| `super-mario-galaxy-movie` | 2026-11-10 | incremental-candidate | deployed |
| `toy-story-5` | 2026-11-10 | full-recache-count-increased | ready |
| `visionquest-101` | 2026-11-10 | build-no-2026-cache | deployed |
| `widows-bay-108` | 2026-10-31 | rebuild | deployed |
| `world-cup-2026` | 2026-11-10 | extend | deployed |
| `x-men-97-201` | 2026-11-11 | incremental-candidate | deployed |

[Machine-readable progress](year-2026-v8-progress.json) · [Results home](../index.html) · [Pages deployments](https://github.com/alpha60-devops/alpha60-results-2026/actions)
