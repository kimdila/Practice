
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    historyApiFallback: {
      rewrites: [{ from: /info\/?.*/, to: "/info.html" }],
    },
  },
  entry: { index: "./src/pages/main/index.js", info: "./src/pages/info/info.js", },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist",),
    // publicPath: "dist" //Do we need public path here?
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/env' ],
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};
