// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import storybook from 'eslint-plugin-storybook';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
    plugins: {
      storybook,
    },
    rules: {
      ...storybook.configs.recommended.rules,
    },
  },
];
