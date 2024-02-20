module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*jsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': [
          'error',
          {
            trailingComma: 'all',
            tabWidth: 2,
            singleQuote: true,
            bracketSpacing: true,
            eslintIntegration: true,
            printWidth: 120,
            arrowParens: 'avoid',
            bracketSameLine: true,
          },
        ],
      },
    },
  ],
};
