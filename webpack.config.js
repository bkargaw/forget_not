var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/forget_not.jsx",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        include: [
            path.resolve(__dirname, "not_exist_path")
        ],
        loader: "style!css"
      },
      {
          test: /\.(png|jpg|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url?limit=512&&name=[path][name].[ext]?[hash]'
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions:[ "*", ".js", ".jsx" ]
  }
};
