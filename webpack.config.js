module.exports = {
  entry: './src/App/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        use:'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        use:'style-loader',
        test: /\.css$/,
        exclude: /node_modules/,
      }
    ]
  }
};