const mysql = require('mysql');

const connection = mysql.createConnection({
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

module.exports={
    connection,
};