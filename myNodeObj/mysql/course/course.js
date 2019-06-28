var connection = require('../mysql')
module.exports = {
    selectOne(sql) {
        return new Promise((resolve, reject) => {
            connection.query(sql, function (error, results, fields) {
                if (error) {
                    console.log('错误信息-', error.sqlMessage);
                    return;
                }
                // var result = JSON.stringify(results);
                resolve(results);
            })
        })
    },
    selectCourseAllList(sql) {
        return new Promise((resolve, reject) => {
            connection.query(sql, (err, results) => {
                if (err) {
                    console.log('错误信息-', err.sqlMessage);
                    return;
                }
                // var result = JSON.stringify(results);
                resolve(results);

            })
        })

    }
};
