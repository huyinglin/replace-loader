const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  resolveLoader: { // 当使用一个loader时，到下面的数组地址里找。所以使用本地loader可以不用发布
    modules: ['node_modules', './loaders']
  },
  module: {
    rules: [{
      test: /\.js/,
      use: [{
        loader: 'replaceLoader',
        // loader: path.resolve(__dirname, './loaders/replaceLoader.js'),
        options: {
          name: 'huyinglin'
        }
      }],
    }]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  }
}
