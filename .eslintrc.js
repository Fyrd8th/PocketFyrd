module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'semi': ['error', 'never'],
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'object-curly-newline': ['error', { "multiline": true }]
  },
  'globals': {
    "fetch": false
  }
}