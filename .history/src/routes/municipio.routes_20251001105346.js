const express = require('express');
const router = express.Router();
const munCtrl = require('../controllers/municipio.controller');

router.get('/', async (req, res) => {
  try {
    const municipios = await munCtrl.municipios();
    res.json(municipios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const municipio = await munCtrl.municipio(req.params.id);
    if (!municipio) return res.status(404).json({ message: 'Municipio no encontrado' });
    res.json(municipio);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/provincia/:nombre', async (req, res) => {
  try {
    const municipios = await munCtrl.municipiosPorProvincia(req.params.nombre);
    res.json(municipios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const nuevo = await munCtrl.insertarMunicipio(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const editado = await munCtrl.editarMunicipio(req.params.id, req.body);
    if (!editado) return res.status(404).json({ message: 'Municipio no encontrado' });
    res.json(editado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const eliminado = await munCtrl.eliminarMunicipio(req.params.id);
    if (!eliminado) return res.status(404).json({ message: 'Municipio no encontrado' });
    res.json({ message: 'Municipio eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
