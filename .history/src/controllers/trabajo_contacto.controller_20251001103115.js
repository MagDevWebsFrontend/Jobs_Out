const { TrabajoContacto } = require('../models');

module.exports = {
  insertarContacto: async (datos) => {
    try {
      return await TrabajoContacto.create(datos);
    } catch (error) {
      throw error;
    }
  },

  editarContacto: async (trabajo_id, tipo, valor, datos) => {
    try {
      const contacto = await TrabajoContacto.findOne({ where: { trabajo_id, tipo, valor } });
      if (!contacto) return null;
      return await contacto.update(datos);
    } catch (error) {
      throw error;
    }
  },

  eliminarContacto: async (trabajo_id, tipo, valor) => {
    try {
      const contacto = await TrabajoContacto.findOne({ where: { trabajo_id, tipo, valor } });
      if (!contacto) return null;
      return await contacto.destroy();
    } catch (error) {
      throw error;
    }
  },

  contactos: async (id_trabajo) => {
    try {
      return await TrabajoContacto.findAll({ where: { trabajo_id: id_trabajo } });
    } catch (error) {
      throw error;
    }
  }
};
