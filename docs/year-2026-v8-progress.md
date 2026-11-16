---
layout: default
title: "November 2026 cache update progress"
---

# November 2026 cache update progress

Run `20261116-v8`. Sample cutoff: **2026-11-15**, America/Los_Angeles.

Last observation: **2026-11-16T18:46:39.660539+00:00**. This is a recorded heartbeat; refresh after the next publication.

**0 published, 63 remaining; 0.0% published.**

The input review covers 99 objects, including 36 predecessor objects without newly observed filenames. Existing published pages remain available while each update is validated.

| Stage | Objects |
| --- | ---: |
| inputs frozen | 17 |
| cache validated | 0 |
| bundle validated | 0 |
| installed | 0 |
| pushed | 0 |
| deployed | 0 |

`inputs frozen` counts the whole cohort; subsequent stages count this run’s update candidates.

| Worker | Observed activity |
| --- | --- |
| Eureka | Freezing input hashes and building pinned production tools; 178.0 GB of verified redundant local archives reclaimed. |
| Ord | Unreachable on LAN and direct link; no tasks assigned. |

## Current constraints

- Gold installation windows await the interactive disk/sudo credential setup. Input hashing and builds continue.
- Ord needs host/network recovery and usable scratch space before taking tasks.
- Get Jiro has an unresolved canonical season/episode mapping. New metadata records also require external identity review.
- Cache and page pilots must pass before production acceptance.

Finished objects are checked in individually after cache, page-bundle and storage verification. A pushed commit and a successful Pages deployment are recorded separately. Throughput and completion estimates will follow measured production pilots.

## Update candidates

| Media object | Planned cache work | Current stage |
| --- | --- | --- |
| `all-you-need-is-kill` | incremental-candidate | inputs frozen; preparing worker |
| `apothecary-diaries-03.1` | build-no-2026-cache | freezing inputs |
| `avatar-seven-havens-01` | build-no-2026-cache | freezing inputs |
| `avatar-the-last-airbender-2024-02` | incremental-candidate | freezing inputs |
| `backrooms-2026` | incremental-candidate | freezing inputs |
| `bass-x-machina-01` | build-no-2026-cache | inputs frozen; preparing worker |
| `bear-05` | incremental-candidate | freezing inputs |
| `black-clover-02` | build-no-2026-cache | freezing inputs |
| `blue-box-201` | build-no-2026-cache | inputs frozen; preparing worker |
| `boys-501` | incremental-candidate | freezing inputs |
| `brothers-01` | full-recache-count-increased | inputs frozen; preparing worker |
| `coyote-vs-acme` | full-recache-count-increased | freezing inputs |
| `crew-girl-01` | full-recache-count-increased | freezing inputs |
| `cyberpunk-edgerunners-02` | build-no-2026-cache | freezing inputs |
| `dang-01` | full-recache-count-increased | freezing inputs |
| `diplomat-04` | build-no-2026-cache | inputs frozen; preparing worker |
| `drama-2026` | incremental-candidate | inputs frozen; preparing worker |
| `enola-holmes-3` | incremental-candidate | freezing inputs |
| `euphoria-301` | incremental-candidate | freezing inputs |
| `fall-of-el-mayo-01` | build-no-2026-cache | inputs frozen; preparing worker |
| `furious-2025` | full-recache-count-increased | freezing inputs |
| `get-jiro-01` | resolve-torrent-definition | identity resolution |
| `ghost-in-the-shell-2026-01` | full-recache-count-increased | freezing inputs |
| `hopeu-2026` | build-no-2026-cache | inputs frozen; preparing worker |
| `house-of-the-dragon-301` | incremental-candidate | freezing inputs |
| `house-of-the-dragon-308` | incremental-candidate | freezing inputs |
| `invincible-101` | build-no-2026-cache | freezing inputs |
| `invincible-201` | build-no-2026-cache | freezing inputs |
| `invincible-301` | inspect-latest-cache-day | freezing inputs |
| `invite-2026` | incremental-candidate | freezing inputs |
| `kill-jackie-01` | build-no-2026-cache | inputs frozen; preparing worker |
| `kung-fu-soccer-2026` | inspect-latest-cache-day | inputs frozen; preparing worker |
| `lanterns-101` | incremental-candidate | freezing inputs |
| `legend-of-vox-machina-410` | incremental-candidate | freezing inputs |
| `lego-star-wars-the-mandalorian-2026` | full-recache-count-increased | inputs frozen; preparing worker |
| `lowdown-201` | build-no-2026-cache | inputs frozen; preparing worker |
| `lupin-04` | build-no-2026-cache | inputs frozen; preparing worker |
| `mandalorian-and-grogu` | full-recache-count-increased | freezing inputs |
| `monarch-legacy-of-monsters-208` | incremental-candidate | freezing inputs |
| `musk-2026` | build-no-2026-cache | inputs frozen; preparing worker |
| `my-brilliant-career-2026-01` | full-recache-count-increased | inputs frozen; preparing worker |
| `neagley-01` | full-recache-count-increased | freezing inputs |
| `obsession-2025` | full-recache-count-increased | freezing inputs |
| `president-curtis-01` | incremental-candidate | freezing inputs |
| `project-hail-mary` | resolve-count-decreased | freezing inputs |
| `reacher-401` | incremental-candidate | freezing inputs |
| `resident-evil-2026` | build-no-2026-cache | inputs frozen; preparing worker |
| `season-2026-01` | incremental-candidate | freezing inputs |
| `send-help` | incremental-candidate | freezing inputs |
| `shards-101` | incremental-candidate | freezing inputs |
| `silo-301` | incremental-candidate | freezing inputs |
| `slow-horses-601` | full-recache-count-increased | freezing inputs |
| `spider-man-brand-new-day` | build-no-2026-cache | freezing inputs |
| `spider-noir-01` | full-recache-count-increased | freezing inputs |
| `star-wars-visions-the-ninth-jedi-01` | incremental-candidate | freezing inputs |
| `stranger-things-tales-from-85-02` | full-recache-count-increased | freezing inputs |
| `sugar-201` | incremental-candidate | freezing inputs |
| `super-mario-galaxy-movie` | incremental-candidate | freezing inputs |
| `toy-story-5` | full-recache-count-increased | freezing inputs |
| `visionquest-101` | build-no-2026-cache | freezing inputs |
| `widows-bay-108` | full-recache-count-increased | freezing inputs |
| `world-cup-2026` | inspect-latest-cache-day | freezing inputs |
| `x-men-97-201` | incremental-candidate | freezing inputs |

[Machine-readable progress](year-2026-v8-progress.json) · [Results home](../index.html) · [Pages deployments](https://github.com/alpha60-devops/alpha60-results-2026/actions)
