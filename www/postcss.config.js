/* eslint-disable import/no-extraneous-dependencies */
const customMedia = require('postcss-custom-media')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [customMedia(), autoprefixer({ browsers: ['> 1%', 'last 4 versions'] })],
}
/* eslint-enable import/no-extraneous-dependencies */
