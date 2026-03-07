---
id: meshtastic-mqtt
title: Meshtastic MQTT Server
sidebar_label: Meshtastic MQTT
---

# Meshtastic MQTT Server

Greater Boston Mesh runs a Meshtastic MQTT broker for map/telemetry uplink.

Use this broker:

- **Hostname:** `mqttmt01.bostonme.sh`
- **Port:** `1883`
- **Protocol:** MQTT (`tcp://`, no TLS on this listener)
- **Authentication:** Username/password required
- **Uplink targets:**  
  - [Meshtastic Map](https://meshtastic.liamcottle.net/)  
  - [MeshMap.net](https://meshmap.net/)

Configure your node to talk to **`mqttmt01.bostonme.sh`** and the broker handles uplink to those map backends.

:::info
Radio-level security (channels/encryption) is still handled by Meshtastic.
:::

---

## Broker Behavior

The broker at `mqttmt01.bostonme.sh` is configured to:

- Accept connections from Meshtastic nodes with valid credentials.
- Uplink packets under the **`msh/US/MA`** root topic to:
  - [Meshtastic Map](https://meshtastic.liamcottle.net/)
  - [MeshMap.net](https://meshmap.net/)
- Not provide MQTT-to-RF downlink into the local mesh.

This keeps traffic local on RF while still providing public visualization.

---

## Recommended Node Settings

On your Meshtastic node (app/web/CLI), use the following values.

### MQTT

Under **MQTT**:

- **MQTT > Enabled:** `ON`  
- **MQTT > Encryption Enabled:** `ON`  
  This is Meshtastic packet encryption (separate from TLS transport).
- **MQTT > Map Report:** `OFF`  
  Uplink is handled by the broker.
- **MQTT > Root Topic:** `msh/US/MA`  
  Required for Massachusetts uplink routing.
- **MQTT > Address:** `mqttmt01.bostonme.sh`  
- **MQTT > Username:** `meshdev`  
- **MQTT > Password:** `large4cats`  
- **MQTT > TLS Enabled:** `OFF`  
  This listener is plain MQTT on `1883`.

---

### Channel (Primary)

Under **Channels** → **Primary Channel**:

- **Positions Enabled:** `ON`
- **Approximate Location:** set to your preferred privacy level
- **MQTT Uplink:** `ON`  
- **MQTT Downlink:** `OFF`  
  Keep off to avoid internet-to-RF traffic injection.

---

### Modules

Under **Settings** → **Modules**:

- **Neighbor Info:** `ON`  

---

### LoRa

Under **LoRa**:

- **Ok to MQTT:** `ON`

---

## Result

With these settings:
- Your node publishes to `mqttmt01.bostonme.sh`
- Packets are uplinked to Meshtastic map services
- RF traffic remains local while map visibility is preserved

---

## Troubleshooting

If your node is not appearing on the map:

1. Verify MQTT is enabled with:
   - Address: `mqttmt01.bostonme.sh`
   - Root topic: `msh/US/MA`
   - Username/password set
2. Confirm `MQTT Uplink` is ON and `MQTT Downlink` is OFF on the primary channel.
3. Check approximate-location settings if map position looks too blurred.
4. Reboot the node after changing MQTT settings.

If the problem persists, reach out to the Boston Mesh maintainers with your node’s **ID** and **approximate location** so we can check the MQTT broker logs and map uplink status.
