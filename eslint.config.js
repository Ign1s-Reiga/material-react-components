const reactPlugin = require('eslint-plugin-react');
const hooksPlugin = require('eslint-plugin-react-hooks');
const stylisticPlugin = require('@stylistic/eslint-plugin');
const storybookPlugin = require('eslint-plugin-storybook');
const typescriptParser = require('@typescript-eslint/parser');

module.exports = [
  {
    languageOptions: {
      parser: typescriptParser
    },
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    plugins: {
      react: reactPlugin,
      'react-hooks': hooksPlugin,
      'storybook': storybookPlugin,
      '@stylistic': stylisticPlugin
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...hooksPlugin.configs.recommended.rules,
      ...storybookPlugin.configs.recommended.rules,
      ...stylisticPlugin.customize({
        braceStyle: '1tbs',
        commaDangle: 'always-multiline',
      }),
    },
  }
];

