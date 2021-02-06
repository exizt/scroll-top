const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: "production",
  entry: {
    "scroll-to-top": [
      "./src/scroll-to-top.js",
      "./src/css/scroll-to-top.css",
    ]
  },
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname + "/dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use : [MiniCssExtractPlugin.loader,{
          loader: 'css-loader',
          options : {

          }
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: './.babelrc'
          }
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true
      }),
      new CssMinimizerPlugin()
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].min.css"
    }),
  ]
};