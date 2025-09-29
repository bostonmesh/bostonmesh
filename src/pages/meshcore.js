import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import RepeatersList from '@site/src/components/meshcore/RepeatersList';

import Heading from '@theme/Heading';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/meshcore">
              View repeaters
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/meshcore">
              View map
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/meshcore">
              Get connected
            </Link>
          </div>
        </div>
      </header>
      <main className="meshcore">
        <section id="repeaters" className="repeaters">
          <div className="container">
            <h2>What is Meshcore?</h2>
            <div className="about-description">
              <p>MeshCore is a multi-platform system for enabling secure text-based communications utilizing LoRa radio hardware. It can be used for Off-Grid Communication, Emergency Response & Disaster Recovery, Outdoor Activities, Tactical Security including law enforcement, private security and also IoT sensor networks. <a href="https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md" target="_blank" rel="noopener">Learn more about MeshCore →</a></p>
            </div>
          </div>
        </section>

        <RepeatersList />

        {/* Contact Section */}
        <section id="contact" class="contact">
          <div class="container">
            <h2>Join the Network</h2>
            <div class="contact-grid">
              <div class="contact-card">
                <h3>MeshCore Radio Settings</h3>
                <table>
                  <tr>
                    <td><strong>Preset:</strong></td>
                    <td>USA/Canada (Recommended)</td>
                  </tr>
                  <tr>
                    <td><strong>Frequency:</strong></td>
                    <td>910.525 MHz</td>
                  </tr>
                  <tr>
                    <td><strong>Bandwidth:</strong></td>
                    <td>62.5 kHz</td>
                  </tr>
                  <tr>
                    <td><strong>Spreading Factor:</strong></td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <td><strong>Coding Rate:</strong></td>
                    <td>5</td>
                  </tr>
                </table>
              </div>
              <div class="contact-card">
                <h3>Getting Started</h3>
                <ol>
                  <li><strong>Obtain compatible LoRa hardware:</strong>
                    <ul>
                      <li>
                        <a href="https://wiki.uniteng.com/en/meshtastic/station-g2" target="_blank" rel="noopener">Station G2</a> - Best and most powerful Base/Home Repeater (or client) - 20W input power
                      </li>
                      <li>
                        <a href="https://wiki.uniteng.com/meshtastic/nano-g2-ultra" target="_blank" rel="noopener" >Nano G2 Ultra</a> - (recommended!) Most powerful "no external antenna" client/great for in-pocket (5 days of battery)
                      </li>
                      <li>
                        <a href="https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html" target="_blank" rel="noopener" >Wio Tracker L1
                        Pro-E</a> - Rugged powerful "all around" $45 client, rugged (5 days battery)
                      </li>
                      <li>
                        <a href="https://store.rakwireless.com/products/wismesh-tag-meshtastic-gps-lora-tracker-ip66" target="_blank" rel="noopener">WisMesh
                        Tag-E</a> - (recommended!) Credit card-sized, very powerful directional client, for hiking/travel/IP66 waterproof (~5 days of battery)
                      </li>
                      <li>
                        <a href="https://store.rakwireless.com/products/wisblock-lora-starter-kit"
                        target="_blank" rel="noopener">RAKWireless WisBlock Mini</a> - Low powered Serial nodes, Solar nodes, Bots/Automation
                      </li>
                    </ul>
                  </li>
                  <li><strong>Install MeshCore firmware:</strong> <a href="https://flasher.meshcore.co.uk/" target="_blank" rel="noopener" >MeshCore Flasher</a></li>
                  <li><strong>Configure radio settings</strong> (see Radio Settings)</li>
                  <li><strong>Join the network!</strong></li>
                </ol>
              </div>
              <div class="contact-card">
                <h3>MeshCore Channel</h3>
                <p><strong>Boston Area Mesh Planning:</strong></p>
                <div class="channel-hash">
                  <code>0d187c4a636a02f4ef3bd1fb34f6c817</code>
                </div>
                <p class="channel-note">This is the dedicated channel for the Greater Boston mesh network planning and coordination.</p>
                <p><strong>Discord Server:</strong></p>
                <div class="channel-hash">
                  <a href="https://discord.gg/MNY9bxvgbC" target="_blank" rel="noopener">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 127.14 96.36"><path fill="#5865F2" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" /></svg>
                    discord.gg/7kEzKkZ9
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}
