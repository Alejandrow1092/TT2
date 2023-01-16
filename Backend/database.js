const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'ls-a7d798ebf6709a1121fabb5d4d5b3c5855d7d4f5.cys35metbkpo.us-east-2.rds.amazonaws.com',
    port: "3306",
    user: 'root',
    password: '12345678',
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

module.exports={
    connection,
};