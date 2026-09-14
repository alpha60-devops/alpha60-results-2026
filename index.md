---
layout: default
title: "Alpha60 Swarm Results 2026"
author: "Benjamin De Kosnik <bkoz@gnu.org>"
description: "Analysis of peer-to-peer distribution"
---

{::nomarkdown}
<img src="resources/a60-logo-block-gray.simple.svg?sanitize=true" height="50" width="100">

<div style="height: 50px;"></div>
{:/}

## About

These are results from sampling peer swarms associated with *media objects*
being *shared* on the internet. Here, *media objects* are specific films,
television series or episodes, recorded events, and other media distributed as
files or archives. *Sharing* refers to peer-to-peer distribution over
BitTorrent. This is part of the long-term [Alpha60](https://alpha60.co/)
project.

## Results, Commentary

The 2026 aggregate campaign contains 71 media-object cache audits.

{% assign media_pages = site.pages | where_exp: "page", "page.path contains 'docs/itemized/'" | sort: "title" %}
{% for page in media_pages %}
- [{{ page.title }}]({{ page.url | relative_url }})
{% endfor %}
