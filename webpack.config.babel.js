import path from "path";
// The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags.
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader"
          }
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
