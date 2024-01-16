const path = require("path");

module.exports = {
  mode: "development",
  entry: "./app/javascript/packs/hello_react.jsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public", "packs"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
