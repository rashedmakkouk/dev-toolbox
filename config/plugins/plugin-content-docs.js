/* eslint-disable sort-keys */

/**
 * {@link https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs}
 */

const sidebarPath = require.resolve('../sidebars/main.js');

module.exports = {
  /**
   * Path to data on filesystem relative to site dir.
   */
  path: 'content',
  /**
   * URL for editing a doc in the website repo.
   * Example: 'https://github.com/facebook/docusaurus/edit/master/website/'
   */
  editUrl: 'https://github.com/rashedmakkouk/dev-toolbox/edit/main/',
  /**
   * URL route for the docs section of your site.
   * *DO NOT* include a trailing slash.
   */
  routeBasePath: '/',
  include: ['**/*.md', '**/*.mdx'], // Extensions to include.
  exclude: [
    '**/_*.{js,jsx,ts,tsx,md,mdx}',
    '**/_*/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/__tests__/**',
  ],
  /**
   * Path to sidebar configuration for showing a list of markdown pages.
   * Warning: will change
   */
  sidebarPath,
  breadcrumbs: true,
  /**
   * Theme components used by the docs pages
   */
  docLayoutComponent: '@theme/DocPage',
  docItemComponent: '@theme/DocItem',
  docTagsListComponent: '@theme/DocTagsListPage',
  docTagDocListComponent: '@theme/DocTagDocListPage',
  docCategoryGeneratedIndexComponent: '@theme/DocCategoryGeneratedIndexPage',
  /**
   * Remark and Rehype plugins passed to MDX
   */
  remarkPlugins: [
    /* require('remark-math') */
  ],
  rehypePlugins: [],
  /**
   * Custom Remark and Rehype plugins passed to MDX before
   * the default Docusaurus Remark and Rehype plugins.
   */
  beforeDefaultRemarkPlugins: [],
  beforeDefaultRehypePlugins: [],
  /**
   * Whether to display the author who last updated the doc.
   */
  showLastUpdateAuthor: true,
  /**
   * Whether to display the last date the doc was updated.
   */
  showLastUpdateTime: true,
  /**
   * By default, versioning is enabled on versioned sites.
   * This is a way to explicitly disable the versioning feature.
   */
  disableVersioning: false,
  includeCurrentVersion: true,
  /**
   * The last version is the one we navigate to in priority on versioned sites
   * It is the one displayed by default in docs navbar items
   * By default, the last version is the first one to appear in versions.json
   * By default, the last version is at the "root" (docs have path=/docs/myDoc)
   * Note: it is possible to configure the path and label of the last version
   * Tip: using lastVersion: 'current' make sense in many cases
   */
  lastVersion: undefined,
  /**
   * The docusaurus versioning defaults don't make sense for all projects
   * This gives the ability customize the label and path of each version
   * You may not like that default version
   */
  versions: {
    /*
    Example configuration: 
    current: {
      label: 'Android SDK v2.0.0 (WIP)',
      path: 'android-2.0.0',
    },
    '1.0.0': {
      label: 'Android SDK v1.0.0',
      path: 'android-1.0.0',
    },
    */
  },
  /**
   * Sometimes you only want to include a subset of all available versions.
   *
   * Tip: limit to 2 or 3 versions to improve startup and build time in dev and
   * deploy previews
   *
   * ex: ["current", "1.0.0", "2.0.0"]
   */
  onlyIncludeVersions: undefined,
};
