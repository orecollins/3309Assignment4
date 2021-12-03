const mysql = require('mysql');

function newConnection()
{
    let conn = mysql.createConnection({
        host:'localhost',
        user: 'root',
        password:'your_current_password',
        database:'amusement'
    });
    return conn;
}
module.exports = newConnection;

// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'your_current_password',
//   database: 'amusement'
// });
// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected!');
// });