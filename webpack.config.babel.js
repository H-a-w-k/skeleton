import path from "path";
// The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags.
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        use: [
          // Translates ES6 to ES5
          "babel-loader"
        ]
      },
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        use: [
          // Checks JS syntax
          "eslint-loader"
        ]
      },
      {
        test: /\.scss|css/,
        exclude: /(node_modules)/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "App title",
      template: path.join(__dirname, "src/index.template.html")
    })
  ],
  stats: {
    //Display build info in colors
    colors: true
  },
  devtool: "source-map"
};
