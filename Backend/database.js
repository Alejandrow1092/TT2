const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'nomx.ckmi485acfnt.us-east-2.rds.amazonaws.com',
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