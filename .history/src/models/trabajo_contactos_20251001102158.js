const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Trabajo = require('./trabajo');

const TrabajoContacto = sequelize.define('TrabajoContacto', {
  trabajo_id: {
    type: DataTypes.UUID,
    primaryKey: true,
    references: { model: Trabajo, key: 'id' }
  },
  tipo: {
    type: DataTypes.ENUM('telefono','whatsapp','email','sitio_web'),
    primaryKey: true
  },
  valor: { type: DataTypes.TEXT, primaryKey: true },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  tableName: 'trabajo_contactos',
  timestamps: false
});

TrabajoContacto.belongsTo(Trabajo, { foreignKey: 'trabajo_id' });
Trabajo.hasMany(TrabajoContacto, { foreignKey: 'trabajo_id' });

module.exports = TrabajoContacto;
