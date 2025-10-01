const { Guardado } = require('../models');

module.exports = {
  guardar: async (datos) => {
    try {
      return await Guardado.create(datos);
    } catch (error) {
      throw error;
    }
  },

  eliminarGuardado: async (usuario_id, publicacion_id) => {
    try {
      const g = await Guardado.findOne({ where: { usuario_id, publicacion_id } });
      if (!g) return null;
      return await g.destroy();
    } catch (error) {
      throw error;
    }
  },

  guardado: async (usuario_id, publicacion_id) => {
    try {
      return await Guardado.findOne({ where: { usuario_id, publicacion_id } });
    } catch (error) {
      throw error;
    }
  },

  guardados: async () => {
    try {
      return await Guardado.findAll();
    } catch (error) {
      throw error;
    }
  },

  guardadosPorUsuario: async (usuario_id) => {
    try {
      return await Guardado.findAll({ where: { usuario_id } });
    } catch (error) {
      throw error;
    }
  }
};
