const express = require('express');
const router = express.Router();
const guardadoCtrl = require('../controllers/guardado.controller');

router.get('/', async (req, res) => {
  try {
    const guardados = await guardadoCtrl.guardados();
    res.json(guardados);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:usuario_id', async (req, res) => {
  try {
    const guardados = await guardadoCtrl.guardadosPorUsuario(req.params.usuario_id);
    res.json(guardados);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const g = await guardadoCtrl.guardar(req.body);
    res.status(201).json(g);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/', async (req, res) => {
  try {
    const { usuario_id, publicacion_id } = req.body;
    const eliminado = await guardadoCtrl.eliminarGuardado(usuario_id, publicacion_id);
    if (!eliminado) return res.status(404).json({ message: 'Guardado no encontrado' });
    res.json({ message: 'Guardado eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
