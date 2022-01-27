const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/js/app.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "app.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "./src/index.html", to: "./" }],
    }),
  ],
};
