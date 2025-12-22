---
id: meshtcore-wardrive
title: Meshcore Wardrive
sidebar_label: Meshcore Wardrive
---

# Meshcore Wardrive

MeshCore wardriving is when you drive around with a MeshCore node so it can log where it hears mesh traffic, proving real-world coverage. Those “heard here” points get sent to build a live coverage map instead of guessing from antenna math. 📍🚗

In the steps below, we’ll show you how to set it up and use MeshCore wardriving.

# How to use

For **Android**, open Google Chrome and go to [https://coveragemap.bostonme.sh/wardrive](https://coveragemap.bostonme.sh/wardrive).

For **iOS**, install the [Bluefy app](https://apps.apple.com/us/app/bluefy-web-ble-browser/id1492822055), then open [https://coveragemap.bostonme.sh/wardrive](https://coveragemap.bostonme.sh/wardrive) inside Bluefy.

Click **Send 1 Ping** to manually upload a single ping to the server.
Click **Start Auto Ping** to enable automatic uploads.

When **Start Auto Ping** is running while you drive, your phone tracks your location and sends a ping when you enter a new area. That ping goes out on the `#wardrive` channel, and if a Greater Boston Mesh repeater hears it, it gets posted to the coverage map.
