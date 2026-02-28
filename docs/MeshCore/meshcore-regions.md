---
id: meshcore-regions
title: MeshCore Regions
sidebar_label: MeshCore Regions
---

# MeshCore Regions for Repeaters

Region management is for **repeater deployments**.  
When you deploy a repeater, set the repeater region using the state code for where it is physically installed.

Using consistent state-based regions helps with:

- Keeping flood behavior predictable
- Making repeater intent clear to other operators
- Coordinating regional deployment decisions

## State region codes

Use these region names for Greater Boston Mesh deployments:

- `ma` (Massachusetts)
- `me` (Maine)
- `ri` (Rhode Island)
- `vt` (Vermont)
- `nh` (New Hampshire)
- `ct` (Connecticut)

Also add:

- `newengland` (regional scope)

When deploying a repeater, add `newengland` at the same time you add the state region.

If you are unsure which region to use, ask in Discord or Public mesh chat before finalizing deployment.

## Rollout note for flood permissions

Do not deny flood on `*` yet.

We need all deployed repeaters on compatible versions before changing global flood behavior, and that upgrade process may take time as nodes are updated across different locations.

We can start adding and organizing regions now, then apply stricter flood-permission behavior once the network is fully updated.

These settings can be changed remotely over the mesh after a repeater is deployed.

## How scope forwarding works

Each channel can have a scope. If a message is sent on a scoped channel, that packet carries the same scope.

A repeater will only forward that packet when:

- The repeater has that region configured
- Flooding is allowed for that region

Important caveat: every repeater on the path must have the same region configured for forwarding to continue end-to-end.

Example:

- If someone in Boston sends with `ma` scope to Providence, all repeaters on that route need `ma`.
- If they send with `ri` scope, all repeaters on that route need `ri`.

## How to set region in the UI

1. Open the MeshCore app.
2. Connect to your companion.
3. Log into the repeater as admin.
4. Go to `Settings`.
5. Select `Manage Regions`.
6. Click the add button at the top right.
   ![Manage Regions screen](./assets/region-1.png)
7. Enter in `ma` and click the check mark at the top right. Repeat this to also add `newengland`.
   ![Add region button](./assets/region-2.png)
8. Click the 3 dots next to `ma` and select `Allow Flood`. Do the same for `newengland`.
   ![Enter ma region](./assets/region-3.png)
9. Click the check box to confirm region settings.
   ![Confirm region settings](./assets/region-4.png)

## How to set ma and newengland as allowed regions (CLI)

Use this sequence on a repeater serial CLI to create/update `ma` and `newengland`, allow flood for both, and persist it.

```
region put ma *
```
Creates (or updates) the `ma` region under global scope.

```
region allowf ma
```
Enables flood permission for `ma`.

```
region put newengland *
```
Creates (or updates) the `newengland` region under global scope.

```
region allowf newengland
```
Enables flood permission for `newengland`.

```
region save
```
Saves region definitions and permissions to storage.

Optional verification:

```
region get ma
```
Checks the `ma` region entry.

```
region get newengland
```
Checks the `newengland` region entry.

```
region list allowed
```
Confirms `ma` and `newengland` appear in the allowed list.

For the full region command list, see the official MeshCore CLI reference:
https://github.com/meshcore-dev/MeshCore/wiki/Repeater-&-Room-Server-CLI-Reference#region-management-repeater-only
