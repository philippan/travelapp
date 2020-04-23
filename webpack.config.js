const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: "production", 
    entry: "./src/client/js/app.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: "/",
      library: "MyLibrary",
      libraryTarget: "umd",
    },
    devtool: "source-map", 
    context: __dirname, 
    target: "web",
    stats: "errors-only",
    module: {
      rules: [
          {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-env']
                  }
              }
          },
          {
              test: /\.js$/,
              use: ["source-map-loader"],
              enforce: "pre"
          },
          {
              test: /\.html$/i,
              loader: 'html-loader',
          },
          {
              test: /\.json$/,
              loader: 'json-loader'
          },
          {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
          },
          {
              test: /\.s(a|c)ss$/,
              use: ['style-loader', 'css-loader', 'sass-loader']
          }
      ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html"
        }),
        new CleanWebpackPlugin(),
        new Dotenv()
    ]
}