const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave:false,  //关闭语法检查
  transpileDependencies: true,
  chainWebpack: config => {
     config
     .plugin('html')
     .tap(args => {
      args[0].title = "展示平台";
      return args
     })
     }
})
