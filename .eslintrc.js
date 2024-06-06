module.exports = {
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 2020,
    },
    overrides: [
      {
        files: ['**/*.svelte'],
        parser: 'eslint-plugin-svelte3',
        settings: {
          'svelte3/ignore-styles': () => true,
        },
      },
    ],
  };
  