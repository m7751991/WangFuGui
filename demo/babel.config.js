/*
 * @Description: 
 * @Author: Wangwenchao
 * @Date: 2021-04-24 15:13:40
 * @LastEditTime: 2021-05-03 19:14:29
 * @LastEditors: Wangwenchao
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [['component', {
    "libraryName": "wwc-ces",
    "styleLibraryName": "theme-chalk",
  }]
  ]
}
