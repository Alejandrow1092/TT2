const { connection } = require("../database.js");

const index = (req, res)=>{
    res.status(200).send({
        nombre: 'Alejandro',
        Edad: 22
    })
}

const searchUsertype=({idUsuario})=>{
    console.log(idUsuario);
    let userType="a";

    connection.query('Select * from administrador where idusuario=?',idUsuario, (error, results)=>{
        if(error){ 
            //res.status(500).send(error);
        }
        else{
            if(results.length>0){
                console.log("admin")
                console.log(results[0]);
                userType="Admin";
                //return "Admin";
                //searchUsertype(results[0]);
                //res.status(200).send(results[0]);
            }
            else{
                connection.query('Select * from gestor where idusuario=?',idUsuario, (error, results)=>{
                    if(error){ 
                        //res.status(500).send(error);
                    }
                    else{
                        if(results.length>0){
                            console.log("gestor")
                            console.log(results[0]);
                            userType="Gestor";
                            /* return "Gestor"; */
                            //searchUsertype(results[0]);
                            //res.status(200).send(results[0]);
                        }
                        else{
                            connection.query('Select * from empleado where idusuario=?',idUsuario, (error, results)=>{
                                if(error){ 
                                    //res.status(500).send(error);
                                }
                                else{
                                    if(results.length>0){
                                        console.log("Empleado")
                                        console.log(results[0]);
                                        userType="Empleado";
                                        //return "Empleado";
                                    }
                                }
                            });
                        }
                    }
                });
                
                
            }
        }
    });

    return userType;
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
                console.log(results[0]);
                //let userType= searchUsertype(results[0]);
                console.log(searchUsertype(results[0]))
                //console.log('usertype: '+userType)
                const resultSet1=results[0];
                //const resultSet={resultSet1, userType};

                //console.log(resultSet)
                res.status(200).send(results[0]);
            }
            else{
                res.status(400).send('Usuario no existe');
            }
        }
    });

}

const negocio=(req, res)=>{
    connection.query('Select * from negocio', (error, results)=>{
        if(error){
            res.status(500).send(error);
        }
        else{
            if(results.length>0){
                console.log(results);
                res.status(200).send(results);
            }
            else{
                res.status(400).send('Error en la optencionde la tabla');
            }
        }
    });
}

module.exports ={
    index,
    login,
    negocio
}