const { Publicacion } = require('../models');

module.exports = {
  insertarPublicacion: async (datos) => {
    return await Publicacion.create(datos);
  },

  editarPublicacion: async (id, datos) => {
    const pub = await Publicacion.findByPk(id);
    if (!pub) return null;
    return await pub.update(datos);
  },

  eliminarPublicacion: async (id) => {
    const pub = await Publicacion.findByPk(id);
    if (!pub) return null;
    return await pub.destroy();
  },

  publicacion: async (id) => {
    return await Publicacion.findByPk(id);
  },

  publicaciones: async () => {
    return await Publicacion.findAll();
  },

  publicacionesPorFiltro: async (filtros) => {
    return await Publicacion.findAll({ where: filtros });
  }
};
