module.exports = {
  /**
   * Path to data on filesystem
   * relative to site dir
   * components in this directory will be automatically converted to pages
   */
  path: 'pages',
  /**
   * URL route for the page section of your site
   * do not include trailing slash
   */
  routeBasePath: '/',
  include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
  /**
   * No Route will be created for matching files
   */
  exclude: [
    '**/_*.{js,jsx,ts,tsx,md,mdx}',
    '**/*.test.{js,ts}',
    '**/__tests__/**',
  ],
  /**
   * Theme component used by markdown pages.
   */
  mdxPageComponent: '@theme/MDXPage',
  /**
   * Remark and Rehype plugins passed to MDX
   */
  remarkPlugins: [],
  rehypePlugins: [],
  /**
   * Custom Remark and Rehype plugins passed to MDX before
   * the default Docusaurus Remark and Rehype plugins.
   */
  beforeDefaultRemarkPlugins: [],
  beforeDefaultRehypePlugins: [],
};
