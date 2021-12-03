const mysql = require('mysql');

let conn = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'your_current_password',
    database:'amusement'
});

conn.connect();

conn.query( `SELECT fName FROM Customer WHERE email="1dd@gmail.com" `
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('One row inserted');
                for (r of rows)
                    console.log(r);
            });

// conn.query(`Drop Table Product`,
//                 (err,rows,fields) => {
//                     if (err)
//                         console.log(err);
//                     else
//                         console.log('Table Dropped');
//                 }
//             )
// conn.query(`CREATE TABLE Product
//             (
//                 Description varchar(100),
//                 Price   Dec(6,3),
//                 imgPath varchar(100)
//             )
//             ` 
//             , (err,rows,fields) => {
//                 if (err)
//                     console.log(err);
//                 else
//                     console.log('Table Created');
//             })

// conn.query( `insert into Product values ("Table",200,"/imgs/Table.jpg")`
//             , (err,rows,fields) => {
//                 if (err)
//                     console.log(err);
//                 else
//                     console.log('One row inserted');
//             });

// conn.query( `select * from Product `
//             , (err,rows,fields) => {
//                 if (err)
//                     console.log(err);
//                 else
//                     console.log('One row inserted');
//                 for (r of rows)
//                     console.log(r);
//             });

conn.end();
