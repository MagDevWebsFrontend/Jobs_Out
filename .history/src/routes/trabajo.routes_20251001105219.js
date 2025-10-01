const express = require('express');
const router = express.Router();
const trabajoCtrl = require('../controllers/trabajo.controller');

router.get('/', async (req, res) => {
  try {
    const trabajos = await trabajoCtrl.trabajos();
    res.json(trabajos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const trabajo = await trabajoCtrl.trabajo(req.params.id);
    if (!trabajo) return res.status(404).json({ message: 'Trabajo no encontrado' });
    res.json(trabajo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const nuevoTrabajo = await trabajoCtrl.insertarTrabajo(req.body);
    res.status(201).json(nuevoTrabajo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const trabajoEditado = await trabajoCtrl.editarTrabajo(req.params.id, req.body);
    if (!trabajoEditado) return res.status(404).json({ message: 'Trabajo no encontrado' });
    res.json(trabajoEditado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const eliminado = await trabajoCtrl.eliminarTrabajo(req.params.id);
    if (!eliminado) return res.status(404).json({ message: 'Trabajo no encontrado' });
    res.json({ message: 'Trabajo eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
