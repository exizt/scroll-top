const path = require('path');

module.exports = {
  entry: {
    'scroll-top': path.resolve(__dirname, 'src/mix.js')
  },
  output: {
    filename: '[name].mix.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'umd'
    }
  },
  module: {
    rules: [
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