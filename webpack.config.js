const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack')

module.exports = (env) => {
  return {
    output: {
      path: path.join(__dirname, "/dist"), // the bundle output path
      filename: "bundle.js", // the name of the bundle
    },
    plugins: [
      new webpack.DefinePlugin({
        LEVEL: JSON.stringify(env.LEVEL)
      }),
      new HtmlWebpackPlugin({
        template: "src/index.html", // to import index.html file inside index.js
      }),
    ],
    devtool: 'inline-source-map',
    devServer: {
      //port: 3330, // you can change the port
    },
    devServer: {
      historyApiFallback: true,
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/, // .js and .jsx files
          exclude: /node_modules/, // excluding the node_modules folder
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /.\.module\.css$/, // Match CSS files with .module.css extension
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]__[hash:base64:5]'
                }
              }
            }
          ]
        },
        {
          test: /\.css$/, // Match regular CSS files
          exclude: /\.module\.css$/, // Exclude CSS files with .module.css extension
          use: ['style-loader', 'css-loader'] //, 
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
          loader: "url-loader",
          options: { limit: false },
        },
        {
          test: /\.(jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
  }
};
