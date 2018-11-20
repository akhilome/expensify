const { join } = require('path');

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    entry: './src/app.jsx',
    output: {
      path: join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: join(__dirname, 'public'),
      historyApiFallback: true
    }
  };
};
