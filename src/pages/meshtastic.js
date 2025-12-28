import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const DiscordIcon = () => (
  <svg
    className="discord-icon"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 127.14 96.36"
  >
    <path
      fill="#5865F2"
      d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
    />
  </svg>
);


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Meshtastic - ${siteConfig.title}`}
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            Meshtastic
          </Heading>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="#map-section">
              View Map
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="#contact">
              Get Connected
            </Link>
          </div>
        </div>
      </header>
      <main className="meshtastice">
        <section id="repeaters" className="repeaters light-bg">
          <div className="container">
            <h2>What is Meshtastic??</h2>
            <div className="about-description">
              <p>Meshtastic is an open-source, long-range mesh communication platform that links phones to low-cost LoRa radios for secure, off-grid text and data messaging. It’s ideal for backcountry group comms, community mesh networks, events, and low-power IoT sensor deployments where cellular or Wi-Fi aren’t available.</p>
              <p><a href="https://meshtastic.org/" target="_blank" rel="noopener noreferrer">Learn more about Meshtastic →</a></p>
            </div>
          </div>
        </section>


        <section id="map-section" className="map-section">
          <div className="container">
            <h2><a href="https://meshtastic.liamcottle.net/?lat=42.379345257263964&lng=288.52706909179693&zoom=10" target="_blank" rel="noopener noreferrer">Network Coverage Map</a></h2>
            <iframe id="meshcore-map-iframe" src="https://meshtastic.liamcottle.net/?lat=42.379345257263964&lng=288.52706909179693&zoom=10" title="description_of_embedded_content" width="100%" height="600"></iframe>
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="contact light-bg">
          <div className="container">
            <h2>Join the Network</h2>
            <div className="contact-grid">
              <div className="contact-card">
                <h3>Meshtastic Radio Settings</h3>
                <div className="radio-settings-table">
                <table>
                  <tr>
                    <td><strong>Region:</strong></td>
                    <td>United States</td>
                  </tr>
                  <tr>
                    <td><strong>Preset:</strong></td>
                    <td>Long Range - Fast (Default)</td>
                  </tr>
                  <tr>
                    <td><strong>Bandwidth:</strong></td>
                    <td>250 kHz</td>
                  </tr>
                  <tr>
                    <td><strong>Spreading Factor:</strong></td>
                    <td>11</td>
                  </tr>
                  <tr>
                    <td><strong>Coding Rate:</strong></td>
                    <td>4</td>
                  </tr>
                </table>
                </div>
              </div>
              <div className="contact-card">
                <h3>Meshtastic Channel</h3>
                <p><strong>Meshtastic Channel:</strong></p>
                <div className="channel-hash">
                  <code>LongFast</code>
                </div>
                <p className="channel-note">Greater Boston Mesh doesn’t use a custom Meshtastic channel. Just use the built-in “LongFast” preset in the app.</p>
                <p><strong>Discord Server:</strong></p>
                <div className="channel-hash">
                  <a
                    className="discord-link"
                    href="https://discord.gg/MNY9bxvgbC"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <DiscordIcon />
                    <span>discord.gg/MNY9bxvgbC</span>
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
