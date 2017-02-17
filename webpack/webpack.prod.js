const { resolve } = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OfflinePlugin = require('offline-plugin')
const webpack = require('webpack')

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});


module.exports = {
  context: resolve(__dirname, '../src'),
  entry: {
    app: `./index.js`,
    vendor: ['react', 'react-dom', 'react-router', 'react-router-dom']
  },
  output: {
    path: resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash:6].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:6]',
      }),
    }, {
      test: /\.scss$/,
      loader: extractSass.extract({
        fallback: "style-loader",
        use: [{
          loader: "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:6]",
          options: {
            sourceMap: true
          }
        }, {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }]        
      })
    }]
  },
  devtool: 'source-map',
  performance: {
    hints: "error"
  },
  // resolve: {
  //   alias: {
  //     react: 'preact-compat',
  //     'react-dom': 'preact-compat'
  //   }
  // },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: resolve(__dirname, '..')
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `./index.html`
    }),
    new ExtractTextPlugin({
      filename: 'styles.[chunkhash:6].css',
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new OfflinePlugin(),
    extractSass
  ]
}