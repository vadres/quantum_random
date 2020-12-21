const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
  mode: 'development',
  entry: './src/app/index.tsx',
  output: {
    path: path.join(__dirname, 'public/js'),
    publicPath: 'public/js',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
        }
      }
    ]
  },
  devServer: {
    contentBase: './public',
    writeToDisk: true,
    historyApiFallback: true
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}