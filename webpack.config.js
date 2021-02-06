const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin  = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  mode: "production",  
  entry: "./src/scroll-to-top.js",
  output: {
    filename: "scroll-to-top.min.js",
    path: path.resolve(__dirname + "/dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: './.babelrc'
          }
        }
      },
      { 
        test: /\.css$/, 
        use : [MiniCssExtractPlugin.loader,'css-loader'] 
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({}),
      new OptimizeCSSAssetsPlugin()
    ]
  },  
  plugins: [
    new MiniCssExtractPlugin({ 
      filename: 'scroll-to-top.min.css' 
    })
  ]
};