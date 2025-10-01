const { Trabajo } = require('../models');

module.exports = {
  insertarTrabajo: async (datos) => {
    try {
      return await Trabajo.create(datos);
    } catch (error) {
      throw error;
    }
  },

  editarTrabajo: async (id, datos) => {
    try {
      const trabajo = await Trabajo.findByPk(id);
      if (!trabajo) return null;
      return await trabajo.update(datos);
    } catch (error) {
      throw error;
    }
  },

  eliminarTrabajo: async (id) => {
    try {
      const trabajo = await Trabajo.findByPk(id);
      if (!trabajo) return null;
      return await trabajo.destroy();
    } catch (error) {
      throw error;
    }
  },

  trabajo: async (id) => {
    try {
      return await Trabajo.findByPk(id);
    } catch (error) {
      throw error;
    }
  },

  trabajos: async () => {
    try {
      return await Trabajo.findAll();
    } catch (error) {
      throw error;
    }
  }
};
