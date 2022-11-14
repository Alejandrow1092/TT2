const express = require('express');
const path=require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const port= 8080;
const app = express();
const routes = require('./routes/index.js');

//settings
app.set('port', process.env.PORT || 8080);

//DB
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nom035',
})

connection.connect(error=>{ 
    if(error){
        throw error;
    }
    else{
        console.log('Conexion exitosa');
    }
});

connection.query('Select * from usuario', (error, results, fields)=>{
    if(error) throw error;
    console.log(results);
})

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(routes);

//static files
app.use("/static", express.static(path.join(__dirname, 'public')));


//initializing the app
app.listen(port, ()=> console.log(`Server is up on the port${port}`));