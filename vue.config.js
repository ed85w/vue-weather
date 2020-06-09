module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-weather/'  //repo name or leave blank for custom domain//
    : '/'
}