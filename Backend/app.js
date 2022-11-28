const express = require('express');
const path=require('path');
const bodyParser = require('body-parser');
const cors =require('cors');
const port= 8080;
const app = express();
const routes = require('./routes/index.js');

//DB
const { connection } = require("./database"); 

//settings
app.set('port', process.env.PORT || 8080);

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
//routes
app.use(routes);

//static files
app.use("/static", express.static(path.join(__dirname, 'public')));


//initializing the app
app.listen(port, ()=> console.log(`Server is up on the port${port}`));
