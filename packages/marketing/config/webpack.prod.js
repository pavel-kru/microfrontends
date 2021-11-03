const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const sharedDependencies = require('../package.json').dependencies;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      exposes: {
        './MarketingApp': './src/bootstrap.js',
      },
      shared: sharedDependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
