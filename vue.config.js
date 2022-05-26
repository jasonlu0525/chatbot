module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? 'chatbot' : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData:
          ' @import "bootstrap/scss/_functions.scss"; @import "@/assets/style/helpers/_variables.scss"; @import "bootstrap/scss/_mixins.scss";',
      },
    },
  },
};
