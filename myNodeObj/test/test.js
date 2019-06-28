var db = require('../mysql/user/user')
// let database = db.select('select * from user');
async function getData(params) {
    let res = await db.select('select * from user')
    console.log(res, '???');
};
getData();