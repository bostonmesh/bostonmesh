# MeshCore Raspberry Pi 1W Repeater

This document outlines the bill of materials (BOM) and setup for a MeshCore repeater using a Raspberry Pi and a MeshADV board or similar SX1262 radio. **Tested with MeshADV and PiMesh-1W**

---

## 📋 Bill of Materials

| Item | Qty | Price (USD) | Link | Notes |
|------|-----|-------------|------|-------|
| Antenna | 1 | $30 | [Amazon](https://www.amazon.com/dp/B0CWN7VHP3) | 5.8 dBi antenna. Any antenna with an N-Type male connector will work. |
| U.FL to N-Type Female | 1 | $9 | [Amazon](https://www.amazon.com/dp/B0C8M77ZMW) | Connects the MeshADV to the antenna. |
| ATGM336H GPS+BDS | 1 | $20 | [Amazon](https://www.amazon.com/dp/B09LQDG1HY) | Optional, if you want to build an NTP server as well. |
| MeshAdv Pi Hat v1.1 | 1 | $? | [Etsy](https://www.etsy.com/listing/1849074257/meshadv-pi-hat-v11-fully-assembled-1) | Currently sold out at the time of writing. PCB is available on [GitHub](https://github.com/chrismyers2000/MeshAdv-Pi-Hat/tree/main/V1.1/IPEX/PCB) to order through [JLCPCB](https://jlcpcb.com/). |
| PiMesh-1W | 1 | $65-$105 | [MeshSmith](https://meshsmith.net/) | Replacement to MeshADV. Made by a local CT Dev. |
| Raspberry Pi 4B – 2GB | 1 | $45 | [PiShop](https://www.pishop.us/product/raspberry-pi-4-model-b-2gb/) | 2GB is more than enough for MeshCore and leaves resources for other services. |
| 32GB MicroSD Card | 1 | $14 | [Amazon](https://www.amazon.com/dp/B084CJLNM4) | Max Endurance MicroSD recommended for long runtime. |
| WaveShare PoE Hat | 1 | $25 | [Amazon](https://www.amazon.com/dp/B0928ZD7QQ) | Optional PoE hat with GPIO passthrough. Note: the fan on these models tends to fail — alternative hats recommended for long-term builds. |
| USB-C PoE Splitter | 1 | $15 | [Amazon](https://www.amazon.com/dp/B087F4QCTR) | Optional PoE splitter instead of a PoE hat. |
| Brass Spacer/Standoffs + Nuts + Screws | 1 | $10 | [Amazon](https://www.amazon.com/dp/B0756CW6Y2) | Standoffs and spacers. |
| Outdoor-rated project box | 1 | N/A | N/A | A box large enough to fit the Pi and two GPIO hats installed. |

---

## 🛠️ Explanation

The main use case of this node is for building a static home base or remote deployment where you have internet access via Ethernet to the Pi. This allows you to update the node remotely without needing USB, Wi-Fi, or Bluetooth.

This document assumes the user has fundamental knowledge of using a Linux OS.

This document includes instructions for adding the GPS module, but does **not** provide guidance on building a stratum-1 NTP server.

---

## ⚡ Hardware Build Instructions

<mark>**NOTE:** NEVER POWER ON THE MESHADV WITHOUT AN ANTENNA CONNECTED!</mark>  
Doing so can (and likely will) burn out the SX1262 radio.

We will be using the WaveShare PoE hat in this build. You can also use a USB-C PoE splitter instead.

- OPTIONAL: Solder the GPS module to the MeshADV board. The recommended module is the ATGM336H listed in the BOM.  
![GPS Module](assets/meshadv_node_rpi/meshadv-gps.png)

- Once soldered, jumper the `3.3v` and `J3` pins on the board to power the GPS module.  
![GPS Module Power](assets/meshadv_node_rpi/meshadv-gps-power.png)

- Be careful that the GPS antenna does not short against the backup battery soldered onto the GPS module.  
![GPS Module Short](assets/meshadv_node_rpi/meshadv-gps-short.png)

- Install the PoE hat and MeshADV, starting with the PoE hat and then stacking the MeshADV on top.  
![Pi PoE Stack](assets/meshadv_node_rpi/meshadv-pi-poe-stack.png)

- Connect the desired antenna.
- Power up the Pi by plugging in an Ethernet cable with PoE. You can use a PoE injector or a PoE-capable network switch.

---

## 🚀 Software Build Instructions

- Image the MicroSD card using [Raspberry Pi Imager](https://www.raspberrypi.com/software/) with **Raspberry Pi OS Lite (64-bit)**. Configure custom settings such as hostname, location, and user login. *(Enable Wi-Fi if needed.)*

- Insert the MicroSD card into the Pi and power it up.

- Once the Pi boots, locate it on your network and SSH into it using the credentials you set.

- Update the Pi:
```
sudo apt update && sudo apt upgrade -y
```

- Install dependencies:
```
sudo apt install git bc -y
```

---

Next, we need to enable: `SPI`, `I²C`, and `UART`.

We need to edit the `/boot/firmware/config.txt` file:

```
sudo nano /boot/firmware/config.txt
```

Add the following to the bottom of the file:

```
# Enable SPI
dtparam=spi=on
dtoverlay=spi0-0cs

# Enable I2C
dtparam=i2c_arm=on

# Enable UART (For all Pi versions except Pi 5)
enable_uart=1
```

Note: If doing this on a Pi 5, use this entry for UART instead:

```
dtoverlay=uart0
```

---

Clone the [pyMC_Repeater](https://github.com/rightup/pyMC_Repeater) repository:

```
git clone https://github.com/rightup/pyMC_Repeater.git
cd pyMC_Repeater
```

Install the repeater software:

```
sudo bash manage.sh
```

- In the script menu, select **Install**.
- After installation, it will ask you to configure the radio settings.

```
=== pyMC Repeater Radio Configuration ===

=== Step 0: Set Repeater Name ===

Enter repeater name [mesh-repeater-01] (press Enter to keep):
```

Enter the name you prefer and press Enter.

```
=== Step 1: Select Hardware ===

  1) Waveshare LoRa HAT (waveshare)
  2) uConsole LoRa Module (uconsole)
  3) PiMesh-1W (USA) (pimesh-1w-usa)
  4) PiMesh-1W (UK) (pimesh-1w-uk)
  5) MeshAdv Mini (meshadv-mini)
  6) MeshAdv (meshadv)

Select hardware (1-6):

```

Select **Option 6** or **Option 3** depending on which board you have.

```
=== Step 2: Select Radio Settings ===

Fetching radio settings from API...
Available Radio Settings:
```

Select **13**:  
`13) USA/Canada (Recommended)            ----> 910.525MHz / SF7 / BW62.5 / CR5`

- Let the install finish.

After the install is finished, open a new browser tab and go to:  
`http://<your-pis-ip-address>:8000`  
You should now see the pyMC Repeater web interface!

![pyMC Dashboard](assets/meshadv_node_rpi/meshadv-pymc-dashboard.png)

---

## ⚙️ pyMC Repeater Configuration

To change the configuration of the repeater, edit the `config.yaml` file.

Using nano, edit the file located at:

```
sudo nano /etc/pymc_repeater/config.yaml
```

Inside this file, you can configure:

- Location  
- Public and private key (useful when replacing an existing node)  
- Advert timing interval  

After making changes, restart the service. This can be done using the `manage.sh` script or via systemctl:

```
sudo systemctl restart pymc-repeater.service
```
