const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
  // const ExtractTextPlugin = require('extract-text-webpack-plugin')

const srcDir = resolve(__dirname, '../src')

module.exports = {
  entry: `${srcDir}/index.js`,
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      loader: 'standard-loader',
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:6]"
      }, ]
    }, {
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:6]"
      }, {
        loader: "sass-loader"
      }]
    }]
  },

  resolve: {
    modulesDirectories: ['node_modules', 'components']
  },

  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${srcDir}/index.html`
    }),
    new DashboardPlugin(),
  ]
}