const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Municipio = require('./municipio');

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  nombre: { type: DataTypes.TEXT, allowNull: false },
  apellidos: DataTypes.TEXT,
  username: { type: DataTypes.CITEXT, allowNull: false, unique: true },
  email: { type: DataTypes.CITEXT, unique: true },
  password_hash: { type: DataTypes.TEXT, allowNull: false },
  rol: { 
    type: DataTypes.ENUM('admin', 'trabajador'), 
    defaultValue: 'trabajador' 
  },
  telefono_e164: {
    type: DataTypes.TEXT,
    validate: { is: /^\+\d{7,15}$/ }
  },
  municipio_id: { 
    type: DataTypes.UUID,
    references: { model: Municipio, key: 'id' }
  },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  deleted_at: DataTypes.DATE
}, {
  tableName: 'usuarios',
  timestamps: false,
  hooks: {
    beforeUpdate: (usuario) => { usuario.updated_at = new Date(); }
  }
});

Usuario.belongsTo(Municipio, { foreignKey: 'municipio_id' });
Municipio.hasMany(Usuario, { foreignKey: 'municipio_id' });

module.exports = Usuario;
