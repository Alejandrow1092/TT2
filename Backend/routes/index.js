const express= require('express');
const router = express.Router();

const indexController = require('../controllers/index');

//rutas
router.get("/", indexController.index);

router.post("/login", indexController.login);

router.get("/negocios", indexController.negocio)

module.exports = router;

