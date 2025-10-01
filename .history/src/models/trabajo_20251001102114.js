const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario');
const Municipio = require('./municipio');

const Trabajo = sequelize.define('Trabajo', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  autor_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: { model: Usuario, key: 'id' }
  },
  titulo: { type: DataTypes.TEXT, allowNull: false },
  descripcion: DataTypes.TEXT,
  experiencia_min: { type: DataTypes.INTEGER, validate: { min: 0 } },
  jornada: { type: DataTypes.ENUM('tiempo_completo','tiempo_parcial','por_turnos'), defaultValue: 'tiempo_completo' },
  modo: { type: DataTypes.ENUM('presencial','remoto','hibrido'), defaultValue: 'presencial' },
  municipio_id: { type: DataTypes.UUID, references: { model: Municipio, key: 'id' } },
  estado: { type: DataTypes.ENUM('borrador','publicado','archivado'), defaultValue: 'borrador' },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  deleted_at: DataTypes.DATE
}, {
  tableName: 'trabajos',
  timestamps: false,
  hooks: {
    beforeUpdate: (trabajo) => { trabajo.updated_at = new Date(); }
  }
});

Trabajo.belongsTo(Usuario, { foreignKey: 'autor_id' });
Usuario.hasMany(Trabajo, { foreignKey: 'autor_id' });
Trabajo.belongsTo(Municipio, { foreignKey: 'municipio_id' });
Municipio.hasMany(Trabajo, { foreignKey: 'municipio_id' });

module.exports = Trabajo;
