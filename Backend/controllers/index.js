const { connection } = require("../database.js");

const index = (req, res)=>{
    res.status(200).send({
        nombre: 'Alejandro',
        Edad: 22
    })
}

const login=(req, res)=>{
    const { correo, pass }=req.body;
    const values = [correo, pass];
    console.log(req.body)
    //console.log(values);
    connection.query('Select * from usuario where correoE=? AND contrasena=? ', values, (error, results)=>{
        if(error){ 
            res.status(500).send(error);
        }
        else{
            if(results.length>0){
                console.log(results);
                res.status(200).send(results[0]);
            }
            else{
                res.status(400).send('Usuario no existe');
            }
        }
    });

}

module.exports ={
    index,
    login
}