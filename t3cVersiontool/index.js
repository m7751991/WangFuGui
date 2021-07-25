/*
 * @Description: 
 * @Author: Wangwenchao
 * @Date: 2021-04-24 14:28:14
 * @LastEditTime: 2021-05-04 08:39:43
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
            template: '',
            libraryEntry: 'src/index.js'
        }
        this.options = Object.assign(options, this, defaultValue);
        this.webpacklibraryEntry = ""
    }
    apply(compiler) {
        this.webpacklibraryEntry = join(process.cwd(), this.options.libraryEntry);
        let templateStr = fs.readFileSync(this.webpacklibraryEntry, 'utf-8');
        templateStr = `${this.options.template}\n${templateStr}`
        fs.writeFileSync(this.webpacklibraryEntry, templateStr, 'utf-8')
    }


}