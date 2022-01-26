const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(ts(x)?)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js(x)?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          // 'sass-loader',
        ],
      },
    ],
  },

  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },

  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },

  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
