const path = require('path');

module.exports = env => ({
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        use: ['ts-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
    ],
  },
});
