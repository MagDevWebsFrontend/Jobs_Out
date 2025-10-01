const express = require('express');
const router = express.Router();
const contactoCtrl = require('../controllers/contacto_trabajo.controller');

router.get('/:trabajo_id', async (req, res) => {
  try {
    const contactos = await contactoCtrl.contactos(req.params.trabajo_id);
    res.json(contactos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const contacto = await contactoCtrl.insertarContacto(req.body);
    res.status(201).json(contacto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/', async (req, res) => {
  try {
    const { trabajo_id, tipo, valor, datos } = req.body;
    const actualizado = await contactoCtrl.editarContacto(trabajo_id, tipo, valor, datos);
    if (!actualizado) return res.status(404).json({ message: 'Contacto no encontrado' });
    res.json(actualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/', async (req, res) => {
  try {
    const { trabajo_id, tipo, valor } = req.body;
    const eliminado = await contactoCtrl.eliminarContacto(trabajo_id, tipo, valor);
    if (!eliminado) return res.status(404).json({ message: 'Contacto no encontrado' });
    res.json({ message: 'Contacto eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
