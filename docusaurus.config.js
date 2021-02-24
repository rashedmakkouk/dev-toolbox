/* eslint-disable @typescript-eslint/no-var-requires */

const pluginContentDocs = require('./config/presets/plugin-content-docs');
// const pluginContentPages = require('./config/presets/plugin-content-pages');
const pluginSitemap = require('./config/presets/plugin-sitemap');
const themeClassic = require('./config/presets/theme-classic');

// const pwaPlugin = require('./config/plugins/plugin-pwa');

// const algolia = require('./config/theme/algolia');
// const pluginGoogleGtag = require('./config/theme/plugin-google-gtag');
const prism = require('./config/theme/prism');

const navbar = require('./config/theme/navbar');
const footer = require('./config/theme/footer');

module.exports = {
  baseUrl: '/dev-toolbox/',
  favicon: 'images/favicon.ico',
  onBrokenLinks: 'throw',
  organizationName: 'org',
  plugins: [
    // '@docusaurus/plugin-google-gtag',
    // pwaPlugin,
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        /** Debug defaults to true in dev, false in prod. */
        debug: undefined,
        docs: pluginContentDocs,
        // pages: pluginContentPages,
        sitemap: pluginSitemap,
        theme: themeClassic,
      },
    ],
  ],
  projectName: 'dev-toolbox',
  tagline: 'A Dev - Toolbox',
  themeConfig: {
    // ...pluginGoogleGtag,
    footer,
    navbar,
    prism,
  },
  title: 'dev-toolbox',
  url: 'https://domain-name.com',
};
