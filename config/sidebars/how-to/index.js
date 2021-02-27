/* eslint-disable @typescript-eslint/no-var-requires */

const devops = require('./devops');
const general = require('./general');
const git = require('./git');
const gitlab = require('./gitlab');
const kubernetes = require('./kubernetes');
const linux = require('./linux');
const windows = require('./windows');

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
