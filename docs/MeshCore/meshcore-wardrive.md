---
id: meshcore-wardrive
title: MeshCore Wardrive
sidebar_label: Meshcore Wardrive
---

# Contributing to the MeshCore Coverage Map

The **[MeshCore Coverage Map](https://coveragemap.bostonme.sh/)** is a crowd-sourced visualization of repeater coverage in the MeshCore mesh network.

It’s built from real-world “can I reach the mesh from here?” pings, submitted by community members while moving around (walking, driving, biking, etc.).

---

## Map legend

- **Green dot**: the mesh was reachable at that location (visible for 1 day)
- **Red dot**: the mesh was *not* reachable at that location (visible for 1 day)
- **Green box**: the mesh was reachable in that region
- **Red box**: the mesh was *not* reachable in that region
- **Dashed line**: links a green dot/box to its 1st hop repeater(s)
- **Blue dot**: repeater with an advert in the past 1 day
- **Light gray dot**: repeater with an advert in the past 5 days
- **Dark gray dot**: repeater without an advert in the past 5 days

## How it works

Coverage points are created when your location gets sent to **`#wardrive`** in the format:

`lat.xxxx lon.yyyy`

If a repeater in your mesh network hears it, the bot can add a point to the map indicating whether you could reach the mesh from that spot.  

To also log “misses” (places you *can’t* reach the mesh), use the Wardrive web app, which automates pings and reports both hits and misses.

### MQTT observers (Greater Boston)

Greater Boston currently uses **LetsMesh MQTT Observers**:

- `https://letsme.sh/ - 01`
- `https://letsme.sh/ - 02`

For your coverage points to appear, your `#wardrive` messages must be observed (seen) by the network.

## The easiest way to contribute: the Wardrive web app

Use the **[MeshCore Wardrive app](https://coveragemap.bostonme.sh/wardrive)** on your phone. It connects to your companion radio over BLE and can:

- Send **single pings** on demand.
- Run **Auto Ping** that sends a ping when needed (preferred).
- Report both **reachability** and **non-reachability** so the map fills in faster and more accurately.

## Recommended mode
Use **Fill Missing Tiles** mode. It checks periodically whether your current coverage tile needs an update and only pings when needed. This reduces duplicates and helps the map improve faster.

## Using the Wardrive app

### Quick start

1. Open **https://coveragemap.bostonme.sh/wardrive**
2. Allow **Bluetooth** + **Location** permissions when prompted
3. Click **Connect via BLE** and select your companion radio
4. Use one of:
   - **Send 1 Ping** (manual)
   - **Start Auto Ping** (best for wardriving)

---

### Important notes

- Your companion radio must have the **`#wardrive`** channel (the app can help with that).
- **Safari is not supported.**
  - On macOS: use **Chrome** or **Edge**
  - On iOS: use [Bluefy (Web BLE Browser)](https://apps.apple.com/us/app/bluefy-web-ble-browser/id1492822055)
- **BLE only allows one connection at a time**, so you must disconnect from the MeshCore app before connecting in the Wardrive app.
- If you use Auto Ping, keep the page **in the foreground** with the screen **on and unlocked**.

**Don’t spam the mesh**
The mesh is a shared resource. Please be judicious with pings and avoid creating unnecessary duplicates.

---

### If you’re using a mobile repeater (car-peater)

If your wardriving setup includes a **mobile repeater**, use the app’s **Ignore Repeater ID** feature to exclude it from the path. Otherwise, the coverage paths can become misleading.

## Privacy

The service stores only:

- The **location** you send to `#wardrive`
- The **ID of the 1st hop repeater**

The Wardrive web app sends your location to `#wardrive` **and** to the service. Logging in the web app is stored **locally** on your device.

**Public channel reminder**
Your companion radio’s name is sent along with your location to `#wardrive`, which is a public channel.
