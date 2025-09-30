import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'Meshcore',
    url: '/meshcore',
    img: require('@site/static/img/meshcore.png').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Meshtastic',
    url: '/meshtastic',
    img: require('@site/static/img/meshtastic.jpg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Getting Started',
    url: '/docs/Introduction',
    img: require('@site/static/img/generic_mesh.jpg').default,
    description: (
      <>
      </>
    ),
  },
];

function Feature({img, title, description, altText, url}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={useBaseUrl(url)}>

      <div className="text--center">
        <img src={img}></img>
        <Heading as="h3">{title}</Heading>
      </div>

      </a>
      <div className="text--center padding-horiz--md">
        <p>{description}</p>
        </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
