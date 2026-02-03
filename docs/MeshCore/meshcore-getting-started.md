---
id: meshcore-getting-started
title: MeshCore Getting Started
sidebar_label: MeshCore Getting Started
---

# MeshCore Getting Started  
*Greater Boston Mesh*

MeshCore is the software used by Greater Boston Mesh to build a decentralized, [long-range wireless (LoRa)](https://www.semtech.com/lora/what-is-lora) messaging network using LoRa radios. Nodes communicate directly with each other, forming a mesh that does not rely on the internet or cellular service. 

This page is intended to help you get oriented, understand your options, and figure out what to do next — without requiring deep radio or networking knowledge.

If you are interested in hosting infrastructure for the network without getting deeply involved, you may also want to read [Host a Node](https://bostonme.sh/docs/host-a-node).

If you are want to learn more about MeshCore in general please visit [MeshCore.co.uk](https://meshcore.co.uk/about.html).

---

## Ways to participate

There are a few different ways to participate in the MeshCore network. You do **not** need to start with infrastructure.

## Companion (handheld or portable)

A Companion lets you listen to the mesh and send messages. These are typically **battery-powered** and **portable**.

Good fit if you:

- Are curious and want to explore
- Want to participate without running always-on hardware
- Are just getting started

This is the easiest place to begin.

You can purchase hardware made specifically for MeshCore, or flash MeshCore onto many compatible LoRa devices.

If you want examples of hardware that people in the community are already using successfully, see  
[Node Builds](https://bostonme.sh/docs/Node-Builds).

---

## Companion (fixed location)

A fixed Companion runs in **one location**, often with **better placement** (window, high shelf) or an **external antenna** compared to a handheld.

Just like a handheld or portable Companion, it’s still a **client node**: it’s mainly there to help **you** stay connected and reliably reach the **main mesh** from your location, not to act as an always-on public repeater.

Good fit if you:

- Want more reliable coverage from your location
- Have a place to leave a node powered on (USB power / wall adapter)
- Are experimenting before hosting a repeater

---

## Repeater (infrastructure)

A repeater is an always-on node that helps extend coverage for yourself and others. Repeaters are critical to the health of the mesh, but they require more planning and coordination.

Good fit if you:
- Have stable power (UPS backup, solar with batteries, etc.)
- Can place hardware reasonably high
- Are willing to coordinate with the community

If you want to host a repeater without getting involved in the community, please read [Host a Node](https://bostonme.sh/docs/host-a-node) for help, otherwise continue reading below.

---

## Room Server

A **Room Server** is a MeshCore node that hosts a **persistent group chat room** on the mesh.

Instead of messages only being exchanged between individual nodes, a room server provides a shared “meeting place” where multiple people can post and read messages in the same channel. The room stays available as long as the server is online, which makes it useful for community coordination, announcements, and ongoing conversations.

What it’s good for:
- A **local community chat** (town/region coordination)
- **Event coordination** (meetups, field tests, deploy days)
- A place for **status updates** or lightweight announcements
- Keeping a conversation going even as people come and go from coverage

What it’s not:
- It’s **not required** to use MeshCore day-to-day
- It’s **not a repeater** (its job isn’t to extend RF coverage)

Typical expectations:
- Usually runs **always-on** (stable power, reliable placement)
- Best hosted where it can **reach the mesh reliably**
- More useful when the host coordinates with others so the room name/purpose is clear

If you’re just getting started, you can skip room servers entirely. Most people begin with a Companion node, and add a room server later only if the community needs one.

---

## Encryption and visibility

[MeshCore traffic is encrypted](https://meshcore.co.uk/about.html). However:

- Public channels are shared keys, meaning anyone with that channel key can read those messages
- Message routing metadata (the path a message took through the mesh) is visible to the network
- Even if you hide your GPS location, traffic patterns and repeater paths are not private

If you require private communication, use private channels with shared keys rather than public ones. If you publicly share your shared keys then it is no longer private.

In short: encrypted does not mean anonymous.

---

## What you need to get started

At a minimum:
- A supported LoRa device  
- A USB cable  
- A computer with a modern browser (Chrome or Edge recommended)  
- About 10–20 minutes  

You can purchase hardware made specifically for MeshCore, or flash MeshCore onto many compatible LoRa devices. [Heltec v4](https://heltec.org/project/wifi-lora-32-v4/) boards are our current recommendation. If you’re looking for other known-good hardware options, see [Node Builds](https://bostonme.sh/docs/Node-Builds), which links to several proven MeshCore builds used by the community.

---

## Antennas and placement

Antenna choice and placement often matter more than transmit power. When looking for an antenna, make sure it is designed for the correct frequency band (902–928 MHz in the US). Antennas advertised for the wrong band may perform poorly, even if they physically fit. You do not need an expensive or high-gain antenna to get started. Simple antennas matched to the correct band work well in many cases.

General guidance:
- An external antenna usually performs better than a small built-in antenna
- Height and clear surroundings help more than raw power
- Indoors, placement near a window or on a higher floor can make a noticeable difference

You do not need an expensive or oversized antenna to get started. Many users begin with the antenna included with their hardware and upgrade later if needed.

If you are running a companion node in a fixed location or planning to host a repeater, antenna choice and placement become more important. Ask in Discord before making major changes — the community is happy to help.

---

## Flashing and initial setup

When you’re ready to set up your LoRa radio, the first step is loading **MeshCore firmware** onto the device using the official MeshCore web flasher:

[MeshCore Web Flasher](https://flasher.meshcore.co.uk)

Typical first-time steps:

1. Connect your device to your computer via USB  
2. Open the MeshCore web flasher  
3. Select your device (or detected port)  
4. Choose a role (Companion USB/BLE, Repeater, Room Server)  
5. Flash the firmware  

When flashing finishes, **power-cycle or restart** the radio. It should boot running the firmware you just installed.

If anything behaves unexpectedly (not detected, won’t flash, won’t boot, can’t connect), visit the community Discord and ask for help in the MeshCore `#troubleshooting` channel:

[MeshCore Discord](https://discord.gg/MUVASVEEES)

For full firmware documentation and release notes, see: [MeshCore GitHub Repository](https://github.com/meshcore-dev/meshcore)

---

## Greater Boston Mesh conventions and guidance

### Use the USA/Canada preset

Please use the [USA/Canada preset](https://bostonme.sh/meshcore#contact).

If you change the frequency, bandwidth, or spreading factor, your node will not be able to communicate with the Greater Boston Mesh.

If your node cannot see or reach anyone, double-check that you are using the USA/Canada preset.

MeshCore relies on shared spectrum and shared settings. Especially for repeater setups:

- Use a flood advert interval of **47 hours**
- More power or more frequent adverts is not always better
- By default, zero-hop advert is set to `0` (you may optionally set it to something like `240` minutes)

Keeping consistent settings ensures stability and reduces unnecessary RF noise.

---

### Node names

These are recommendations, not hard rules. They exist to keep the mesh understandable and healthy.

- Choose a name that is descriptive and reasonably unique  
- Town- or neighborhood-based names are common  
- Avoid extremely short or generic names  

Examples:

- `BOS - North Station NE`  
- `CMD - Central Sq - 001`  
- `WAT - Arsenal`  

Clear naming helps with troubleshooting, mapping coverage, and general sanity.

---

### MeshCore key prefixes (advanced)

MeshCore uses a short prefix derived from your node’s public key.

In rare cases, two nearby nodes may share the same prefix. When that happens, debugging can become confusing, especially in dense areas with multiple repeaters.

Collisions are still uncommon, but as more repeaters come online, avoiding prefix collisions becomes more important.

Repeater hosts should read:

[MeshCore key prefix collisions](https://bostonme.sh/docs/MeshCore/meshcore-collisions)

If you’re unsure, ask in Discord before changing anything.

---

## What to do next

Depending on your interest level:

- Join the Greater Boston Mesh Discord and say hello
- Share your node name and general location
- Ask questions — especially before deploying a repeater
- Read [Host a Node](https://bostonme.sh/docs/host-a-node) if you want to contribute infrastructure

MeshCore works best when people coordinate, even loosely.

---

## Verifying your node is working

After flashing and configuring your node, the next question is usually: how do I know it’s actually working?

### Use public channels

You can send messages in the main Public channel, but there are additional public channels such as `#test`.

If you want to send test messages without adding noise to the main Public channel, add and use the `#test` channel instead.

There are often bots running in `#test` that will auto-respond if you send:

- `ackbot`
- `test`

If you receive a response, that confirms your node is successfully transmitting and receiving at least one hop into the mesh.

---

### Use the Mesh Analyzer

The most reliable way to verify that your node is fully participating in the mesh is to use:

[Mesh Analyzer](https://analyzer.letsmesh.net/channels)

1. Select the `BOS` region
2. Select the channel you are using (Public, #test, etc.)

You can view:

- Messages as seen by an observer node
- The path messages took through the mesh
- Which repeaters handled the traffic

This helps confirm:
- Your messages are reaching the wider mesh
- You are receiving messages seen by others
- The route quality and hop count look reasonable

If your messages appear locally but do not show up in the analyzer, your node may not be reaching a well-connected repeater.

---

### Use built-in tools

Both the mobile app and companion tools provide additional diagnostics:

- **Ping** – Check if another nearby node responds
- **Trace** – See the signal quality and hop path starting from your companion node
- **LOS (Line of Sight)** – Evaluate terrain and obstruction between two locations

These tools help diagnose placement issues, antenna problems, or configuration mismatches.

---

## Still unsure?

That’s normal. MeshCore has a low barrier to entry, and you can start small.

If you’re not sure where to begin:
- Start with a client node
- Leave settings mostly default
- Ask before making major changes

You may also want to visit the [official MeshCore FAQ](https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md)

We’re glad you’re here.
