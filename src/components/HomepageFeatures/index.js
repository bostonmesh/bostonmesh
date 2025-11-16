import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'Meshcore',
    url: '/meshcore',
    img: require('@site/static/img/meshcore.png').default,
    altText: 'Meshcore logo',
    imgClassName: styles.meshcoreLogo,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Meshtastic',
    url: '/meshtastic',
    img: require('@site/static/img/meshtastic.jpg').default,
    altText: 'Meshtastic logo',
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Getting Started',
    url: '/docs/Introduction',
    img: require('@site/static/img/generic_mesh.jpg').default,
    altText: 'Network graph artwork',
    description: (
      <>
      </>
    ),
  },
];

function Feature({img, title, description, altText, url, imgClassName}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={useBaseUrl(url)}>

      <div className="text--center">
        <img className={clsx(styles.featureImage, imgClassName)} src={img} alt={altText ?? `${title} graphic`}></img>
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
