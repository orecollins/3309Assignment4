const express = require('express');
const newConnection = require('./DBConnection');

const app = express();

// serve static contents
app.use(express.static('static'));

// dynamic handling

app.get('/add-product', (req,res) => {
    let conn = newConnection();
    conn.connect();
    conn.query(`insert into Product values ('${req.query.desc}',${req.query.price},'${req.query.imgPath}')`
            ,(err,rows,fields) => {
                res.redirect('/products');        
            } );

    conn.end();
})

//hi

app.get('/prod-img', (request,response) =>{
    let content = '';
    let imgpath = request.query.path;
    let desc = request.query.desc;
    content += `<h1>${desc}</h1>`
    content += `<img src='${imgpath}'/>`
    response.send(content);
} )

app.get('/products', (request, response) => {
    let conn=newConnection();
    conn.connect();
    let productList;
    conn.query(`select * from Product`, (err,rows,fields) => {

        if (err)
            response.send('ERROR: ' +err)
        else
        {
            productList = rows;

            let content ='';
            for (p of productList)
            {
                content += '<div>';
                content += p.Description + ":" + p.Price 
                content += ` <a href='/prod-img?path=${p.imgPath}&desc=${p.description}'> See Image</a>`
                content += '</div>'
                content += '\n';
            }

            response.send(content);
        }
    })    

    conn.end();
})


//Employees are able to log in their work hours for the week 
app.get('/weekly-work-hours',(req,res)=>{
    let conn =newConnection();
    conn.connect();
    conn.query(`INSERT INTO Staff (employeeEmail,startTime,endTime)
    VALUES (‘makenziew43@gmail.com’,’10:00:00’,’18:00:00’)`
    ,(err,rows,fields)=>{
        res.redirect('/Staff');
    });
    conn.end();
})

/*Employee should be able to add a new customer with their information 
and their customized ticket price (based on promotion, age, fastpass, date)*/
app.get('/customer-info',(req,res)=>{
    let conn =newConnection();
    conn.connect();
    conn.query(`INSERT INTO Customer
    VALUES (‘Chaquana’,’Saulo’,42,’chaquanasaulo737@gmail.com’, 
        ‘['1316496095565036', '09/21', '566'], ‘5487752999’, 
        ‘12-26’,’123 Street Street’,NULL)`
    ,(err,rows,fields)=>{
        res.redirect('/Customer');
    });
    conn.end();
})


// app.get('/openPromotion',(req,res) =>{
//     res.redirect(./)
// })

app.listen(2000);
