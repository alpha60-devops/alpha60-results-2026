---
layout: default
title: "November 2026 cache update progress"
---

# November 2026 cache update progress

Run `20261116-v8`. Sample cutoff: **2026-11-15**, America/Los_Angeles.

Last observation: **2026-11-16T19:14:15.339415+00:00**. This is a recorded heartbeat; refresh after the next publication.

**0 published, 63 remaining; 0.0% published.**

The input review covers 99 objects, including 36 predecessor objects without newly observed filenames. Existing published pages remain available while each update is validated.

| Stage | Objects |
| --- | ---: |
| inputs frozen | 46 |
| cache validated | 1 |
| bundle validated | 1 |
| installed | 0 |
| pushed | 0 |
| deployed | 0 |

`inputs frozen` counts the whole cohort; subsequent stages count this run’s update candidates.

| Worker | Observed activity |
| --- | --- |
| Eureka | Running: freeze-inputs, eureka-all-you-need-is-kill-g1. 175.4 GB free. |
| Ord | Unreachable on the last command probe; no new tasks assigned. |

## Current constraints

- Gold installation windows await the interactive disk/sudo credential setup. Input hashing and builds continue.
- Ord needs host/network recovery and usable scratch space before taking tasks.
- Get Jiro has an unresolved canonical season/episode mapping. New metadata records also require external identity review.
- Cache and page pilots must pass before production acceptance.

Finished objects are checked in individually after cache, page-bundle and storage verification. A pushed commit and a successful Pages deployment are recorded separately. Throughput and completion estimates will follow measured production pilots.

## Update candidates

| Media object | Source endpoint | Planned cache work | Current stage |
| --- | --- | --- | --- |
| `all-you-need-is-kill` | 2026-10-14 | incremental-candidate | caching |
| `apothecary-diaries-03.1` | 2026-11-13 | build-no-2026-cache | inputs frozen; preparing worker |
| `avatar-seven-havens-01` | 2026-11-13 | build-no-2026-cache | inputs frozen; preparing worker |
| `avatar-the-last-airbender-2024-02` | 2026-11-13 | incremental-candidate | freezing inputs |
| `backrooms-2026` | 2026-11-10 | incremental-candidate | freezing inputs |
| `bass-x-machina-01` | 2026-11-13 | build-no-2026-cache | inputs frozen; preparing worker |
| `bear-05` | 2026-11-13 | incremental-candidate | freezing inputs |
| `black-clover-02` | 2026-11-13 | build-no-2026-cache | inputs frozen; preparing worker |
| `blue-box-201` | 2026-11-14 | build-no-2026-cache | inputs frozen; preparing worker |
| `boys-501` | 2026-10-06 | incremental-candidate | freezing inputs |
| `brothers-01` | 2026-11-13 | full-recache-count-increased | inputs frozen; preparing worker |
| `coyote-vs-acme` | 2026-11-08 | full-recache-count-increased | inputs frozen; preparing worker |
| `crew-girl-01` | 2026-11-11 | full-recache-count-increased | inputs frozen; preparing worker |
| `cyberpunk-edgerunners-02` | 2026-11-09 | build-no-2026-cache | inputs frozen; preparing worker |
| `dang-01` | 2026-11-10 | full-recache-count-increased | inputs frozen; preparing worker |
| `diplomat-04` | 2026-11-05 | build-no-2026-cache | inputs frozen; preparing worker |
| `drama-2026` | 2026-10-16 | incremental-candidate | inputs frozen; preparing worker |
| `enola-holmes-3` | 2026-10-16 | incremental-candidate | inputs frozen; preparing worker |
| `euphoria-301` | 2026-10-11 | incremental-candidate | freezing inputs |
| `fall-of-el-mayo-01` | 2026-11-13 | build-no-2026-cache | inputs frozen; preparing worker |
| `furious-2025` | 2026-10-19 | full-recache-count-increased | inputs frozen; preparing worker |
| `get-jiro-01` | 2026-11-15 | resolve-torrent-definition | identity resolution |
| `ghost-in-the-shell-2026-01` | 2026-11-09 | full-recache-count-increased | freezing inputs |
| `hopeu-2026` | 2026-11-14 | build-no-2026-cache | inputs frozen; preparing worker |
| `house-of-the-dragon-301` | 2026-11-15 | incremental-candidate | freezing inputs |
| `house-of-the-dragon-308` | 2026-11-15 | incremental-candidate | inputs frozen; preparing worker |
| `invincible-101` | 2026-04-28 | build-no-2026-cache | inputs frozen; preparing worker |
| `invincible-201` | 2026-05-05 | build-no-2026-cache | inputs frozen; preparing worker |
| `invincible-301` | 2026-06-30 | inspect-latest-cache-day | inputs frozen; preparing worker |
| `invite-2026` | 2026-11-13 | incremental-candidate | inputs frozen; preparing worker |
| `kill-jackie-01` | 2026-11-05 | build-no-2026-cache | inputs frozen; preparing worker |
| `kung-fu-soccer-2026` | 2026-11-13 | inspect-latest-cache-day | inputs frozen; preparing worker |
| `lanterns-101` | 2026-11-08 | incremental-candidate | inputs frozen; preparing worker |
| `legend-of-vox-machina-410` | 2026-10-21 | incremental-candidate | inputs frozen; preparing worker |
| `lego-star-wars-the-mandalorian-2026` | 2026-11-15 | full-recache-count-increased | inputs frozen; preparing worker |
| `lowdown-201` | 2026-11-11 | build-no-2026-cache | inputs frozen; preparing worker |
| `lupin-04` | 2026-11-13 | build-no-2026-cache | inputs frozen; preparing worker |
| `mandalorian-and-grogu` | 2026-11-09 | full-recache-count-increased | freezing inputs |
| `monarch-legacy-of-monsters-208` | 2026-10-15 | incremental-candidate | freezing inputs |
| `musk-2026` | 2026-11-13 | build-no-2026-cache | bundle-validated |
| `my-brilliant-career-2026-01` | 2026-11-09 | full-recache-count-increased | inputs frozen; preparing worker |
| `neagley-01` | 2026-11-11 | full-recache-count-increased | inputs frozen; preparing worker |
| `obsession-2025` | 2026-10-29 | full-recache-count-increased | freezing inputs |
| `president-curtis-01` | 2026-11-13 | incremental-candidate | inputs frozen; preparing worker |
| `project-hail-mary` | 2026-11-08 | resolve-count-decreased | freezing inputs |
| `reacher-401` | 2026-11-13 | incremental-candidate | inputs frozen; preparing worker |
| `resident-evil-2026` | 2026-11-13 | build-no-2026-cache | inputs frozen; preparing worker |
| `season-2026-01` | 2026-10-10 | incremental-candidate | inputs frozen; preparing worker |
| `send-help` | 2026-10-18 | incremental-candidate | freezing inputs |
| `shards-101` | 2026-11-11 | incremental-candidate | inputs frozen; preparing worker |
| `silo-301` | 2026-11-13 | incremental-candidate | freezing inputs |
| `slow-horses-601` | 2026-10-24 | full-recache-count-increased | inputs frozen; preparing worker |
| `spider-man-brand-new-day` | 2026-11-10 | build-no-2026-cache | inputs frozen; preparing worker |
| `spider-noir-01` | 2026-11-10 | full-recache-count-increased | freezing inputs |
| `star-wars-visions-the-ninth-jedi-01` | 2026-11-09 | incremental-candidate | inputs frozen; preparing worker |
| `stranger-things-tales-from-85-02` | 2026-11-11 | full-recache-count-increased | inputs frozen; preparing worker |
| `sugar-201` | 2026-10-08 | incremental-candidate | inputs frozen; preparing worker |
| `super-mario-galaxy-movie` | 2026-11-10 | incremental-candidate | freezing inputs |
| `toy-story-5` | 2026-11-10 | full-recache-count-increased | inputs frozen; preparing worker |
| `visionquest-101` | 2026-11-10 | build-no-2026-cache | inputs frozen; preparing worker |
| `widows-bay-108` | 2026-10-31 | full-recache-count-increased | freezing inputs |
| `world-cup-2026` | 2026-11-10 | inspect-latest-cache-day | freezing inputs |
| `x-men-97-201` | 2026-11-11 | incremental-candidate | inputs frozen; preparing worker |

[Machine-readable progress](year-2026-v8-progress.json) · [Results home](../index.html) · [Pages deployments](https://github.com/alpha60-devops/alpha60-results-2026/actions)
