const express = require('express');
const router = express.Router();
const usuarioCtrl = require('../controllers/usuario.controller');

// CRUD usuarios
router.get('/', async (req, res) => {
  try {
    const usuarios = await usuarioCtrl.usuarios();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const usuario = await usuarioCtrl.usuario(req.params.id);
    if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json(usuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const nuevoUsuario = await usuarioCtrl.insertarUsuario(req.body);
    res.status(201).json(nuevoUsuario);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const usuarioEditado = await usuarioCtrl.editarUsuario(req.params.id, req.body);
    if (!usuarioEditado) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json(usuarioEditado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const eliminado = await usuarioCtrl.eliminarUsuario(req.params.id);
    if (!eliminado) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json({ message: 'Usuario eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
