module.exports = ({ config }) => {
  // create new rule loader for .scss file
  config.module.rules.push({
    test: /\.scss$/,
    loaders: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 2,
          localIdentName: '[path][name]__[local]--[hash:base64:5]',
        },
      },
      'postcss-loader',
      'sass-loader',
    ],
  })

  return config
}
