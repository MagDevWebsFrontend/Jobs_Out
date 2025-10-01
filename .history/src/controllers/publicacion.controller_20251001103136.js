const { Publicacion } = require('../models');

module.exports = {
  insertarPublicacion: async (datos) => {
    try {
      return await Publicacion.create(datos);
    } catch (error) {
      throw error;
    }
  },

  editarPublicacion: async (id, datos) => {
    try {
      const pub = await Publicacion.findByPk(id);
      if (!pub) return null;
      return await pub.update(datos);
    } catch (error) {
      throw error;
    }
  },

  eliminarPublicacion: async (id) => {
    try {
      const pub = await Publicacion.findByPk(id);
      if (!pub) return null;
      return await pub.destroy();
    } catch (error) {
      throw error;
    }
  },

  publicacion: async (id) => {
    try {
      return await Publicacion.findByPk(id);
    } catch (error) {
      throw error;
    }
  },

  publicaciones: async () => {
    try {
      return await Publicacion.findAll();
    } catch (error) {
      throw error;
    }
  },

  publicacionesPorFiltro: async (filtros) => {
    try {
      return await Publicacion.findAll({ where: filtros });
    } catch (error) {
      throw error;
    }
  }
};
