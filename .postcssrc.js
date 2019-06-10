// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  'parser': 'sugarss',
  'plugins': {
    'stylelint': {},
    'postcss-import': { path: './src/assets/css' },
    'postcss-mixins': {},
    'postcss-nested': {},
    'postcss-reporter': {},
    'postcss-url': {},
    'postcss-cssnext': {},
    // to edit target browsers: use 'browserslist' field in package.json
    'autoprefixer': {
      'browsers': [
        '> 5%',
        'iOS >= 6',
        'Android >= 2.3',
        'ExplorerMobile >= 10'
      ]
    },
    'postcss-pxtorem': {
      'rootValue': 37.5,
      'propList': ['*']
    }
  }
}
