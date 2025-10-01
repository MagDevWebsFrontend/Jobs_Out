const { Usuario } = require('../models');
const bcrypt = require('bcrypt');

module.exports = {

  // LOGIN
  login: async (username, password) => {
    try {
      const usuario = await Usuario.findOne({ where: { username } });
      if (!usuario) return null;
      const valid = await bcrypt.compare(password, usuario.password_hash);
      return valid ? usuario : null;
    } catch (error) {
      throw error;
    }
  },

  // VALIDAR CORREO
  validarCorreo: async (email) => {
    try {
      return !(await Usuario.findOne({ where: { email } }));
    } catch (error) {
      throw error;
    }
  },

  // NOMBRE DE USUARIO EN USO
  nombreUsuarioEnUso: async (username) => {
    try {
      return !!(await Usuario.findOne({ where: { username } }));
    } catch (error) {
      throw error;
    }
  },

  // GENERAR NOMBRE DE USUARIO (nombre+apellidos+numeroAleatorio)
  generarNombreUsuario: (nombre, apellidos) => {
    const randomNum = Math.floor(Math.random() * 1000);
    return `${nombre}.${apellidos}${randomNum}`.toLowerCase();
  },

  // LISTAR USUARIOS
  usuarios: async () => {
    try {
      return await Usuario.findAll();
    } catch (error) {
      throw error;
    }
  },

  // INSERTAR USUARIO
  insertarUsuario: async (datos) => {
    try {
      const hashed = await bcrypt.hash(datos.password, 10);
      return await Usuario.create({ ...datos, password_hash: hashed });
    } catch (error) {
      throw error;
    }
  },

  // EDITAR USUARIO
  editarUsuario: async (id, datos) => {
    try {
      const usuario = await Usuario.findByPk(id);
      if (!usuario) return null;
      if (datos.password) {
        datos.password_hash = await bcrypt.hash(datos.password, 10);
        delete datos.password;
      }
      return await usuario.update(datos);
    } catch (error) {
      throw error;
    }
  },

  // ELIMINAR USUARIO
  eliminarUsuario: async (id) => {
    try {
      const usuario = await Usuario.findByPk(id);
      if (!usuario) return null;
      return await usuario.destroy();
    } catch (error) {
      throw error;
    }
  },

  // USUARIOS POR FILTRO
  usuariosPorFiltro: async (filtros) => {
    try {
      return await Usuario.findAll({ where: filtros });
    } catch (error) {
      throw error;
    }
  },

  // USUARIO POR ID
  usuario: async (id) => {
    try {
      return await Usuario.findByPk(id);
    } catch (error) {
      throw error;
    }
  }

};
