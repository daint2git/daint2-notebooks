module.exports = {
  plugins: [
    require('postcss-partial-import')({ path: ['./'] }),
    require('postcss-simple-vars')(),
    require('postcss-custom-media')(),
    require('postcss-nested')(),
    require('postcss-nesting')(),
    require('postcss-selector-not')(),
    require('autoprefixer')({
      browsers: ['> 1%', 'last 4 versions'],
    }),
  ],
}
