const mysql = require('mysql');

let conn = mysql.createConnection({
    host:'34.134.96.244',
    user: 'root',
    password: 'password',
    database: 'MyStoreDB'
});

conn.connect();

conn.query(`Drop Table Product`,
                (err,rows,fields) => {
                    if (err)
                        console.log(err);
                    else
                        console.log('Table Dropped');
                }
            )
conn.query(`CREATE TABLE Product
            (
                Description varchar(100),
                Price   Dec(6,3),
                imgPath varchar(100)
            )
            ` 
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('Table Created');
            })

conn.query( `insert into Product values ("Table",200,"/imgs/Table.jpg")`
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('One row inserted');
            });

conn.query( `select * from Product `
            , (err,rows,fields) => {
                if (err)
                    console.log(err);
                else
                    console.log('One row inserted');
                for (r of rows)
                    console.log(r);
            });

conn.end();
