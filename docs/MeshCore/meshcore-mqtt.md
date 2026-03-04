---
id: meshcore-mqtt
title: MeshCore MQTT Server
sidebar_label: Meshcore MQTT
---
# MeshCore MQTT Server

Greater Boston Mesh runs its own MQTT server to power our **[Live Packet Map](https://live.bostonme.sh/)** and local packet visibility tools.

To upload to the Greater Boston Mesh MQTT server, you can use the same LetsMesh onboarding flow and choose to add another/custom broker when prompted in the install script:

- LetsMesh Add Observer: https://analyzer.letsmesh.net/observer/onboard

Or use the direct GitHub tools below.

- [MeshCore-to-MQTT (Repeater/Room Server):](https://github.com/Cisien/meshcoretomqtt)
- [MeshCore Packet Capture (Companion):](https://github.com/agessaman/meshcore-packet-capture)
- [MeshCore HA Add-on (Companion via Home Assistant):](https://meshcore-dev.github.io/meshcore-ha/docs/ha/mqtt)

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
