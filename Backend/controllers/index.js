const index = (req, res)=>{
    res.status(200).send({
        nombre: 'Alejandro',
        Edad: 22
    })
}

module.exports ={
    index,
}