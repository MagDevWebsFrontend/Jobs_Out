const { Provincia } = require('../models');

module.exports = {
  insertarProvincia: async (datos) => {
    try {
      return await Provincia.create(datos);
    } catch (error) {
      throw error;
    }
  },

  editarProvincia: async (id, datos) => {
    try {
      const prov = await Provincia.findByPk(id);
      if (!prov) return null;
      return await prov.update(datos);
    } catch (error) {
      throw error;
    }
  },

  eliminarProvincia: async (id) => {
    try {
      const prov = await Provincia.findByPk(id);
      if (!prov) return null;
      return await prov.destroy();
    } catch (error) {
      throw error;
    }
  },

  provincia: async (id) => {
    try {
      return await Provincia.findByPk(id);
    } catch (error) {
      throw error;
    }
  },

  provinciaNombre: async (nombre) => {
    try {
      const prov = await Provincia.findOne({ where: { nombre } });
      return prov ? prov.id : null;
    } catch (error) {
      throw error;
    }
  },

  provincias: async () => {
    try {
      return await Provincia.findAll();
    } catch (error) {
      throw error;
    }
  }
};
