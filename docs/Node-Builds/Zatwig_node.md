# Zatwig - Meshcore Node Build

This document outlines the bill of materials (BOM) and setup for the **Zatwig** Meshcore Node.  
A solar-powered mesh networking node designed for infrastructure locations. 

---

## 📋 Bill of Materials

| Item | Qty | Price (USD) | Link | Notes |
|------|-----|-------------|------|-------|
| Antenna | 1 | $2 | [Ebyte](https://ebyteiot.com/products/2pcs-bendable-rubber-rod-antenna-cdebyte-230-470-868-915mhz-ipex-1-3dbi-wide-frequency-band-small-vswr-90foldable-antenna-tx230-jks-ipx20?) | basic sleeved dipole 2.5dbi|
| Solar Panels | 3 | $2 ea | [Amazon](https://www.amazon.com/dp/B0C4L1L1BDhttps://www.amazon.com/dp/B0B51HZ9D9?ref=ppx_yo2ov_dt_b_fed_asin_title) | Power source |
| ASA Filament (~200g) | 1 | $5 | [Amazon](https://www.amazon.com/dp/B09DKPYYBP) | ASA for weather resistant enclosure |
| Rak Wisblock| 1 | $30 | [Rokland](https://store.rokland.com/products/rakwireless-mini-meshtastic-starter-kit-us915-rak19003-4631-sku-115093?) | Main Controller, cheaper to buy atleast 10, massive discount.|
| Battery Cells | 2 | $5 (est) | – | Reclaimed 18650 cells, I used laptop packs I got for free, Can use 21700 for more juice|
| Battery BMS | 1 | \<$1 (est) | [Aliexpress](https://www.aliexpress.us/item/3256805216117590.html?) | 1s BMS board.|
| 1n5817 diodes| 3 | $1 (est) | [Amazon](https://www.amazon.com/dp/B079KDQQPD?ref=ppx_yo2ov_dt_b_fed_asin_title) | Makes the panels a bit more efficient. Not 100% required but recommended. |

---

3D files [here](assets/Zatwig.zip). 
When printing, print upside down or else you will have a not fun time. Use tree supports aswell unless you know your printers bridging capabilities. 
## 🛠️ Explanation

The main use-case of this node is for hill tops that dont need alot of power to punch through things. Its only a 22dbm rak but even so can make good connections many km away given proper LOS. These shines well when you place alot of them to properly mesh. 
I highly recommend upgrading the antenna to something like [this](https://store.rokland.com/collections/802-11ah-wi-fi-halow/products/4-dbi-helium-hotspot-fiberglass-outdoor-antenna-bracket-mount-for-rak-bobcat-nebra-sensecap) , It is a much better antenna, but youll need to use an N type adapter. 

---

## ⚡ Build Instructions

1. Start off by building your battery pack. Line up the two 18650 and spot weld them in parallel side by side. Heat shrink it in battery wrap for extra safety
2. Spray down the printed ASA parts with clear coat, a few coats of this will aid its water resistance.
3. Solder +/- wires to the 3 solar panels
4. Use hotglue or ideally outdoor silicone to attach the panels to the main body, feeding the wires through the holes. 
5. Solder the 1n5817 diodes on the + wires, then attach all 3 together. (I use a PCB made at home for this with a laser machine)
6. Push the antenna through the bottom (takes some umph) and then attach the UFL. add a drop of hotglue for stability.
7. hot glue the battery to the inside TOP of the zatwig body.
8. Connect the battery and solar panels to the Rak. Ensure youve flashed it properly. 
9. Nestle everything in the enclosure and screw shut. Uses M5 hex key bolts. if you are gentle it does not require any heat-serts. 
10. deploy yippie (I recommend wrapping the bottom of the antenna with antenna tape to prevent water ingress.) 

## 💡 Notes
This build is not perfect. It works for me and my use cases. Create at your own risk.
