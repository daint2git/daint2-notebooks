const withSass = require('@zeit/next-sass')

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 2,
    localIdentName:
      process.env.NODE_ENV !== 'production'
        ? '[path][name]__[local]--[hash:base64:5]'
        : 'css-[hash:base64:8]',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    })
    return config
  },
})
