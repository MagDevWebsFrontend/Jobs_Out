const { Guardado } = require('../models');

module.exports = {
  guardar: async (datos) => {
    return await Guardado.create(datos);
  },

  eliminarGuardado: async (usuario_id, publicacion_id) => {
    const g = await Guardado.findOne({ where: { usuario_id, publicacion_id } });
    if (!g) return null;
    return await g.destroy();
  },

  guardado: async (usuario_id, publicacion_id) => {
    return await Guardado.findOne({ where: { usuario_id, publicacion_id } });
  },

  guardados: async () => {
    return await Guardado.findAll();
  },

  guardadosPorUsuario: async (usuario_id) => {
    return await Guardado.findAll({ where: { usuario_id } });
  }
};
