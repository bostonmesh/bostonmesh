---
id: meshcore-channels
title: MeshCore Channels
sidebar_label: MeshCore Channels
---

# MeshCore Channels

## April 2026 Update

_Note: This was adapted from an announcement on Discord in early April_

The [New Hampshire Mesh made an announcement]() about organizing their region in order to be good mesh stewards and to prioritize good mesh hygiene. This push proposes the segmenting of certain channels or channel types by region. Instead of a blast to `Public` - which could have packets flood much farther than intended - a mesh user can target/tune their communication to something more local.

With New Hampshire implementing this practice and other nearby regions on board to do so, we should be good neighbors on the mesh and follow suit out of respect for everyone else.

> **TL;DR**: How and where you transmit matters - not just for you, but for everyone in the region. This includes CT, NH, Maine, NY and RI.

### The Flood Problem

MeshCore's default public channel uses a flooding protocol - every node in range retransmits the packet, which propagates outward like ripples in a pond. And a _default_ of 64 hops. That is great for maximum reach! It's not so great when you're doing a war drive test in Boston and your packets are getting retransmitted by repeaters in New York City or Maine, in pursuit of confirmation that your mobile node was working.

Every unnecessary flood steals airtime from everyone. LoRa is a shared half-duplex medium. We're all on the same RF budget. In this case, "unnecessary" could be better understood as untargeted. In a real world example, if you're having a conversation with a friend beside you at a party, having someone across the room use a megaphone to broadcast their own conversation may drown you out... And you may not be interested in _their_ conversation in the first place.

### What We're Asking: Use Hashtag Channels

Until the MeshCore regional segmentation in firmware is stable enough for us to rely on, and enough repeaters are up-to-date with any new firmware changes, please us the appropriate hashtag channel(s) for your activity:

| Channel | Description | Status |
| --- | --- | --- |
| `#ma-mesh` | General MA chat - say hi, share a spotting, talk mesh shop with MA folks. | ➕ New Channel |
| `#ma-hc` | Health check pings - use the new [Health Check](https://healthcheck.bostonme.sh/app) service on the website! | ➕ New Channel |
| `#emergency` | Actual emergencies.  Flooding is appropriate here - that's the point. Keep traffic concise and relevant. | 👍 No Change |
| `Public` | New users getting oriented, or reaching someone in a different region you can't DM. Save it for when you need the reach. | 👀 New Behavior |

Similarly, New Hampshire has implemented the following channels: `#nhmesh` (their NH-focused chat) and `#nhhc` (their health check). More regional hashtags will emerge as time goes on.

> **NOTE**: This is currently an _organizational_ initiative until a software/firmware solution for regional flooding is in place and sufficiently stable.

### Practical Examples: What Should You Do and Where Should You Do It?

* War Driving or mobile testing?
  * `#ma-wardiving` or DM a known node. It's bad form to test that repeatedly in `Public`.
* Chatting with Neighbors a few hops away?
  * DM or `#ma-mesh` - Our neighbors in Rhode Island and New Hampshire probably don't need to be reached.
* Checking if your repeater is heard on the mesh?
  * `#ma-hc`. One ping. Wait. Done. (Or debug with the [Boston Mesh Analyzer](https://analyzer.bostonme.sh/#/live) or with the help of others on Discord.)
* Checking if your companion is sending messages to the mesh?
  * `#test` is a better candidate than `Public`. Though if you perform your test by saying "hello" in `#ma-mesh`, you may get folks saying "hi" back!
* Actual "🚨Grid is Down🚨" Emergency?
  * `Public` or `#emergency`. Flood away, that's exactly the system is for.

### Be a Good Steward, Follow Best Practices

We're building this for resilience, which means the network needs to work when it counts. That only happens if we treat airtime as a _shared resource_ during normal operations.

If you have questions about channel setup or your device config, drop it in `#ma-mesh` or follow up in the MeshCore channels on the discord. We're happy to help!

### Final Note

We understand that hashtag channels still will use flood packets, but as we take the first step to  some organization, let's encourage better practices and build the muscle memory _now_ so it's not a big deal later.

We need to share the mesh resources with surrounding neighbors, out of respect for all. Thus, we should do our best to adhere to the community standards our neighbors are proposing. We do not own the mesh; _it is morphing into something beyond just ourselves_.

## Other Good Channels

As of April 2026, please note that these are **not** region-locked chats.

| Channel | Purpose |
| --- | --- |
| `#chat` | General day-to-day conversation. |
| `#coffee` | Local meetup and casual social coordination.|
| `#ice-alert` | ICE (Immigration and Customs Enforcement) activity alerts and related safety updates. <br /> **NOTE**: If you think ICE is in your area, please [contact Mass LUCE 617-370-5023](tel:+16173705023) |
| `#jokes` | Humor and light social traffic. |
| `#politics` | Politics-focused discussion. |
| `#test` | Node testing, path testing, and signal/routing checks. |
| `#weather` | Weather reports, forecasts, and weather-related updates. |

## Notes

* Channel usage can evolve over time as community needs change.
* For current channel practices, check in `Public` or Discord.
* Bot/channel command reference: [MeshCore Bot Documentation](https://bostonme.sh/docs/MeshCore/meshcore-bots)
