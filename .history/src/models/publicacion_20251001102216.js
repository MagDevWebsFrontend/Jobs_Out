const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Trabajo = require('./trabajo');
const Usuario = require('./usuario');

const Publicacion = sequelize.define('Publicacion', {
  id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
  trabajo_id: { type: DataTypes.UUID, allowNull: false, references: { model: Trabajo, key: 'id' } },
  autor_id: { type: DataTypes.UUID, allowNull: false, references: { model: Usuario, key: 'id' } },
  publicado_en: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  estado: { type: DataTypes.ENUM('borrador','publicado','archivado'), defaultValue: 'publicado' },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'publicaciones',
  timestamps: false,
  hooks: {
    beforeUpdate: (pub) => { pub.updated_at = new Date(); }
  }
});

Publicacion.belongsTo(Trabajo, { foreignKey: 'trabajo_id' });
Trabajo.hasMany(Publicacion, { foreignKey: 'trabajo_id' });
Publicacion.belongsTo(Usuario, { foreignKey: 'autor_id' });
Usuario.hasMany(Publicacion, { foreignKey: 'autor_id' });

module.exports = Publicacion;
