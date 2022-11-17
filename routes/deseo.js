const express = require('express');
const router = express.Router();
const deseoController = require('../controllers/deseoController')
//api/deseo

router.post('/', deseoController.creardeseo);
router.get('/', deseoController.obtenerdeseos);
router.put('/:id', deseoController.actualizardeseo);
router.get('/:id', deseoController.obtenerproducto);
router.delete('/:id', deseoController.eliminarproducto);
module.exports = router;