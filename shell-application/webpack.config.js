const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
});
module.exports = {
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3001,
    historyApiFallback: {
      index: "/public/index.html",
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$|\.jsx?$|\.m?ts$|\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader", // Handles type checking and TypeScript compilation
            options: {
              transpileOnly: true, // Skip type checking (done by ts-loader)
            },
          },
          "babel-loader", // Transpiles modern JavaScript features with Babel
        ],
        include: path.resolve(__dirname, "src"),
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    htmlPlugin,
    new ModuleFederationPlugin({
      name: "ShellApplication",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/Button",
      },
      shared: {
        react: { singleton: true, eager: true },
        "react-dom": { singleton: true, eager: true },
      },
    }),
  ],
  stats: {
    errorDetails: true,
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};

// Checkout: "Checkout@http://localhost:3000/remoteEntry.js"
