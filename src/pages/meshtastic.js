import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Meshtastic
        </Heading>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Meshtastic - ${siteConfig.title}`}
    >
      <HomepageHeader />
      <main>
        <section className="light-bg">
          <div className="container">
            <h2>What is Meshtastic?</h2>
            <p>Meshtastic is an open source, off-grid, decentralized, mesh network built to run on affordable, low-power devices. Read more about Meshtastic at the <a href="https://meshtastic.org/">official site</a>!</p>
            <br />
            <p>The Boston Meshtastic network runs on the LongFast preset.</p>
            <br />
            <p><b><i>Want to contribute?</i></b></p>
            <p>We are looking for volunteers to help enhance and expand the Meshtastic portion of the <a href="/">bostonme.sh</a> website and resources. If you are interested, please reach out on <a href="https://discord.gg/MUVASVEEES" target="_blank">Discord</a> or submit changes directly on <a href="https://github.com/bostonmesh/bostonmesh" target="_blank">Github</a>!</p>
          </div>
        </section>

        <section id="map-section" className="map-section">
          <div className="container">
            <h2>Network Coverage Map</h2>
            <iframe id="meshcore-map-iframe" src="https://meshtastic.liamcottle.net/?lat=42.371227435069805&lng=288.91227722167974&zoom=11" title="description_of_embedded_content" width="100%" height="600"></iframe>
          </div>
        </section>
      </main>
    </Layout>
  );
}
