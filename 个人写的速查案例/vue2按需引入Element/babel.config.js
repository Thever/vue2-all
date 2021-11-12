module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // 脚手架升级了，presets中 的 es2015, 要替换成 @babel/preset-env
    ["@babel/preset-env", { "modules": false }]
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
