---
id: meshcore-troubleshooting
title: MeshCore Troubleshooting
sidebar_label: MeshCore Troubleshooting
---

# MeshCore Troubleshooting Guide

Most issues are not hardware or configuration problems - they are **antenna placement and RF environment problems**.

## A Quick Note on Expectations

The Greater Boston Mesh covers various parts of Massachusetts and even has connections that cross state lines, but it is not a solid network everywhere.

LoRa has impressive range compared to technologies like Bluetooth, but it is not going to magically provide coverage everywhere.

Getting on the mesh involves some basic understanding of radio and a bit of experimentation. You do not need to be an expert, and there are resources to help, but it is usually not as simple as buying a device and instantly connecting.


## Start Here: What are you experiencing?


### "I can hear others, but they can’t hear me"

This is the most common issue.

If this previously worked and recently stopped, see **“It used to work”** below.

#### Step 1: Confirm the problem
- Go to: https://healthcheck.bostonme.sh/
- Copy the code and send it to **#ma-hc**
- Go back to https://healthcheck.bostonme.sh/ to confirm whether any observer nodes received your message

#### Step 2: Check basic indicators
- When you send a message, do you see any **“repeats heard”**?
  - If yes → your message is getting out somewhere  
    - View which repeaters heard you  
    - Note: “repeats heard” means a repeater heard your message and your companion heard that repeater repeat it  
    - Check how strong the connection was
  - If no → likely a transmit or location issue

#### Step 3: Use the path information
- In the companion UI, go to a message you have received
- Look at the **last path before your node**
- Try to **ping that repeater**
  - If you can’t reach it, your upstream link is weak or nonexistent

#### Step 4: Look at geography
- Check the Live Map:
  - https://live.bostonme.sh/
- Or use the map tools in the MeshCore mobile app:
  - Map view
  - Tools → **Line of Sight** (helps evaluate paths to distant repeaters)
- Questions to ask:
  - Are there repeaters near you?
  - Are there obvious obstructions?
    - Note: Line of sight tools consider terrain, but not buildings

#### Step 5: Check wider mesh visibility
- Use one of the analyzers:
  - https://analyzer.letsmesh.net/packets?region=BOS
  - https://analyzer.bostonme.sh/#/packets
- Do your packets show up at any observers?
  - If yes → you’re getting out, even if not reliably
  - If no → your signal likely isn’t reaching the wider mesh

#### Step 6: Check transmit power
- Make sure your TX power matches your device capability
  - Example: if your device supports 22 dBm but is set to 10 dBm, increase it

#### Step 7: If none of the above helps
At this point, it is almost always one of:
- Antenna placement (height, obstruction)
- Indoor vs outdoor setup
- Hardware limitations

**Big improvement options:**
- Move antenna higher
- Move outdoors
- Improve line of sight
- Consider hosting a nearby [repeater](https://bostonme.sh/docs/MeshCore/meshcore-getting-started#repeater-infrastructure) in an elevated outdoor location

---

## It used to work

This is different from a typical signal issue.

If your setup previously worked and suddenly stopped transmitting, the cause is often:
- A configuration change (intentional or accidental)
- A repeater behavior change (flooding, scoping, etc.)
- Less commonly: hardware or environmental changes

#### Step 1: Test your repeater locally
- Use **Tools → Trace**
- Trace to **your own repeater**

- If this fails:
  - Your device is not properly communicating with your repeater
- If this works:
  - Continue below

#### Step 2: Test a known nearby repeater
- Trace to a repeater you expect to reach
- **Important:** include your repeater as the final hop

Expected path: `Your Repeater → Target Repeater → Your Repeater`

- If this fails:
  - Your repeater is not successfully reaching that node

#### Step 3: Check if your messages are leaving your repeater
- When you send a message, do you see **“repeats heard”**?
  - If no → your repeater is likely not transmitting correctly

Check:
- TX power settings
- Antenna connection
- Any recent config changes

#### Step 4: Think about recent changes
If this started after changes, review:
- Console commands (especially experimental settings)
- Region or scoping settings
- Flood/repeat behavior
- Firmware or config resets

When in doubt:
- Reapply known-good defaults
- Restart the repeater

#### Step 5: Don’t rely on maps
- Not appearing in analyzers or maps does **not** necessarily mean you are not transmitting

Focus on:
- Trace results
- Repeats heard
- Direct connectivity

#### Likely causes
- Misconfigured repeater (most common)
- Repeater not flooding/repeating traffic correctly
- TX power reduced or mis-set
- Antenna or cable issue
- Environmental change (less common if sudden)

---

### "I’m not hearing anything at all"

#### Step 1: Confirm the basics
- Make sure you are using **[MeshCore](https://bostonme.sh/docs/MeshCore/meshcore-getting-started/#flashing-and-initial-setup) (not Meshtastic)**
- Double-check your configuration against [the getting started guide](https://bostonme.sh/docs/MeshCore/meshcore-getting-started/)

#### Step 2: Treat as a link issue
This is effectively the same root problem as above:
- Poor antenna placement
- No nearby nodes
- [Incorrect settings](https://bostonme.sh/docs/MeshCore/meshcore-getting-started/#greater-boston-mesh-conventions-and-guidance)

### What to do
- Follow the same steps as **“I can hear others, but they can’t hear me”**
- Focus on:
  - Location
  - Antenna setup
  - Nearby mesh presence

## "Messages are inconsistent or random"

This is almost always a **weak or marginal signal**.

### What’s happening
- Your node is right at the edge of usable connectivity
- Some packets make it through, others don’t

### What to do
- Improve antenna height
- Reduce obstructions
- Reposition slightly (even small moves matter)
- Focus on establishing a **stable path to one repeater**


## "I only connect sometimes"

Same root cause as above: **edge-of-range signal**

- Time-of-day changes, interference, or minor RF shifts can push you in and out of connectivity

### What to do
- Same steps as inconsistent messages
- Prioritize **stability over reach**

## "I see activity, but nothing useful"

This is effectively the same as:

→ **I can hear others, but they can’t hear me**

You are receiving something, but:
- It may be distant nodes
- It may not be a usable path

### What to do
- Focus on reaching a **specific nearby repeater**
- Don’t assume “activity” = “working connection”

## Common Gotchas

- Line of sight matters more than power (height helps)
- Indoor setups perform significantly worse than outdoor
- Being below your roofline can block large portions of the horizon
- You can hear a node that cannot hear you
- A higher gain antenna can increase distance but flatten your signal pattern
- A better antenna does not fix a bad location
- “It worked once” does not mean it’s stable

## Final Advice

If you’re troubleshooting:

1. Change one thing at a time  
2. Test temporary setups before committing  
3. Prioritize **height and placement over everything else**

If you [ask for help](https://discord.gg/MUVASVEEES) in the discord make sure to include:
- Your hardware (radio + antenna)
- Your location (general area is fine)
- What you’re seeing (RSSI/SNR if available)
- What you’ve already tried
