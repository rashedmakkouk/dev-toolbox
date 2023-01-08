import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { FeatureProps } from '../types';

const features: FeatureProps[] = [
  {
    description: 'Development resources.',
    imageUrl: 'images/icons/api_FILL0_wght400_GRAD0_opsz48.svg',
    name: 'development',
    title: 'Development',
  },
  {
    description: 'DevOps resources.',
    imageUrl: 'images/icons/terminal_FILL0_wght400_GRAD0_opsz48.svg',
    name: 'devops',
    title: 'DevOps',
  },
  {
    description: 'Guides and step-by-step tutorials.',
    imageUrl: 'images/icons/help_FILL0_wght400_GRAD0_opsz48.svg',
    name: 'how-to',
    title: 'How-to',
  },
  {
    description: 'General useful information.',
    imageUrl: 'images/icons/description_FILL0_wght400_GRAD0_opsz48.svg',
    name: 'resources',
    title: 'Resources',
  },
  {
    description: 'Best Practices, inspiration and useful links.',
    imageUrl: 'images/icons/shapes_FILL0_wght400_GRAD0_opsz48.svg',
    name: 'style-guides',
    title: 'Style Guides',
  },
];

function FeatureBlock({
  description,
  imageUrl,
  name,
  title,
  url,
}: FeatureProps): ReactElement {
  const imageBaseUrl = useBaseUrl(imageUrl);

  return (
    <div className={clsx('col col--4 featureContainer')}>
      <div className={clsx('row row--2')}>
        {!imageBaseUrl ? null : (
          <div className="text--left">
            <img
              className={clsx('featureImage padding--16')}
              src={imageBaseUrl}
              alt={title ?? name}
            />
          </div>
        )}
        <Link to={url ?? `/${name}`} className="padding--16">
          <h1>{title ?? name}</h1>
        </Link>
      </div>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const { siteConfig } = useDocusaurusContext();

  const { title, tagline } = siteConfig;

  return (
    <Layout title={title} description={tagline}>
      <header className={clsx('hero hero--primary heroBanner')}>
        <div className="container">
          <h1 className="hero__title">{title}</h1>
          <p className="hero__subtitle">{tagline}</p>
        </div>
      </header>
      <main>
        <section className="section">
          <div className={clsx('container padding--16')}>
            <div className="row">
              {features.map((props, idx) => (
                <FeatureBlock key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
