const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

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
  resolve: {
    extensions: ['.js', '.jsx']
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
        loader: 'style-loader'
      }, {
        loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:6]'
      }, ]
    }, {
      test: /\.(scss)$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:6]'
      }, {
        loader: 'resolve-url-loader'
      }, {
        loader: 'sass-loader'
      }]
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'url-loader'
    }, {
      test: /\.json$/,
      loader: 'json'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${srcDir}/index.html`
    }),
    new DashboardPlugin(),
  ]
}