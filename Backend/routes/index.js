const express= require('express');
const router = express.Router();

const indexController = require('../controllers/index');

//rutas
router.use("/", indexController.index)

module.exports = router;