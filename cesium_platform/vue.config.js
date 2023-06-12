const { defineConfig } = require('@vue/cli-service')

// const { webpack } = require("webpack");



module.exports = defineConfig({
  lintOnSave: false,  //关闭语法检查
  transpileDependencies: true,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "地质灾害监测预警平台";
        return args
      })
  },
  // 配置jquery
  // configureWebpack: {
  //   plugins: [
  //     new webpack.ProvidePlugin({
  //       $: "jquery",
  //       jQuery: "jquery",
  //       "windows.jQuery": "jquery",
  //     })
  //   ]
  // }
})
