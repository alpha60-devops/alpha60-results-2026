---
layout: default
title: "November 2026 cache update progress"
---

# November 2026 cache update progress

Run `20261116-v8`. Sample cutoff: **2026-11-15**, America/Los_Angeles.

Last observation: **2026-11-20T08:58:48.302641+00:00**. This is a recorded heartbeat; refresh after the next publication.

**58 complete, 3 remaining; 95.1% complete.**

2 objects are outside the 2026 update scope because Gold has no 2026 samples for them.

The input review covers 99 objects, including 36 predecessor objects without newly observed filenames. Existing published pages remain available while each update is validated.

| Stage | Objects |
| --- | ---: |
| inputs frozen | 98 |
| cache validated | 59 |
| bundle validated | 59 |
| installed | 58 |
| pushed | 58 |
| deployed | 58 |

First-pass coverage: **63 attempted, 0 not started**; 59 validated bundles in total, including 1 awaiting Gold installation. 2 individual errors are deferred to the second pass.

Complete means Gold installation/readback and deployed Pages verification. First-pass production can advance while that acceptance count stays unchanged.

`inputs frozen` counts the whole cohort; subsequent stages count this run’s update candidates.

| Worker | Observed activity |
| --- | --- |
| Eureka | Running: prepare-admissions. 428.5 GB free. |
| Ord | Pinned runtime verified. 1113.3 GB free; 578 stored local cache archives retired; Gold is the retained cache source. |

Incremental updates reuse verified hourly caches and extract new or affected sample hours. Full-history comparison is optional. Each finished canonical Gold archive contains hour, day, week and cumulative results.

## Current constraints

- Individual object errors are recorded; other eligible work continues. Individual errors deferred; pass 2 work continues

Finished objects are checked in individually after cache, page-bundle and storage verification. A pushed commit and a successful Pages deployment are recorded separately. Throughput and completion estimates will follow measured production pilots.

## Update candidates

| Media object | Source endpoint | Planned cache work | Current stage |
| --- | --- | --- | --- |
| `all-you-need-is-kill` | 2026-10-14 | incremental-candidate | deployed |
| `apothecary-diaries-03.1` | 2026-11-13 | build-no-2026-cache | deployed |
| `avatar-seven-havens-01` | 2026-11-13 | build-no-2026-cache | deployed |
| `avatar-the-last-airbender-2024-02` | 2026-11-13 | incremental-candidate | deployed |
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
| `enola-holmes-3` | 2026-10-16 | incremental-candidate | deployed |
| `euphoria-301` | 2026-10-11 | incremental-candidate | deployed |
| `fall-of-el-mayo-01` | 2026-11-13 | build-no-2026-cache | deployed |
| `furious-2025` | 2026-10-19 | full-recache-count-increased | deployed |
| `get-jiro-106` | 2026-11-15 | build | deployed |
| `ghost-in-the-shell-2026-01` | 2026-11-09 | full-recache-count-increased | deployed |
| `hopeu-2026` | 2026-11-14 | build-no-2026-cache | deployed |
| `house-of-the-dragon-301` | 2026-11-15 | incremental-candidate | bundle-validated |
| `house-of-the-dragon-308` | 2026-11-15 | incremental-candidate | deployed |
| `invincible-101` | none in 2026 | build | excluded: no 2026 samples |
| `invincible-201` | none in 2026 | build | excluded: no 2026 samples |
| `invincible-301` | 2026-06-30 | extend | deployed |
| `invite-2026` | 2026-11-13 | incremental-candidate | deployed |
| `kill-jackie-01` | 2026-11-05 | build-no-2026-cache | deployed |
| `kung-fu-soccer-2026` | 2026-11-13 | extend | deployed |
| `lanterns-101` | 2026-11-08 | incremental-candidate | deployed |
| `legend-of-vox-machina-410` | 2026-10-21 | rebuild | deployed |
| `lego-star-wars-the-mandalorian-2026` | 2026-11-15 | full-recache-count-increased | deployed |
| `lowdown-201` | 2026-11-11 | build-no-2026-cache | deployed |
| `lupin-04` | 2026-11-13 | build-no-2026-cache | deployed |
| `mandalorian-and-grogu` | 2026-11-09 | full-recache-count-increased | deployed |
| `monarch-legacy-of-monsters-208` | 2026-10-15 | incremental-candidate | deployed |
| `musk-2026` | 2026-11-13 | build-no-2026-cache | deployed |
| `my-brilliant-career-2026-01` | 2026-11-09 | full-recache-count-increased | deployed |
| `neagley-01` | 2026-11-11 | full-recache-count-increased | deployed |
| `obsession-2025` | 2026-10-29 | full-recache-count-increased | deployed |
| `president-curtis-101` | 2026-11-16 | full-recache | deployed |
| `project-hail-mary` | 2026-11-08 | rebuild | deployed |
| `reacher-401` | 2026-11-13 | incremental-candidate | deployed |
| `resident-evil-2026` | 2026-11-13 | build-no-2026-cache | deployed |
| `season-2026-01` | 2026-10-10 | incremental-candidate | deployed |
| `send-help` | 2026-10-18 | incremental-candidate | deployed |
| `shards-101` | 2026-11-11 | incremental-candidate | deployed |
| `silo-301` | 2026-11-13 | incremental-candidate | deployed |
| `slow-horses-601` | 2026-10-24 | full-recache-count-increased | deployed |
| `spider-man-brand-new-day` | 2026-11-10 | build-no-2026-cache | failed |
| `spider-noir-01` | 2026-11-10 | full-recache-count-increased | failed |
| `star-wars-visions-the-ninth-jedi-01` | 2026-11-09 | incremental-candidate | deployed |
| `stranger-things-tales-from-85-02` | 2026-11-11 | full-recache-count-increased | deployed |
| `sugar-201` | 2026-10-08 | incremental-candidate | deployed |
| `super-mario-galaxy-movie` | 2026-11-10 | incremental-candidate | deployed |
| `toy-story-5` | 2026-11-10 | full-recache-count-increased | deployed |
| `visionquest-101` | 2026-11-10 | build-no-2026-cache | deployed |
| `widows-bay-108` | 2026-10-31 | rebuild | deployed |
| `world-cup-2026` | 2026-11-10 | extend | deployed |
| `x-men-97-201` | 2026-11-11 | incremental-candidate | deployed |

[Machine-readable progress](year-2026-v8-progress.json) · [Results home](../index.html) · [Pages deployments](https://github.com/alpha60-devops/alpha60-results-2026/actions)
