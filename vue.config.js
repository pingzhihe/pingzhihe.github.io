const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  transpileDependencies: [],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'  
    : '/',
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: path.resolve(__dirname, 'CNAME'), to: path.resolve(__dirname, 'dist') }
        ]
      })
    ]
  }
};
