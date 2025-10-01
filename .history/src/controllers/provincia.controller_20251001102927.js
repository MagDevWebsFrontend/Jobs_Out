const { Provincia } = require('../models');

module.exports = {
  insertarProvincia: async (datos) => {
    return await Provincia.create(datos);
  },

  editarProvincia: async (id, datos) => {
    const prov = await Provincia.findByPk(id);
    if (!prov) return null;
    return await prov.update(datos);
  },

  eliminarProvincia: async (id) => {
    const prov = await Provincia.findByPk(id);
    if (!prov) return null;
    return await prov.destroy();
  },

  provincia: async (id) => {
    return await Provincia.findByPk(id);
  },

  provinciaNombre: async (nombre) => {
    const prov = await Provincia.findOne({ where: { nombre } });
    return prov ? prov.id : null;
  },

  provincias: async () => {
    return await Provincia.findAll();
  }
};
