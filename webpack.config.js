const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        }],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [new HtmlWebpackPlugin({
    templateContent: `
<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title> ASUS Global</title>
      <link rel="icon" 
      type="image/png" 
      href="https://external-preview.redd.it/PWytDBzDgUyXcwPVR1dpRk626T0IZNkZNIvcACfGQFU.png?auto=webp&s=fdd13ab8f38bf0c7a6073decce0b14b54121c4f7" />
    </head>
    <body>
      <div id="root"></div>
    </body>
</html>`,
  })],
}
