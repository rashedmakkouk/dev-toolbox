module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@rashedmakkouk/eslint-config"
  ],
  parserOptions: {
    jsx: true,
  },
  plugins: [],
  settings: {
    react: {
      version: 'latest',
    },
  },
  overrides: [
    {
      files: ['*'],
      rules: {
        'react/prop-types': 0,
      },
    },
  ],
};
