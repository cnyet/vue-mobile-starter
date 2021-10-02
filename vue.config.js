/*
 * @Descripttion: 修改全局默认配置
 */
const path = require('path');

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 使用链式操作来修改配置
  // config 参数为已经解析好的 webpack 配置
  chainWebpack: config => {
    config.resolve.alias.set('@', path.join(__dirname, 'src'));
    config.plugin('html')
      .tap((args) => {
        args[0].templateParameters = {
          title: '珊瑚数据中心-珊瑚公益保护平台',
          favicon: `${process.env.VUE_APP_BASE_URL}/favicon.ico`,
        };
      return args;
    });
  },
  // 向 CSS 相关的 loader 传递选项
  css: {
    loaderOptions: {
      sass: {
        // 传入共享的全局变量
        prependData: `
          @import "@/assets/styles/_mixin.scss";
          @import "@/assets/styles/_variable.scss";
        `,
        implementation: require('sass')
      }
    },
  },
  // 配置 webpack-dev-server 本地服务
  devServer: {
    port: 8082,
    hot: true,
    compress: true,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://30.23.5.11:9101',
        changeOrigin: true,
        pathRewrite: {'/api': '' },  // 重写接口去掉 /api
      },
    }
  }
};
