---
layout: default
title: "November 2026 cache update progress"
---

# November 2026 cache update progress

Run `20261116-v8`. Sample cutoff: **2026-11-15**, America/Los_Angeles.

Last observation: **2026-11-16T21:35:35.199950+00:00**. This is a recorded heartbeat; refresh after the next publication.

**0 published, 63 remaining; 0.0% published.**

The input review covers 99 objects, including 36 predecessor objects without newly observed filenames. Existing published pages remain available while each update is validated.

| Stage | Objects |
| --- | ---: |
| inputs frozen | 96 |
| cache validated | 9 |
| bundle validated | 9 |
| installed | 0 |
| pushed | 0 |
| deployed | 0 |

`inputs frozen` counts the whole cohort; subsequent stages count this run’s update candidates.

| Worker | Observed activity |
| --- | --- |
| Eureka | Running: freeze-inputs. 173.7 GB free. |
| Ord | SSH command timed out; no new tasks assigned. |

## Current constraints

- Gold installation windows await the interactive disk/sudo credential setup. Input hashing and builds continue.
- Ord needs host/network recovery and usable scratch space before taking tasks.
- Get Jiro has an unresolved canonical season/episode mapping. New metadata records also require external identity review.
- Cache and page pilots must pass before production acceptance.

Finished objects are checked in individually after cache, page-bundle and storage verification. A pushed commit and a successful Pages deployment are recorded separately. Throughput and completion estimates will follow measured production pilots.

## Update candidates

| Media object | Source endpoint | Planned cache work | Current stage |
| --- | --- | --- | --- |
| `all-you-need-is-kill` | 2026-10-14 | incremental-candidate | bundle-validated |
| `apothecary-diaries-03.1` | 2026-11-13 | build-no-2026-cache | waiting for scratch capacity; estimated 233.1 GB plus 25.0 GB reserve |
| `avatar-seven-havens-01` | 2026-11-13 | build-no-2026-cache | waiting for scratch capacity; estimated 305.4 GB plus 25.0 GB reserve |
| `avatar-the-last-airbender-2024-02` | 2026-11-13 | incremental-candidate | inputs frozen; preparing worker |
| `backrooms-2026` | 2026-11-10 | incremental-candidate | inputs frozen; preparing worker |
| `bass-x-machina-01` | 2026-11-13 | build-no-2026-cache | bundle-validated |
| `bear-05` | 2026-11-13 | incremental-candidate | held: input freeze failed: invalid sample size/digest |
| `black-clover-02` | 2026-11-13 | build-no-2026-cache | waiting for scratch capacity; estimated 246.1 GB plus 25.0 GB reserve |
| `blue-box-201` | 2026-11-14 | build-no-2026-cache | bundle-validated |
| `boys-501` | 2026-10-06 | incremental-candidate | inputs frozen; preparing worker |
| `brothers-01` | 2026-11-13 | full-recache-count-increased | waiting for scratch capacity; estimated 206.0 GB plus 25.0 GB reserve |
| `coyote-vs-acme` | 2026-11-08 | full-recache-count-increased | waiting for scratch capacity; estimated 256.9 GB plus 25.0 GB reserve |
| `crew-girl-01` | 2026-11-11 | full-recache-count-increased | waiting for scratch capacity; estimated 370.5 GB plus 25.0 GB reserve |
| `cyberpunk-edgerunners-02` | 2026-11-09 | build-no-2026-cache | waiting for scratch capacity; estimated 303.5 GB plus 25.0 GB reserve |
| `dang-01` | 2026-11-10 | full-recache-count-increased | waiting for scratch capacity; estimated 292.0 GB plus 25.0 GB reserve |
| `diplomat-04` | 2026-11-05 | build-no-2026-cache | waiting for scratch capacity; estimated 161.1 GB plus 25.0 GB reserve |
| `drama-2026` | 2026-10-16 | incremental-candidate | inputs frozen; preparing worker |
| `enola-holmes-3` | 2026-10-16 | incremental-candidate | inputs frozen; preparing worker |
| `euphoria-301` | 2026-10-11 | incremental-candidate | inputs frozen; preparing worker |
| `fall-of-el-mayo-01` | 2026-11-13 | build-no-2026-cache | bundle-validated |
| `furious-2025` | 2026-10-19 | full-recache-count-increased | waiting for scratch capacity; estimated 576.0 GB plus 25.0 GB reserve |
| `get-jiro-01` | 2026-11-15 | resolve-torrent-definition | identity resolution |
| `ghost-in-the-shell-2026-01` | 2026-11-09 | full-recache-count-increased | waiting for scratch capacity; estimated 1731.0 GB plus 25.0 GB reserve |
| `hopeu-2026` | 2026-11-14 | build-no-2026-cache | bundle-validated |
| `house-of-the-dragon-301` | 2026-11-15 | incremental-candidate | inputs frozen; preparing worker |
| `house-of-the-dragon-308` | 2026-11-15 | incremental-candidate | inputs frozen; preparing worker |
| `invincible-101` | 2026-04-28 | build-no-2026-cache | held: explicit annual continuation and historical cache layout review |
| `invincible-201` | 2026-05-05 | build-no-2026-cache | held: explicit annual continuation and historical cache layout review |
| `invincible-301` | 2026-06-30 | inspect-latest-cache-day | held: newer Eureka archive requires adoption review |
| `invite-2026` | 2026-11-13 | incremental-candidate | inputs frozen; preparing worker |
| `kill-jackie-01` | 2026-11-05 | build-no-2026-cache | waiting for scratch capacity; estimated 201.8 GB plus 25.0 GB reserve |
| `kung-fu-soccer-2026` | 2026-11-13 | inspect-latest-cache-day | held: newer Gold cache requires adoption review |
| `lanterns-101` | 2026-11-08 | incremental-candidate | inputs frozen; preparing worker |
| `legend-of-vox-machina-410` | 2026-10-21 | incremental-candidate | inputs frozen; preparing worker |
| `lego-star-wars-the-mandalorian-2026` | 2026-11-15 | full-recache-count-increased | bundle-validated |
| `lowdown-201` | 2026-11-11 | build-no-2026-cache | bundle-validated |
| `lupin-04` | 2026-11-13 | build-no-2026-cache | waiting for scratch capacity; estimated 154.1 GB plus 25.0 GB reserve |
| `mandalorian-and-grogu` | 2026-11-09 | full-recache-count-increased | waiting for scratch capacity; estimated 1956.0 GB plus 25.0 GB reserve |
| `monarch-legacy-of-monsters-208` | 2026-10-15 | incremental-candidate | inputs frozen; preparing worker |
| `musk-2026` | 2026-11-13 | build-no-2026-cache | bundle-validated |
| `my-brilliant-career-2026-01` | 2026-11-09 | full-recache-count-increased | waiting for scratch capacity; estimated 245.8 GB plus 25.0 GB reserve |
| `neagley-01` | 2026-11-11 | full-recache-count-increased | waiting for scratch capacity; estimated 593.6 GB plus 25.0 GB reserve |
| `obsession-2025` | 2026-10-29 | full-recache-count-increased | waiting for scratch capacity; estimated 1193.1 GB plus 25.0 GB reserve |
| `president-curtis-01` | 2026-11-13 | incremental-candidate | inputs frozen; preparing worker |
| `project-hail-mary` | 2026-11-08 | resolve-count-decreased | held: reduced canonical member count requires scope review |
| `reacher-401` | 2026-11-13 | incremental-candidate | inputs frozen; preparing worker |
| `resident-evil-2026` | 2026-11-13 | build-no-2026-cache | bundle-validated |
| `season-2026-01` | 2026-10-10 | incremental-candidate | inputs frozen; preparing worker |
| `send-help` | 2026-10-18 | incremental-candidate | inputs frozen; preparing worker |
| `shards-101` | 2026-11-11 | incremental-candidate | inputs frozen; preparing worker |
| `silo-301` | 2026-11-13 | incremental-candidate | inputs frozen; preparing worker |
| `slow-horses-601` | 2026-10-24 | full-recache-count-increased | waiting for scratch capacity; estimated 193.5 GB plus 25.0 GB reserve |
| `spider-man-brand-new-day` | 2026-11-10 | build-no-2026-cache | waiting for scratch capacity; estimated 784.0 GB plus 25.0 GB reserve |
| `spider-noir-01` | 2026-11-10 | full-recache-count-increased | waiting for scratch capacity; estimated 3085.0 GB plus 25.0 GB reserve |
| `star-wars-visions-the-ninth-jedi-01` | 2026-11-09 | incremental-candidate | inputs frozen; preparing worker |
| `stranger-things-tales-from-85-02` | 2026-11-11 | full-recache-count-increased | waiting for scratch capacity; estimated 385.4 GB plus 25.0 GB reserve |
| `sugar-201` | 2026-10-08 | incremental-candidate | inputs frozen; preparing worker |
| `super-mario-galaxy-movie` | 2026-11-10 | incremental-candidate | inputs frozen; preparing worker |
| `toy-story-5` | 2026-11-10 | full-recache-count-increased | waiting for scratch capacity; estimated 584.6 GB plus 25.0 GB reserve |
| `visionquest-101` | 2026-11-10 | build-no-2026-cache | waiting for scratch capacity; estimated 206.9 GB plus 25.0 GB reserve |
| `widows-bay-108` | 2026-10-31 | full-recache-count-increased | held: XZ input inventory failed: xz: /mnt/gold/src/alpha60-samples-raw.gold/widows-bay-108.xz/2026-10-31-at-13-01.tar.xz: Compressed data is corrupt |
| `world-cup-2026` | 2026-11-10 | inspect-latest-cache-day | held: newer Gold cache requires adoption review |
| `x-men-97-201` | 2026-11-11 | incremental-candidate | inputs frozen; preparing worker |

[Machine-readable progress](year-2026-v8-progress.json) · [Results home](../index.html) · [Pages deployments](https://github.com/alpha60-devops/alpha60-results-2026/actions)
