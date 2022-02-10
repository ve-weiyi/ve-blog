module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    host: "localhost",
    port: 8081,
    // 是的 devServer 只是一个webpack插件 只能用于开发环境
    // 正式的生产环境建议使用nginx做转发，好像都是这么干的。打包后不生效
    proxy: {
      "/api": {
        //wbsocket
        ws: false,
        target: "https://ve77.cn:8088",
        changeOrigin: true,
        pathRewrite: {
          //修改后的请求地址,value一定要和前面一致，并且没有^，否则就会有代理问题
          "^/api": "/api"
        },
        logLevel: "debug" // 打印代理以后的地址
      },
    },
    disableHostCheck: true
  },
  // 部署后，当访问一些页面的时候，报错 Uncaught SyntaxError: Unexpected token ‘＜’。

  publicPath: "/blog",
  outputDir: "blog",
  assetsDir: "static",
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false
  }
};
