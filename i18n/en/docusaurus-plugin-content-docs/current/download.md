---
title: "Install and update"
---

## Version 2.0 requirements

| Component | Version |
|---|---|
| Minecraft | 1.21.1 |
| Fabric Loader | 0.15.0 or later |
| Cobblemon | 1.8.2 or later |
| RCT API | 0.16.2-beta or later |
| RCT Mod | Compatible; inspected reference: 0.19.2 |
| Mega Showdown and ZA Mega | Required for team items and Megas |

## Installation

1. Back up your world before updating.
2. Install compatible dependencies in your Fabric instance.
3. Put the campaign JAR in `mods` on both server and clients.
4. Remove the previous campaign JAR to avoid duplicate mod IDs.
5. Restart the instances.

[Published releases on Modrinth](https://modrinth.com/mod/toca-da-coruja-campanha)

## About this reference

This wiki describes the local 2.0.0 candidate, which is not confirmation of a published Modrinth release. Package and data checks passed; Minecraft battles and dialogue display still require testing.

## Missing dialogue

Update both clients and server. RCT can show dialogue in speech bubbles, chat or both. Check `showMessagesAsSpeechBubble` and `showMessagesInChat`.
