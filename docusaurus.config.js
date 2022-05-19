// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
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
  /** Info */
  title: 'dev-toolbox',
  tagline: 'A Dev Toolbox',
  url: 'https://github.com/rashedmakkouk/dev-toolbox',
  baseUrl: '/',
  favicon: 'images/favicon.ico',
  /**
   * GitHub pages deployment config.
   * If you aren't using GitHub pages, you don't need these.
   */
  organizationName: 'rashedmakkouk',
  projectName: 'dev-toolbox',
  deploymentBranch: "build",
  /** Config */ 
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  /**
   * Even if you don't use internalization, you can use this field to set useful
   * metadata like html lang. For example, if your site is Chinese, you may want
   * to replace "en" with "zh-Hans".
   */
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    // '@docusaurus/plugin-google-gtag',
    // pwaPlugin,
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        /** Debug defaults to true in dev, false in prod. */
        debug: undefined,
        docs: pluginContentDocs,
        // pages: pluginContentPages,
        sitemap: pluginSitemap,
        theme: themeClassic,
      }),
    ],
  ],
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    // ...pluginGoogleGtag,
    footer,
    navbar,
    prism,
  }),
  trailingSlash: false,
};
