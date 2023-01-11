"use strict";
const path = require("path");
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
  entry: "./index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  // devServer: {
  //   allowedHosts: [
  //     'host.com',
  //     'subdomain.host.com',
  //     'subdomain2.host.com',
  //     'host2.com',
  //   ],
  // },
  // historyApiFallback: true

  // watch: true,
  // html loaders test
  // test: /\.html$/,
  // use: ["html-loader"],
  // https: true,
  // proxy: {
  //   "/api": "http://localhost:8081/",
  // },
  // server: "https",
};
