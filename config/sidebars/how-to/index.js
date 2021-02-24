/* eslint-disable @typescript-eslint/no-var-requires */

const devops = require('./sections/devops');
const general = require('./sections/general');
const git = require('./sections/git');
const gitlab = require('./sections/gitlab');
const kubernetes = require('./sections/kubernetes');
const linux = require('./sections/linux');
const windows = require('./sections/windows');

module.exports = [
  'how-to/index',
  devops,
  git,
  linux,
  windows,
  kubernetes,
  gitlab,
  general,
];
