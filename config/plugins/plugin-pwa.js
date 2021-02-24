module.exports = [
  '@docusaurus/plugin-pwa',
  {
    debug: true,
    offlineModeActivationStrategies: ['appInstalled', 'queryString'],
    pwaHead: [
      {
        tagName: 'link',
        rel: 'icon',
        href: '/images/docusaurus.png',
      },
      {
        tagName: 'link',
        rel: 'manifest',
        href: '/manifest.json', // your PWA manifest
      },
      {
        tagName: 'meta',
        name: 'theme-color',
        content: 'rgb(37, 194, 160)',
      },
      {
        tagName: 'meta',
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
      {
        tagName: 'meta',
        name: 'apple-mobile-web-app-status-bar-style',
        content: '#000',
      },
      {
        tagName: 'link',
        rel: 'apple-touch-icon',
        href: '/images/docusaurus.png',
      },
      {
        tagName: 'link',
        rel: 'mask-icon',
        href: '/images/docusaurus.svg',
        color: 'rgb(37, 194, 160)',
      },
      {
        tagName: 'meta',
        name: 'msapplication-TileImage',
        content: '/images/docusaurus.png',
      },
      {
        tagName: 'meta',
        name: 'msapplication-TileColor',
        content: '#000',
      },
    ],
  },
];
