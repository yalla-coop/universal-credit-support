module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
    mocha: true,
  },
  extends: ['airbnb-base', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'import/no-anonymous-default-export': 0,
    'import/prefer-default-export': 0,
    'no-underscore-dangle': 0,
    'destructuring-assignment': 0,
    'consistent-return': 0,
    'dot-notation': 0,
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        singleQuote: true,
        endOfLine: 'auto',
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  plugins: ['prettier'],
};
