---
id: meshcore-mqtt
title: MeshCore MQTT Server
sidebar_label: Meshcore MQTT
---
# MeshCore MQTT Server

Greater Boston Mesh runs its own MQTT server to populate our **[MeshMapper Coverage Map](https://bos.meshmapper.net/)** and **[Live Packet Map](https://live.bostonme.sh/)**.

The coverage map requires coverage verification via MQTT, so if you are not connected to the Greater Boston Mesh, you’ll need to connect your node to the MQTT server.

There are three supported push-agent options. Pick the one that matches how you connect to your node:

- [MeshCore-to-MQTT (repeater/roomserver style):](https://github.com/Cisien/meshcoretomqtt)
- [MeshCore Packet Capture (companion):](https://github.com/agessaman/meshcore-packet-capture)
- [MeshCore HA Add-on (Home Assistant):](https://meshcore-dev.github.io/meshcore-ha/docs/ha/mqtt)

Use these broker settings:

- **Broker:** `mqttmc01.bostonme.sh`  
- **Port:** `443`
- **TLS:** `true`
- **Verify TLS Certificate:** `true`
- **Transport:** WebSockets  
- **Authentication:** Auth token enabled  - [Meshcore-decoder](https://github.com/michaelhart/meshcore-decoder)
- **Token audience:** `mqttmc01.bostonme.sh`

You can confirm whether your node is showing up on our MQTT infrastructure here:

- **MQTT Dashboard:** https://mcmqttdashboard.bostonme.sh/

---

# LetsMesh MeshCore Packet Analyzer

You can also upload your packets to the **[LetsMesh MeshCore Packet Analyzer](https://analyzer.letsmesh.net/)**.

Greater Boston Mesh's MQTT server **does not** automatically upload your traffic to LetsMesh.

If you want packets to appear on LetsMesh, you must add LetsMesh as an additional broker/output in your push-agent configuration, alongside the Greater Boston Mesh broker settings above.

When configuring LetsMesh, set the **IATA code to `BOS`**.

This site shows **live packets by region**, so to view Greater Boston Mesh traffic you’ll want to select the **`BOS`** region. It’s a super handy “sanity check” for range, because it helps answer the big question:

**Did my message get heard by the greater mesh… or only by my local node/nearby neighbors?**

If you see your packets appearing in the feed, that’s strong proof your transmissions are making it out into the wider MeshCore ecosystem, not just echoing around locally.
