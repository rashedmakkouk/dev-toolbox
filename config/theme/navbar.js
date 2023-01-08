const menuItemsRight = [
  {
    label: 'Development',
    position: 'right',
    to: '/development',
  },
  {
    label: 'DevOps',
    position: 'right',
    to: '/devops',
  },
  {
    label: 'How-to',
    position: 'right',
    to: '/how-to',
  },
  {
    label: 'Resources',
    position: 'right',
    to: '/resources',
  },
  {
    label: 'Style Guides',
    position: 'right',
    to: '/style-guides',
  },
];

module.exports = {
  items: [...menuItemsRight],
  logo: {
    alt: 'Logo',
    src: 'images/logo.svg',
  },
  title: 'dev-toolbox',
};
