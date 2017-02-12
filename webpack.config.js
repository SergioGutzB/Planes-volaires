const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.jsx'
  },
  output: {
    path: path.join(__dirname, './build'),
    filename: 'bundle.js'
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    host: '0.0.0.0',
    port: '8080',
    inline: true
  },
  module: {
    rules: {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      user: [
        'babel-loader'
      ]
      test: /(\.css|\.scss)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader'
          options: {
            sourceMap: true,
            modules: true,
            importLoaders: true,
            localIdentName: "[name]__[local]__[hash:base64:5]"
          }
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: function() {
              return [
                require("autoprefixer")
              ];
            }
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }]
      })
    }
    "
  },
  plugins: [
    new ExtraTextPlugin('styles.css');
  ]
}
