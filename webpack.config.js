const webpack = require('webpack');
const path = require('path');

process.env.NODE_ENV = 'development';

module.exports = {
   entry: [
      'webpack-hot-middleware/client',

      './src/index.js'
   ],

   output: {
      path: __dirname,

      publicPath: '/',

      filename: 'bundle.js'
   },

   plugins: [
      new webpack.HotModuleReplacementPlugin()
   ],

   module: {
      loaders: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'react-hot-loader'
         },
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['react-app']
            }
         }
      ]
   }
};
