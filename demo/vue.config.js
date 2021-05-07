/*
 * @Description:
 * @Author: Wangwenchao
 * @Date: 2021-04-24 15:17:18
 * @LastEditTime: 2021-05-04 08:50:27
 * @LastEditors: Wangwenchao
 */
// /**
//  * Author:Vinsea.
//  * CreateDate:2019/4/19 13:13.
//  * Describe: 自定义配置文件
//  */
const T3cVersionWebpackPlugin = require('./t3cversion')

module.exports = {


    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            // t3c用的版本展示工具
            config.plugins.push(new T3cVersionWebpackPlugin({
                component: 'spForm',
            }))
        }
    },
};
// const path = require('path')
// const resolve = (dir) => path.join(__dirname, './', dir)
// module.exports = {
//     outputDir: resolve('./lib'),
//     configureWebpack: {
//         entry: {
//             // ...getComponentEntries('components'),
//             'index': "./packages/index.js",
//             'input': './packages/input/input.js',
//             'element': './packages/element/element.js',
//             'button': './packages/input/input.js'
//         },
//         output: {
//             filename: '[name].js',
//             libraryTarget: 'commonjs2',
//             libraryExport: 'default',
//             library: 'demo-vuecli3-ui',
//         },
//         // resolve: pub.resolve,
//     },
//     css: {
//         sourceMap: true,
//         extract: {
//             filename: 'theme-chalk/[name].css'
//         }
//     },
//     chainWebpack: config => {
//         config.optimization.delete('splitChunks')
//         config.plugins.delete('copy')
//         config.plugins.delete('preload')
//         config.plugins.delete('prefetch')
//         config.plugins.delete('html')
//         config.plugins.delete('hmr')
//         config.entryPoints.delete('app')

//         config.module
//             .rule('fonts')
//             .use('url-loader')
//             .tap(option => {
//                 option.fallback.options.name = 'static/fonts/[name].[hash:8].[ext]'
//                 return option
//             })
//     }
// }
