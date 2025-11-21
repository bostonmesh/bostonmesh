# Zatree - Meshcore Node Build

This document outlines the bill of materials (BOM) and setup for the **Zatree** Meshcore Node.  
A solar-powered mesh networking node designed for critical infrastructure locations. 

---

## 📋 Bill of Materials

| Item | Qty | Price (USD) | Link | Notes |
|------|-----|-------------|------|-------|
| SMA Adapter Set (needed if using filter) | 1 | $2 | [Amazon](https://www.amazon.com/dp/B0FBWVY4W5) | Needed for antenna/filter connections |
| SMA to N-Type Adapater (needed if using filter) | 1 | $6 | [Amazon](https://www.amazon.com/dp/B0B9RXN26M) | Needed for antenna/filter connections |
| Solar Panels | 3 | $10 ea | [Amazon](https://www.amazon.com/dp/B0C4L1L1BD) | Power source |
| ASA Filament (~500g) | 1 | $12 | [Amazon](https://www.amazon.com/dp/B09DKPYYBP) | ASA for weather resistant enclosure |
| External Antenna | 1 | $15 | [Rokland](https://store.rokland.com/products/4-dbi-helium-hotspot-fiberglass-outdoor-antenna-bracket-mount-for-rak-bobcat-nebra-sensecap?srsltid=AfmBOoq_foU2jZxmKBh5mdKB6PcmICpIivgYj3i6KTLgXmFYjIWcdAic) | For improved signal |
| Washtastic (LoRA controller) | 1 | $30 | – | Main Controller  |
| Battery Pack | 1 | $10 (est) | – | Reclaimed 18650 cells |
| Cavity Filter (optional) | 1 | $65 | [Acasom](https://acasom.com/products/915mhz-5-types-cavity-filter-for-helium-network-filter-waterproof-lora-indoor-use-high-out-band-rejection) | To reduce noise and improve RF performance|

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
- Washtastics are 30$ if you get em via a group order. Ordering them in singles makes em 85$ each and a tough purchase. 

---
