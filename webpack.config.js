var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  devServer: {
    hot: true,
    inline: true
  },
  entry: [
    'webpack-hot-middleware/client?reload=true',
    __dirname + '/src/index.js',
  ],

  output: {
    publicPath: '/assets/',
    path: __dirname + '/assets/',
    filename: 'script.js',
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style', // backup loader when not building .css file
          'css!sass' // loaders to preprocess CSS
        )
      },
      {
        test: /\.html$/,
        loader: "raw-loader"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css'),
  ]
};
