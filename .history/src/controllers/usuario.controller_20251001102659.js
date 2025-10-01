const { Usuario } = require('../models');
const bcrypt = require('bcrypt'); // para hash de contraseñas

module.exports = {

  // LOGIN
  login: async (username, password) => {
    const usuario = await Usuario.findOne({ where: { username } });
    if (!usuario) return null;
    const valid = await bcrypt.compare(password, usuario.password_hash);
    return valid ? usuario : null;
  },

  // VALIDAR CORREO
  validarCorreo: async (email) => {
    return await Usuario.findOne({ where: { email } }) ? false : true;
  },

  // NOMBRE DE USUARIO EN USO
  nombreUsuarioEnUso: async (username) => {
    return await Usuario.findOne({ where: { username } }) ? true : false;
  },

  // GENERAR NOMBRE DE USUARIO (nombre+apellidos+numeroAleatorio)
  generarNombreUsuario: (nombre, apellidos) => {
    const randomNum = Math.floor(Math.random() * 1000);
    return `${nombre}.${apellidos}${randomNum}`.toLowerCase();
  },

  // LISTAR USUARIOS
  usuarios: async () => {
    return await Usuario.findAll();
  },

  // INSERTAR USUARIO
  insertarUsuario: async (datos) => {
    const hashed = await bcrypt.hash(datos.password, 10);
    return await Usuario.create({ 
      ...datos, 
      password_hash: hashed 
    });
  },

  // EDITAR USUARIO
  editarUsuario: async (id, datos) => {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) return null;
    return await usuario.update(datos);
  },

  // ELIMINAR USUARIO
  eliminarUsuario: async (id) => {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) return null;
    return await usuario.destroy();
  },

  // USUARIOS POR FILTRO
  usuariosPorFiltro: async (filtros) => {
    return await Usuario.findAll({ where: filtros });
  },

  // USUARIO POR ID
  usuario: async (id) => {
    return await Usuario.findByPk(id);
  }

};
