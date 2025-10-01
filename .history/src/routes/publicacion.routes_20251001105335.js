const express = require('express');
const router = express.Router();
const pubCtrl = require('../controllers/publicacion.controller');

router.get('/', async (req, res) => {
  try {
    const publicaciones = await pubCtrl.publicaciones();
    res.json(publicaciones);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const pub = await pubCtrl.publicacion(req.params.id);
    if (!pub) return res.status(404).json({ message: 'Publicación no encontrada' });
    res.json(pub);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const nuevaPub = await pubCtrl.insertarPublicacion(req.body);
    res.status(201).json(nuevaPub);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const pubEdit = await pubCtrl.editarPublicacion(req.params.id, req.body);
    if (!pubEdit) return res.status(404).json({ message: 'Publicación no encontrada' });
    res.json(pubEdit);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const eliminado = await pubCtrl.eliminarPublicacion(req.params.id);
    if (!eliminado) return res.status(404).json({ message: 'Publicación no encontrada' });
    res.json({ message: 'Publicación eliminada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
