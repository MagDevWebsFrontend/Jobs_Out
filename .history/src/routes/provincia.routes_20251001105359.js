const express = require('express');
const router = express.Router();
const provCtrl = require('../controllers/provincia.controller');

router.get('/', async (req, res) => {
  try {
    const provincias = await provCtrl.provincias();
    res.json(provincias);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const provincia = await provCtrl.provincia(req.params.id);
    if (!provincia) return res.status(404).json({ message: 'Provincia no encontrada' });
    res.json(provincia);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/nombre/:nombre', async (req, res) => {
  try {
    const id = await provCtrl.provinciaNombre(req.params.nombre);
    if (!id) return res.status(404).json({ message: 'Provincia no encontrada' });
    res.json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const nueva = await provCtrl.insertarProvincia(req.body);
    res.status(201).json(nueva);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const editada = await provCtrl.editarProvincia(req.params.id, req.body);
    if (!editada) return res.status(404).json({ message: 'Provincia no encontrada' });
    res.json(editada);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const eliminado = await provCtrl.eliminarProvincia(req.params.id);
    if (!eliminado) return res.status(404).json({ message: 'Provincia no encontrada' });
    res.json({ message: 'Provincia eliminada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
