---
id: meshcore-mqtt
title: Meshcore MQTT Server
sidebar_label: Meshcore MQTT
---
# MeshCore MQTT Server

Greater Boston Mesh runs its own MQTT server to populate our **[WarDrive Coverage Map](https://coveragemap.bostonme.sh/)** and **[Live Packet Map](https://live.bostonme.sh/)**.

The coverage map requires coverage verification via MQTT, so if you are not connected to the Greater Boston Mesh, you’ll need to connect your node to the MQTT server.

There are two supported push-agent projects. Pick the one that matches how you connect to your node:

- [MeshCore-to-MQTT (repeater/roomserver style):](https://github.com/Cisien/meshcoretomqtt)
- [MeshCore Packet Capture (companion):](https://github.com/agessaman/meshcore-packet-capture)

Use these broker settings:

- **Broker:** `mqttmc01.bostonme.sh`  
- **Port:** `443`
- **TSL:** `true`
- **Transport:** WebSockets  
- **Authentication:** Auth token enabled  - [Meshcore-decoder](https://github.com/michaelhart/meshcore-decoder)
- **Token audience:** `mqttmc01.bostonme.sh`

---

# LetsMesh MeshCore Packet Analyzer

You can also upload your packets to the **[LetsMesh MeshCore Packet Analyzer](https://analyzer.letsmesh.net/)**.

During setup with the software above, you’ll be asked if you want to upload to LetsMesh. **Say yes**, and set the **IATA code to `BOS`**. After that, it will ask if you’d also like to upload to a **custom MQTT server** (that’s where you’d enter the Greater Boston Mesh broker settings from above).

This site shows **live packets by region**, so to view Greater Boston Mesh traffic you’ll want to select the **`BOS`** region. It’s a super handy “sanity check” for range, because it helps answer the big question:

**Did my message get heard by the greater mesh… or only by my local node/nearby neighbors?**

If you see your packets appearing in the feed, that’s strong proof your transmissions are making it out into the wider MeshCore ecosystem, not just echoing around locally.


