const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  //edit entry
  entry: ["./client/index.js"],
  output: {
    path: `${__dirname}/build`,
    filename: "bundle.js",
  },
  devServer: {
    publicPath: "http://localhost:8080",
    proxy: {
      //edit proxy d
      "/api": "http://localhost:3000",
    },
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
