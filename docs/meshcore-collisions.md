---
id: meshcore-collisions
title: MeshCore Repeater Collisions
sidebar_label: MeshCore Collisions
---

# MeshCore Repeater Collisions

MeshCore effectively uses the **first 2 hex characters of your public key** as a short “node ID” prefix.  
If two nodes in the same mesh share that prefix (example: `a3`), tools that rely on the short ID can get confused.

This guide shows how to change your keypair so your repeater gets a **different 2-digit prefix**, using a **serial (USB) connection** and the MeshCore CLI command:

**`set prv.key`**

---

## Symptoms of a prefix collision

- You see ambiguous node IDs (same 2-digit prefix) in neighbor lists / path info
- Debugging range/links becomes annoying because two nodes “look” the same at a glance

---

## What you’ll need

- A PC connected to the repeater via **USB serial**
- The MeshCore web console.
  - https://flasher.meshcore.co.uk/
- A new keypair generated with a **non-colliding prefix**:
  - https://gessaman.com/mc-keygen/

---

## Step 1: Check what prefixes are already in use nearby

You can check prefixes a couple different ways:

### Option A: MeshCore Analyzer
Browse the repeater list for the region `BOS - Boston, US` and look at the prefixes already in use:  
https://analyzer.letsmesh.net/nodes/repeaters

### Option B: Discord bot
In the Discord server, run the command `/open` in `#meshcore-bot` channel, and check the prefixes shown there.

> Goal: pick a prefix that isn’t already common around your local mesh.

---

## Step 2: Generate a new keypair with your chosen prefix

Go to:  
https://gessaman.com/mc-keygen/

1. Enter/select your **target prefix** (2 hex characters)
2. Generate a keypair
3. Copy the **private key**

MeshCore expects the private key as **128 hex characters** (one continuous string).

---

## Step 3: Set the new private key over serial

Go to:
https://flasher.meshcore.co.uk/

1. Click on `Console`
2. Select the device in the popup window.
3. Enter the command below to change the key.

```txt
set prv.key <PASTE_128_HEX_PRIVATE_KEY_HERE>
```

### Paste safety checklist

* The key is **exactly 128 hex characters**
* No spaces, no line breaks, no quotes
* Make sure you didn’t accidentally copy extra characters before/after the key

---

## Step 4: Reboot the repeater

```txt
reboot
```

---

## Step 5: Verify

After reboot:

1. Check the repeater’s public key (web UI/app/console)
2. Confirm the **first 2 hex characters** match the prefix you chose
3. Send a few adverts so the network sees the new identity

---

## Important gotchas

Changing the private key changes the node’s identity.

After re-keying, you may need to update:

* ACLs / allowlists that reference the old pubkey
* Dashboards, automations, or monitoring that key off the old identity
* Anything else that “remembers” your node by pubkey

---

## Quick command summary

```txt
set prv.key <128_hex_private_key>
reboot
```
