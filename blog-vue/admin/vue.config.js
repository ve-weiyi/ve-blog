module.exports = {
  productionSourceMap: false,
  devServer: {
    port: 8084,
    proxy: {
      "/api": {
        //wbsocket
        ws: false,
        //  目标地址
        // target: "https://ve77.cn:8088",
        target: "http://127.0.0.1:8088",
        changeOrigin: true,
        //  重写请求地址，不携带cookie了
        pathRewrite: {
          "^/api": "/api"
        },
        logLevel: "debug" // 打印代理以后的地址
      }
    },
    // disableHostCheck: true
  },
  lintOnSave: false,
  publicPath: "/admin",
  outputDir: "admin",
  assetsDir: "static",

  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  }
};

const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
