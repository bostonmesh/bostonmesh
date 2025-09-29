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
        <div className="container">
          <h2>What is Meshcore?</h2>
          <div className="about-description">
            <p>MeshCore is a multi-platform system for enabling secure text-based communications utilizing LoRa radio hardware. It can be used for Off-Grid Communication, Emergency Response & Disaster Recovery, Outdoor Activities, Tactical Security including law enforcement, private security and also IoT sensor networks. <a href="https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md" target="_blank" rel="noopener">Learn more about MeshCore →</a></p>
          </div>
        </div>

        <RepeatersList />
      </main>
    </Layout>
  );
}
