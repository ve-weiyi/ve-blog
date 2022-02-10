module.exports = {
  //productionSourceMap: false,
  devServer: {
    host: "localhost",
    port: 8082,
    proxy: {
      "/api": {
        //wbsocket
        ws: false,
        //  目标地址
        target: "https://localhost:8088",
        //  发送请求头host会被设置target
        changeOrigin: true,
        //  不重写请求地址
        pathWewrite: {
          "^/api": "/api"
        },
        logLevel: "debug" // 打印代理以后的地址
      }
    },
    disableHostCheck: true
  },
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
