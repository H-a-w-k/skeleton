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
  // Webpack will host a local dev server on port 8080
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true, //Enables gzip compression. Used with webpack-dev-server --compress. See the result in the headers of the bundle request. Content-Encoding: gzip
    port: 8080, //Port used
    open: true, //Opens browser when web-pack-server is run
    publicPath: "/", // base path for all the assets within your application.
    historyApiFallback: true // redirect 404s to /index.html
  },
  devtool: "source-map"
};
