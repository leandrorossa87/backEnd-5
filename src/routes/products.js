const express = require ('express');
// desestructuracion , busca la funcion en el archivo
const { renderUploadProductView } = require('../controllers/product');
const router = express.Router();

router.get('cargar-producto', renderUploadProductView);

module.exports = router;