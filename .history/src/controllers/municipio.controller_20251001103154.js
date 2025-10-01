const { Municipio, Provincia } = require('../models');

module.exports = {
  insertarMunicipio: async (datos) => {
    try {
      return await Municipio.create(datos);
    } catch (error) {
      throw error;
    }
  },

  editarMunicipio: async (id, datos) => {
    try {
      const mun = await Municipio.findByPk(id);
      if (!mun) return null;
      return await mun.update(datos);
    } catch (error) {
      throw error;
    }
  },

  eliminarMunicipio: async (id) => {
    try {
      const mun = await Municipio.findByPk(id);
      if (!mun) return null;
      return await mun.destroy();
    } catch (error) {
      throw error;
    }
  },

  municipio: async (id) => {
    try {
      return await Municipio.findByPk(id);
    } catch (error) {
      throw error;
    }
  },

  municipios: async () => {
    try {
      return await Municipio.findAll();
    } catch (error) {
      throw error;
    }
  },

  municipiosPorProvincia: async (nombre_provincia) => {
    try {
      const provincia = await Provincia.findOne({ where: { nombre: nombre_provincia } });
      if (!provincia) return [];
      return await Municipio.findAll({ where: { provincia_id: provincia.id } });
    } catch (error) {
      throw error;
    }
  }
};
