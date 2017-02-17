var webpack = require('webpack')

module.exports = {
  entry: './test-entry.js',
  output: {
    path: __dirname,
    filename: 'test-bundle.js'
  },
  module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}