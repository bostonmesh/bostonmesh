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
