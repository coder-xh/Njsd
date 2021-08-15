const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    open: true,
    host: "127.0.0.1",
    port: "8080",
    // 代理
    proxy: {
      // "/api": {
      //   target: "http://123.207.32.32:8000/api/x6",
      //   changeOrigin: true,
      //   pathRewrite: {
      //     "^/api": "",
      //   },
      // },

      "/test": {
        target: "http://192.168.1.4:8081",
        changeOrigin: true,
        pathRewrite: {
          "^/test": "",
        },
      },

    },
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("request", resolve("src/request"))
      .set("components", resolve("src/components"))
      .set("views", resolve("src/views"));
  },
};
