const express = require('express');
const mysql = require('mysql');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const app = express();
const port = 3000;

// Call route, DB
const route = require('./routes/index');
const db = require('./config/db');

// Set url default
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template Engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

// Connect to MoggoDB
db.connect();

// Connect to Mysql
// var mysqlConnection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "blog",
//     multipleStatements: true
// })

// mysqlConnection.connect((err) => {
//     if(!err) {
//         console.log('Connected!');
//     } else {
//         console.log('Connection failed');
//     }
// })

// Route init
route(app);


app.listen(port, () => console.log(`App listening at http://localhost:${port}`));