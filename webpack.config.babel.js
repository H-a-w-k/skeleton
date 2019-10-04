import path from "path";
// The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags.
import HtmlWebpackPlugin from "html-webpack-plugin";
// Will lint style files like scss
import StyleLintPlugin from "stylelint-webpack-plugin";
// Adds possibility to extract css from js files to css files.
import MiniCssExtractPlugin from "mini-css-extract-plugin";
// Cleans the dist folder before every build
import { CleanWebpackPlugin } from "clean-webpack-plugin";

export default {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
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
          //Extracts css to own file
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    //Cleans the output folder before every build
    new CleanWebpackPlugin(),
    //Let's webpack bundle html files. Creates index.html in dist out of index.template.html.
    new HtmlWebpackPlugin({
      title: "App title",
      template: path.join(__dirname, "src/index.template.html")
    }),
    //Adds linting to style files like css and scss
    new StyleLintPlugin({ context: path.join(__dirname, "src") }),
    //Extracts css to own files.
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].css",
      ignoreOrder: false // Enable to remove warnings about conflicting order
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
