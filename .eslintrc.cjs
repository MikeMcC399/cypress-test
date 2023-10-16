module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-prettier',
    'simple-import-sort',
    'react',
    'react-refresh',
    'jest',
  ],
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  ignorePatterns: ['node_modules', '/packages/types/src/generated/*'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'simple-import-sort/imports': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    'react-refresh/only-export-components': 'warn',
    camelcase: 'warn',
    'react/no-unknown-property': ['error', { ignore: ['fetchpriority'] }],
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: '*.mdx',
      extends: 'plugin:mdx/recommended',
    },
    {
      files: ['*.?(c)js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
      },
    },
  ],
};
