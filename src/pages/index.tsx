import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Development',
    // imageUrl: 'images/*.svg',
    description: <>Development resources.</>,
  },
  {
    title: 'DevOps',
    // imageUrl: 'images/*.svg',
    description: (
      <>DevOps resources.</>
    ),
  },
  {
    title: 'How-to',
    // imageUrl: 'images/*.svg',
    description: <>Guides and step-by-step tutorials.</>,
  },
  {
    title: 'Resources',
    // imageUrl: 'images/*.svg',
    description: <>General useful information.</>,
  },
  {
    title: 'Style Guides',
    // imageUrl: 'images/*.svg',
    description: (
      <>Best Practices, inspiration and useful links.</>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);

  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const { siteConfig } = useDocusaurusContext();

  const { title, tagline } = siteConfig;

  return (
    <Layout
      title={title}
      description={tagline}
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{title}</h1>
          <p className="hero__subtitle">{tagline}</p>
          {/* <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('resources/')}
            >
              Get Started here
            </Link>
          </div> */}
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
