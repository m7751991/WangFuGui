let userModel = require('../model/login.js')
let user = require('../../mysql/user/user')
class Admin {
    constructor() { }
    async login(req, res, next) {
        let name = req.query.name;
        let pwd = req.query.psw;
        let sql = `select COUNT(*) id from user where userId=${name} and password=${pwd}`;
        let count = await user.select(sql);
        if (count[0].id != 1) {
            res.send({ code: 200, message: '用户名密码错误!' })
        } else {
            res.send({ code: 200, message: true })
        }
    }
}
module.exports = new Admin();