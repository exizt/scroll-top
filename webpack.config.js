const path = require("path");

module.exports = {
  entry: "./src/sh-scrollup.js",
  output: {
    filename: "sh-scrollup.min.js",
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
      }
    ]
  },
  mode: "production"
};