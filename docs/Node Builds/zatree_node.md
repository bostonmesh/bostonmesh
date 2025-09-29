# Zatree - Meshcore Node Build

This document outlines the bill of materials (BOM) and setup for the **Zatree** Meshcore Node.  
A solar-powered mesh networking node designed for critical infrastructure locations. 

---

## 📋 Bill of Materials

| Item | Qty | Price (USD) | Link | Notes |
|------|-----|-------------|------|-------|
| SMA Adapter Set | 1 | $2 | [Amazon](https://www.amazon.com/dp/B0FBWVY4W5) | Needed for antenna/filter connections |
| SMA to N-Type Adapater | 1 | $6 | [Amazon](https://www.amazon.com/dp/B0B9RXN26M) | Needed for antenna/filter connections |
| Solar Panels | 3 | $30 ea | [Amazon](https://www.amazon.com/dp/B0C4L1L1BD) | Power source |
| ASA Filament (~500g) | 1 | $12 | [Amazon](https://www.amazon.com/dp/B09DKPYYBP) | ASA for weather resistant enclosure |
| External Antenna | 1 | $15 | [Amazon](https://www.amazon.com/dp/B08H8J6ZV6) | For improved signal |
| Washtastic (LoRA controller) | 1 | $30 | – | Main Controller  |
| Battery Pack | 1 | $10 (est) | – | Reclaimed 18650 cells |
| Bandpass Filter | 1 | $10 | – | To reduce noise and improve RF performance (Made by Zaos) |

---

## 🛠️ Explanation

The main use-case of this node is for hill tops with good LOS. The Washtastic has an amp that outputs 1W. This means the power usage is high and requires decently sized solar panels. This node was extensively tested (tentative) and is perfect for critical infrastructure locations, bridging clusters of nodes.  

---

## ⚡ Build Instructions

- Print out enclosure using provided files. Must be printed in ASA. 
- Use a heat set insert and put a 1/4 inch heat set into the holes on the top half of the enclosure.
- Print the TPU gasket and insert into top half.
- For extra water resistance you can spray the whole thing with a clear coat now. 
- Use UV resistant silicone and attach all 3 solar panels onto the enclosure. I recommend just making a square of silicone around the opening and pushing the panel onto it, keep steady until dry. let cure.
- Cut the USB parallel wires to give you 3 seperate USB wires, strip the ends revealing the black and red wires, strip those aswell. Attach the connections in parallel so only 1 wire is outputted for power and gnd. attach to a JST connector.
- Insert the antenna mount into the hole, use silicone to seal the edges. Let cure.
- Create/buy a 18650 battery pack. This design supports up to a 1s10p pack. Attach output to JST connector.
- put 18650 into battery designated spot, Connect to washtastic. Connect solar panels to washtastic (Ensure it is off).
- Connect washtastic to filter, then filter to antenna mount. Attach antenna to mount.
- Screw the two halves together, ensure it is stable and all items inside arent moving around
- Preform local testing before sending it into a tree. 

---

## 💡 Notes

- **Estimated total cost:** ~$120 (depending on battery pack source).
- Parts can be substituted depending on availability.
- Outdoor use requires ASA filament for weather resistance.

---