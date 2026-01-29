---
id: meshcore-getting-started
title: MeshCore Getting Started
sidebar_label: MeshCore Getting Started
---

# MeshCore: Getting Started  
*Greater Boston Mesh*

MeshCore is the software used by Greater Boston Mesh to build a decentralized, long-range wireless messaging network using LoRa radios. Nodes communicate directly with each other, forming a mesh that does not rely on the internet or cellular service.

This page is intended to help you get oriented, understand your options, and figure out what to do next — without requiring deep radio or networking knowledge.

If you are interested in hosting infrastructure for the network without getting deeply involved, you may also want to read [Host a Node](https://bostonme.sh/docs/host-a-node).

---

## Ways to participate

There are a few different ways to participate in the MeshCore network. You do **not** need to start with infrastructure.

### Companion node (handheld or portable)

A client node lets you listen to the mesh and send messages. These are typically battery-powered and portable.

Good fit if you:
- Are curious and want to explore
- Want to participate without running always-on hardware
- Are just getting started

This is the easiest place to begin.

You can purchase hardware made specifically for MeshCore, or flash MeshCore onto many compatible LoRa devices.

If you want examples of hardware that people in the community are already using successfully, see  
[Node Builds](https://bostonme.sh/docs/Node-Builds).

---

### Companion (fixed location)

A fixed node runs in one location, often with better placement or an external antenna compared to a handheld device.

Good fit if you:
- Want more reliable coverage from your location
- Have a place to leave a node powered on
- Are experimenting before hosting a repeater

---

### Repeater (MeshCore infrastructure)

A repeater is an always-on node that helps extend coverage for others. Repeaters are critical to the health of the mesh, but they require more planning and coordination.

Good fit if you:
- Have stable power (UPS backup, solar with batteries, etc.)
- Can place hardware reasonably high
- Are willing to coordinate with the community

If you want to host a repeater without getting involved in the community, please read [Host a Node](https://bostonme.sh/docs/host-a-node) for help, otherwise continue reading below.

---

### Room server (advanced)

A room server hosts a persistent chat room on the mesh. This role is more advanced and is not required for general participation.

Most users do not need to run a room server.

---

## What you need to get started

At a minimum:
- A supported LoRa device  
- A USB cable  
- A computer with a modern browser (Chrome or Edge recommended)  
- About 10–20 minutes  

You can purchase hardware made specifically for MeshCore, or flash MeshCore onto many compatible LoRa devices. Heltec v4 boards are our current recommendation. If you’re looking for other known-good hardware options, see [Node Builds](https://bostonme.sh/docs/Node-Builds), which links to several proven MeshCore builds used by the community.

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

## Flashing and initial setup (high level)

Some hardware is delivered with MeshCore firmware and others you need to setup. If you need to put MeshCore firmware on your device, it is installed using [the official MeshCore web flasher](https://flasher.meshcore.co.uk).

Typical first-time steps:
1. Connect your device via USB
2. Open the MeshCore web flasher
3. Select your device and region
4. Choose a role (Companion, Repeater, Room server)
5. Set a node name
6. Flash the firmware

The flasher will guide you through the rest. You do not need to use the command line for basic setup.

---

## Greater Boston Mesh conventions and guidance

These are **recommendations**, not hard rules. They exist to keep the mesh understandable and healthy.

### Node names

- Choose a name that is descriptive and reasonably unique
- Town- or neighborhood-based names are common
- Avoid extremely short or generic names

Examples:
- `BOS - North Station NE`
- `CMD - Central Sq - 001`
- `WAT - Arsenal`

---

### Adverts and airtime

MeshCore relies on shared radio spectrum.

- Use an advert interval of 47 hours
- Avoid overly aggressive broadcast settings
- More power or more frequent adverts is not always better

If you’re hosting a repeater, this matters more.

---

### MeshCore key prefixes (advanced)

MeshCore uses a short prefix derived from your node’s public key. In rare cases, two nearby nodes may share the same prefix, which can make debugging confusing.

Most users:
- Do **not** need to worry about this
- Will never encounter a problem

Repeater hosts and advanced users should read:  
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

## Still unsure?

That’s normal. MeshCore has a low barrier to entry, and you can start small.

If you’re not sure where to begin:
- Start with a client node
- Leave settings mostly default
- Ask before making major changes

We’re glad you’re here.
