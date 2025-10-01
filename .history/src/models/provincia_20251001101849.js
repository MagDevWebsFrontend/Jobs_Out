const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Provincia = sequelize.define('Provincia', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  nombre: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'provincias',
  timestamps: false
});

module.exports = Provincia;
