/*
 * @Description: 
 * @Author: Wangwenchao
 * @Date: 2021-04-24 14:28:14
 * @LastEditTime: 2021-05-04 09:28:53
 * @LastEditors: Wangwenchao
 */
const fs = require('fs');
const { join } = require('path');
const path = require('path')
const pkg = require(path.join(process.cwd(), 'package.json'));

class T3cVersionTool {
    constructor(options) {
        this.options = options || {};
        this.defaultValue = {
            isLibrary: false,
            filename: 'versions',
            name: pkg.name,
            version: pkg.version,
            author: pkg.author,
            hash: true,
            pathOnly: false,
            paths: [],
            template: "",
            libraryEntry: 'src/main.js'
        }
        this.defaultValue.template = `window.__T3C__=${JSON.stringify(this.defaultValue)}`
        this.options = Object.assign(options, this.defaultValue);
        this.webpacklibraryEntry = ""
    }
    apply(compiler) {
        this.webpacklibraryEntry = join(process.cwd(), this.options.libraryEntry);
        let templateStr = fs.readFileSync(this.webpacklibraryEntry, 'utf-8');
        const newtemplateStr = `${this.options.template}\n${templateStr}`
        fs.writeFileSync(this.webpacklibraryEntry, newtemplateStr, 'utf-8')
        console.log(321321);
        compiler.hooks.emit.tap('T3cVersionTool', () => {
            console.log(32132132432432432);
            fs.writeFileSync(this.webpacklibraryEntry, templateStr, 'utf-8')
        })
    }
}
module.exports = T3cVersionTool