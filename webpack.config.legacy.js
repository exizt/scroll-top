const path = require('path');

module.exports = {
  entry: {
    'scroll-top': path.resolve(__dirname, 'src/app.ts')
  },
  output: {
    filename: '[name].legacy.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'umd'
    },
    environment: {
      arrowFunction: false,
      const: false,
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: "tsconfig.legacy.json"
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"], // 모듈 위치
    extensions: [".ts", ".js"],
  },
};