var connection = require('../mysql')

module.exports = {
    select(sql) {
        return new Promise((resolve, reject) => {
            connection.query(sql, function (error, results, fields) {
                if (error) {
                    console.log('错误信息-', error.sqlMessage);
                    throw error;
                }
                resolve(results);
            })
        })
    },
    selectAll(sql, callback) {
        connection.query(sql, (err, result) => {
            if (err) {
                console.log('错误信息-', err.sqlMessage);
                reject()
                return;
            }
            var string = JSON.stringify(result);
        })

    }
};

