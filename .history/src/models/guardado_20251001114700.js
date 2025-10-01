const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/database');
const Usuario = require('./usuario');
const Publicacion = require('./publicacion');

const Guardado = sequelize.define('Guardado', {
  usuario_id: { type: DataTypes.UUID, primaryKey: true, references: { model: Usuario, key: 'id' } },
  publicacion_id: { type: DataTypes.UUID, primaryKey: true, references: { model: Publicacion, key: 'id' } },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'guardados',
  timestamps: false
});

Guardado.belongsTo(Usuario, { foreignKey: 'usuario_id' });
Usuario.hasMany(Guardado, { foreignKey: 'usuario_id' });
Guardado.belongsTo(Publicacion, { foreignKey: 'publicacion_id' });
Publicacion.hasMany(Guardado, { foreignKey: 'publicacion_id' });

module.exports = Guardado;
