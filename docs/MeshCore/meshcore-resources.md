---
id: meshcore-resources
title: MeshCore Resources
sidebar_label: MeshCore Resources
---

# MeshCore Resources

Here are the main links we reference most often across **Greater Boston Mesh** for MeshCore.

## MeshCore Resources

The official MeshCore site and documentation are the best places to start for core guides and project updates.

* **MeshCore:** https://meshcore.dev/
* **GitHub Docs:** https://github.com/meshcore-dev/MeshCore/tree/main/docs
* **Repeater & Room Server CLI Reference:** https://github.com/meshcore-dev/MeshCore/wiki/Repeater-&-Room-Server-CLI-Reference

Start there for installation steps, configuration details, and CLI usage before exploring community tools or custom builds.

---

## Firmware

This is where you’ll find the **officialMeshCore firmware** and the easiest way to flash it onto supported hardware. It’s typically the fastest path from “new board” to “on the air.”

- MeshCore Flasher: https://flasher.meshcore.dev/

### Easy SkyMesh Custom Firmware

In Boston, many of us are running IoTThinks’ custom MeshCore firmware (Easy SkyMesh), which helps improve power savings on repeaters.

- IoTThinks Repo: https://github.com/IoTThinks/EasySkyMesh

### WiFi Companion Firmware

This firmware is used to make your node connect to WiFi.

When flashing, you enter the WiFi SSID and password directly on the flasher page. The credentials are embedded during the flash process so the device can join your network on first boot.

* Flasher Page: [https://weyes.de/mcwcp](https://weyes.de/mcwcp)

---

## LetsMesh Analyzer

A real-time packet and reliability analysis tool for the MeshCore network. It helps repeater owners monitor health, spot abuse/bugs, and improve overall reliability using data collected from MQTT-connected observer nodes.

- LetsMesh Analyzer: https://analyzer.letsmesh.net/packets?region=BOS

---

## Live Map (Greater Boston Mesh)

Our live map is the quickest way to see active nodes, recent activity, and overall mesh health in near real time. Created by a local resident [Yellowcooln](https://github.com/yellowcooln).

- Live Map: https://live.bostonme.sh/

---

## Wardriving

### Coverage Map: Primary Method

Our [self-hosted coverage map](https://github.com/nullrouten0/meshcore-coverage-map) focuses on **RF coverage and reach**. Use this when you want a “where does this node actually get out?” view, or when planning new repeater locations.

Want to contribute coverage data? See our wardriving guide:

- Wardriving How-To: https://bostonme.sh/docs/MeshCore/meshcore-wardrive
- Coverage Map: https://coveragemap.bostonme.sh/

### Wardriving App (Android)

This [Android-only wardriving app](https://github.com/mintylinux/Meshcore-Wardrive-Android) records MeshCore reception data and stores it **locally on your phone first**. It’s a great way to test **node placement and RF coverage** (what your device can hear in different locations), not whether the entire network can hear your message.

Uploading is **optional**, but we host a coverage site so users can upload their samples if they’d like. 

- Coverage Map: https://coveragemap2.bostonme.sh/
- Upload URL:
```
https://coveragemap2.bostonme.sh/api/samples
```

### MeshMapper

[MeshMapper](https://wiki.meshmapper.net/) is another visualization and exploration tool that’s great for browsing node placement and coverage patterns.

- MeshMapper: https://bos.meshmapper.net/

## More resources

For a more intensive, community-curated list of MeshCore tools, docs, and projects, check out:

- https://github.com/samuk/awesome-meshcore
