const {
  override,
  fixBabelImports,
  // addLessLoader,
  addWebpackAlias,
} = require("customize-cra");
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
process.env.CI = "false";

const addCustomize = () => (config) => {
  if (config.output.publicPath) {
    config.output.publicPath =
      process.env.NODE_ENV === "production"
        ? "/react-template/"
        : "/";
  }
  if (config.resolve) {
    config.resolve.extensions.push(".jsx"); // js文件引入时可以省略后缀名
  }
  return config;
};
module.exports = override(
  // 针对antd实现按需打包: 根据import来打包(使用babel-plugin-import)
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true, // 自动打包相关的样式
  }),
  // 使用less-loader对源码中的less的变量进行重新指定
  // addLessLoader({
  //   javascriptEnabled: true,
  //   modifyVars: { "@primary-color": "#1DA57A" }
  //   // cssModules:{
  //   //   localIdentName: "[path][name]__[local]--[hash:base64:5]", // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
  //   // }
  //   // additionalData: `@import "${ resolve('./src/assets/test.less')}"` // less中的变量可以在其他文件中用
  // }),
  // 配置路径别名
  addWebpackAlias({
    "@": resolve("src"),
    // "@assets": resolve(__dirname, './src/assets'), // 不定义相关函数的话
    "@assets": resolve('./src/assets'), // 不定义相关函数的话
    "@components": resolve('./src/components'),
    "@views": resolve('./src/views')
  }),
  addCustomize()
)