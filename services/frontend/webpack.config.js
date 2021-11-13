const BrowserSyncPlugins = require('browser-sync-webpack-plugin');
const { ProvidePlugin } = require('webpack');
const config = require('./src/config');
const path = require('path');

const port = config.server.port;

module.exports = {
  mode: 'development',
  entry: '/src/boot.jsx',
  output: {
    path: path.join(__dirname, '/src/public/dist'),
    publicPath: '/src',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new BrowserSyncPlugins({
      proxy: 'http://localhost:' + port,
    }),
    new ProvidePlugin({
      React: 'react',
    }),
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, '/src'),
    },
    extensions: ['.js', '.jsx'],
  },
};
