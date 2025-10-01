const express = require('express');
const router = express.Router();

router.use('/usuarios', require('./usuario.routes'));
router.use('/trabajos', require('./trabajo.routes'));
router.use('/contactos', require('./trabajo_contacto.routes'));
router.use('/publicaciones', require('./publicacion.routes'));
router.use('/municipios', require('./municipio.routes'));
router.use('/provincias', require('./provincia.routes'));
router.use('/guardados', require('./guardado.routes'));

module.exports = router;
