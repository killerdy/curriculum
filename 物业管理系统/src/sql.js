const mysql = require('mysql');
const config = require('./config');

let connection = mysql.createConnection(config.db);

connection.connect();

async function query_res(sql_ins, args) {
    return new Promise((resolve, reject) => {
        connection.query(sql_ins, args, (err, result) => {
            if (err)
                resolve({ verdict: false, err });
            else
                resolve({ verdict: true, data: result });
        })
    });
}

module.exports = {
    query_res
}