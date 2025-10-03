import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Meshcore - ${siteConfig.title}`}
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            Meshcore
          </Heading>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="#map-section">
              View map
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="#contact">
              Get connected
            </Link>
          </div>
        </div>
      </header>
      <main className="meshcore">
        <section id="repeaters" className="repeaters light-bg">
          <div className="container">
            <h2>What is Meshcore?</h2>
            <div className="about-description">
              <p>MeshCore is a multi-platform system for enabling secure text-based communications utilizing LoRa radio hardware. It can be used for Off-Grid Communication, Emergency Response & Disaster Recovery, Outdoor Activities, Tactical Security including law enforcement, private security and also IoT sensor networks.</p>
              <p><a href="https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md" target="_blank" rel="noopener">Learn more about MeshCore →</a></p>
            </div>
          </div>
        </section>


        <section id="map-section" className="map-section">
          <div className="container">
            <h2>Network Coverage Map</h2>
            <iframe id="meshcore-map-iframe" src="https://map.w0z.is/embed/map?lat=42.38492&lng=-71.19312&zoom=12" title="description_of_embedded_content" width="100%" height="600"></iframe>
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" class="contact light-bg">
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
