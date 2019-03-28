module.exports = {
  plugins: [
    require('postcss-custom-media')(),
    require('autoprefixer')({
      browsers: ['> 1%', 'last 4 versions'],
    }),
  ],
}
