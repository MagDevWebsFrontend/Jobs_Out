const { Municipio, Provincia } = require('../models');

module.exports = {
  insertarMunicipio: async (datos) => {
    return await Municipio.create(datos);
  },

  editarMunicipio: async (id, datos) => {
    const mun = await Municipio.findByPk(id);
    if (!mun) return null;
    return await mun.update(datos);
  },

  eliminarMunicipio: async (id) => {
    const mun = await Municipio.findByPk(id);
    if (!mun) return null;
    return await mun.destroy();
  },

  municipio: async (id) => {
    return await Municipio.findByPk(id);
  },

  municipios: async () => {
    return await Municipio.findAll();
  },

  municipiosPorProvincia: async (nombre_provincia) => {
    const provincia = await Provincia.findOne({ where: { nombre: nombre_provincia } });
    if (!provincia) return [];
    return await Municipio.findAll({ where: { provincia_id: provincia.id } });
  }
};
