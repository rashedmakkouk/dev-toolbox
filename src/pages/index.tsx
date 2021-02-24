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
    imageUrl: 'images/undraw_docusaurus_mountain.svg',
    description: <>.</>,
  },
  {
    title: 'DevOps',
    imageUrl: 'images/undraw_docusaurus_tree.svg',
    description: (
      <>Resources about our terms of service and community guidelines.</>
    ),
  },
  {
    title: 'How-to',
    imageUrl: 'images/undraw_docusaurus_react.svg',
    description: <>.</>,
  },
  {
    title: 'Resources',
    imageUrl: 'images/undraw_docusaurus_react.svg',
    description: <>.</>,
  },
  {
    title: 'Style Guide',
    imageUrl: 'images/undraw_docusaurus_tree.svg',
    description: (
      <>Resources about our terms of service and community guidelines.</>
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
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
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
