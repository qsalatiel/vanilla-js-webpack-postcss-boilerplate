module.exports = {
  plugins: [
    require('autoprefixer')({ browsers: ['IE 9', 'iOS 7'] }),
    require('postcss-css-variables')
  ]
}