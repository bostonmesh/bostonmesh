# MeshCore - Raspberry Pi 1w Repeater

This document outlines the bill of materials (BOM) and setup for a Meshcore Repeater using a Raspberry Pi and a MeshADV board or similar sx1262 Radio. (Only tested with MeshADV)

---

## 📋 Bill of Materials

| Item | Qty | Price (USD) | Link | Notes |
|------|-----|-------------|------|-------|
| Antenna | 1 | $30 | [Amazon](https://www.amazon.com/dp/B0CWN7VHP3) | 5.8dbi Antenna. Any antenna with a N Type Male connector will work.|
| U.F.L1 to N Type Female | 1 | $9 | [Amazon](https://www.amazon.com/dp/B0C8M77ZMW) | To connect the MeshADV to the antenna.|
| ATGM336H GPS+BDS | 1 | $20 | [Amazon](https://www.amazon.com/dp/B09LQDG1HY) | Optional if you wanted to make a NTP server as well.|
| MeshAdv Pi Hat v1.1 | 1 | $? | [Etsy](https://www.etsy.com/listing/1849074257/meshadv-pi-hat-v11-fully-assembled-1) | Currently Sold Out at time of writting. But PCB is on the [GitHub](https://github.com/chrismyers2000/MeshAdv-Pi-Hat/tree/main/V1.1/IPEX/PCB) to make custom orders on [JLCPCB](https://jlcpcb.com/)|
| Raspberry Pi 4B - 2GB  | 1 | $45 | [PiShop](https://www.pishop.us/product/raspberry-pi-4-model-b-2gb/) | 2GB model is more than enough for MeshCore, and gives extra for other services. |
| 32GB MicroSD Card  | 1 | $14 | [Amazon](https://www.amazon.com/dp/B084CJLNM4) | Max Endurance MicroSD card or long runtime. |
| WaveShare POE Hat  | 1 | $25 | [Amazon](https://www.amazon.com/dp/B0928ZD7QQ) | Optional POE Hat for Pi, with GPIO passthrough. Note the fan on these models tend to fail. Alternative hat's recomended for long term builds. |
| USB-C POE Spliter  | 1 | $15 | [Amazon](https://www.amazon.com/dp/B087F4QCTR?th=1) | Optional POE Splitter instead of POE Hat |

| Outdoor Rated Project box  | 1 | N/A | N/A | A box that has enough size for the Pi and 2 GPIO Hat's installed on it. |

---

## 🛠️ Explanation

The main use-case of this node is for building a static Home base or remote deploy, where you have internet access via ethernet to the Pi. This way you can update the node remotley and not have to use USB/WiFi/BT to update the node.

This document has been written with the impression that the user doing this install has fundimental knowledge of using a Linux OS.

---

## ⚡ Build Instructions

- Image the MicroSD card using [Raspberry Pi Imager](https://www.raspberrypi.com/software/) with `Raspberry Pi OS Lite (64-Bit)`. Set Custom settings like, Name, Location, user login. (Set up WiFi if you are using WiFi instead of Ethernet.)
- Once the MicroSD card has been imaged, insert it into the Pi and power it up.
- Once the Pi is powered up, find it on your network and SSH into it with the username and password you created in the Imager.
- Udate the Pi using `sudo apt update && sudo apt upgrade -y`.
- Next we need to setup the Pi for the MeshADV board. We will be using the [
Meshtasticd-Configuration-Tool](https://github.com/chrismyers2000/Meshtasticd-Configuration-Tool) for ease of use for the configuration.
- Download and run the script `meshtasticd_config_tool_CLI.py` following the instructions on the GitHub Page.
- In the Configuration Tool, run option 2, 3, 4.
![Configuration-Tool](assets/meshadv_node_rpi/meshconfig-tool-cli-setup.png)
- Reboot Pi after closing the config tool, and log back in via SSH.
- 

