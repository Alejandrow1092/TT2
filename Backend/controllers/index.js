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
                //console.log(searchUsertype(results[0]))
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

const gestoresAdmin=(req, res)=>{
    console.log("hola");
    const{id}=req.params;
    const values=[id];
    console.log(values)
    connection.query(`select 
    usuario.nombre
  from
    gestor
    inner join gestor_negocio on gestor.idgestor = gestor_negocio.idgestor
    inner join usuario using (idusuario)
  where
    gestor_negocio.idNegocio = ?`,values, (error, results)=>{
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

const negocioGestor=(req,res)=>{
    console.log("hola3");
    const{id}=req.params;
    const values=[id];
    console.log(values)
    connection.query(`select
	idnegocio,negocio.nombre, negocio.razonsocial, negocio.domicilio, negocio.actividad
    from
	gestor
	    inner join gestor_negocio on gestor.idgestor = gestor_negocio.idgestor
	    inner join negocio using (idnegocio)
    where 
	gestor.idusuario=?`,values, (error, results)=>{
        if(error){
            res.status(500).send(error);
        }
        else{
            if(results.length>0){
                console.log(results);
                res.status(200).send(results);
            }
            else{
                res.status(400).send('Error en la optencion de la tabla');
            }
        }
    });
}

const negocioEmpleados=(req,res)=>{
    console.log("hola5");
    const{id}=req.params;
    const values=[id];
    //console.log(values)
    connection.query(`select	
	usuario.nombre
    from
        Area
    inner join area_empleado using (idArea)
    inner join empleado using (idempleado)
    inner join usuario using (idusuario)
    where
        area.idnegocio=?;`,values, (error, results)=>{
        if(error){
            res.status(500).send(error);
        }
        else{
            if(results.length>0){
                console.log(results);
                res.status(200).send(results);
            }
            else{
                res.status(400).send('Error en la optencion de la tabla');
            }
        }
    });
}

const tipoUsuario=(req, res)=>{
    const{id}=req.params;
    const values=[id];
    connection.query(`
    Select getusuario2(?)
    `,values, (error, results)=>{
        if(error){
            res.status(500).send(error);
        }
        else{
            if(results.length>0){
                console.log(results);
                res.status(200).send(results);
            }
            else{
                res.status(400).send('Error en la optencion de la tabla');
            }
        }
    });
}

const negocioId=(req, res)=>{
    const{id}=req.params;
    const values=[id];
    connection.query(`
    select 
	negocio.idnegocio
    from
        Gestor
    inner join Gestor_Negocio using (idgestor)
    inner join Negocio using (idnegocio)
    where
	gestor.idusuario=?;
    `,values, (error, results)=>{
        if(error){
            res.status(500).send(error);
        }
        else{
            if(results.length>0){
                console.log(results);
                res.status(200).send(results);
            }
            else{
                res.status(400).send('Error en la optencion de la tabla');
            }
        }
    });
}

const cuestionarioNegocio=(req,res)=>{
    const{id}=req.params;
    const values=[id];
    connection.query(`
    select	
	*
from Negocio_Cuestionario
inner join Cuestionario using (idcuestionario)
where
	Negocio_Cuestionario.idnegocio=?;
    `,values, (error, results)=>{
        if(error){
            res.status(500).send(error);
        }
        else{
            if(results.length>0){
                console.log(results);
                res.status(200).send(results);
            }
            else{
                res.status(400).send('Error en la optencion de la tabla');
            }
        }
    });
}

const cuestionarioEmpleado=(req, res)=>{
    const{id}=req.params;
    const values=[id];
    connection.query(`
    select	
	*
from Empleado_Cuestionario
inner join cuestionario using (idcuestionario)
where
	Empleado_Cuestionario.idempleado=?;
    `,values, (error, results)=>{
        if(error){
            res.status(500).send(error);
        }
        else{
            if(results.length>0){
                console.log(results);
                res.status(200).send(results);
            }
            else{
                res.status(400).send('Error en la optencion de la tabla');
            }
        }
    });
}

module.exports ={
    index,
    login,
    negocio,
    gestoresAdmin,
    negocioGestor,
    negocioEmpleados,
    tipoUsuario,
    negocioId,
    cuestionarioNegocio,
    cuestionarioEmpleado
}