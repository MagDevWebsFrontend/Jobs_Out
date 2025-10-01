const { Trabajo } = require('../models');

module.exports = {
  insertarTrabajo: async (datos) => {
    return await Trabajo.create(datos);
  },

  editarTrabajo: async (id, datos) => {
    const trabajo = await Trabajo.findByPk(id);
    if (!trabajo) return null;
    return await trabajo.update(datos);
  },

  eliminarTrabajo: async (id) => {
    const trabajo = await Trabajo.findByPk(id);
    if (!trabajo) return null;
    return await trabajo.destroy();
  },

  trabajo: async (id) => {
    return await Trabajo.findByPk(id);
  },

  trabajos: async () => {
    return await Trabajo.findAll();
  }
};
