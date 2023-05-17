module.exports = {
  rules: {
    semi: ['error', 'always'],
    extends: [
      'standard',
      'eslint:recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'plugin:@typescript-eslint/recommended',
      'plugin:promise/recommended',

      /**
       * The Prettier plugin bellow is available from the package `eslint-plugin-prettier`.
       * It needs to be registered as the last extension, this prevents
       * conflicts between Prettier and ESLint rules, and more.
       */
      'plugin:prettier/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx']
      },
      'import/resolver': {
        typescript: {}
      }
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' }
      ],
      '@typescript-eslint/no-non-null-assertion': 'off',
      'no-undef': 'off'
    },
    overrides: [
      {
        files: [
          '**/*.test.{js,ts,tsx}',
          '**/*.tests.{js,ts,tsx}',
          '**/*.spec.{js,ts,tsx}'
        ],
        env: {
          jest: true,
          node: true
        },
        rules: {
          'import/first': 'off'
        }
      }
    ],
    ignorePatterns: [
      '**/*/node_modules/*',
      '/examples/*',
      '/dist/*',
      '/build/*'
    ]
  }
};
