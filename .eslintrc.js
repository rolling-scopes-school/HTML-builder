module.exports = {
  env: {
    commonjs: true,
    es2022: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'prettier/prettier': 'error',
  },
  ignorePatterns: ['03-files-in-folder/secret-folder/**/*.js'],
};
