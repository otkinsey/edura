const webpack = require("webpack");

module.exports = {
  entry: " localhost:3000/images/index.js",
  module: {
    rules: [
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "localhost:3000/images/[hash]-[name].[ext]",
            },
          },
        ],
      },
    ],
  },
};
