var webpack = require('webpack');

module.exports = {
  entry: './react/index.jsx',
  output: {
    // Output the bundled file.
    path: './react',
    // Use the name specified in the entry key as name for the bundle file.
    filename: 'compiled.js'
  },
  module: {
    loaders: [
      {
        // Test for js or jsx files.
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  externals: {
    // Don't bundle the 'react' npm package with the component.
    'react': 'React'
  },
  resolve: {
    // Include empty string '' to resolve files by their explicit extension
    // (e.g. require('./somefile.ext')).
    // Include '.js', '.jsx' to resolve files by these implicit extensions
    // (e.g. require('underscore')).
    extensions: ['', '.js', '.jsx']
  }
};