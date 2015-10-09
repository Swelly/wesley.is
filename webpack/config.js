var path = require('path');
var util = require('util');
var autoprefixer = require('autoprefixer');
var pkg = require('../package.json');

var loaders = require('./loaders');
var plugins = require('./plugins');

var DEV = process.env.NODE_ENV === 'development';

var jsBundle = path.join('js', util.format('[name].%s.js', pkg.version));

var entry = {
  app: ['./app.jsx']
};

if (DEV) {
  entry.app.push(
    util.format(
      'webpack-dev-server/client?http://%s:%d',
      pkg.config.devHost,
      pkg.config.devPort
    )
  );
  entry.app.push('webpack/hot/dev-server');
}

var config = {
  context: path.join(__dirname, '../app'),
  cache: DEV,
  debug: DEV,
  target: 'web',
  devtool: DEV ? 'inline-source-map' : false,
  entry: entry,
  output: {
    path: path.resolve(pkg.config.buildDir),
    publicPath: '/',
    filename: jsBundle,
    pathinfo: false
  },
  module: {
    loaders: loaders
  },
  postcss: [
    autoprefixer
  ],
  plugins: plugins,
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  },
  devServer: {
    contentBase: path.resolve(pkg.config.buildDir),
    hot: true,
    noInfo: false,
    inline: true,
    stats: { colors: true }
  }
};

module.exports = config;
