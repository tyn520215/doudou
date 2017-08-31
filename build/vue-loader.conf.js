var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction,
    transformToRequire: {//可以template里直接引用图片比如./assets/default-avatar.png 20170810
      avatar: ['default-src']
    },
    preserveWhitespace: false//去掉元素间的空格
  })
}
