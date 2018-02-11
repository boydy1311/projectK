const webpack = require('webpack');
const path = require('path');

const appDir = path.resolve(__dirname, 'prod');
const srcDir = path.resolve(__dirname, 'source');

const config = {
  entry: srcDir + '/app/index.js',
  output: {
    path: appDir + '/app',
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: srcDir,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }
    ]
  }
};

module.exports = config;
