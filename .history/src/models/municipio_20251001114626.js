const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/database');
const Provincia = require('./provincia');

const Municipio = sequelize.define('Municipio', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  provincia_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: { model: Provincia, key: 'id' }
  },
  nombre: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'municipios',
  timestamps: false,
  indexes: [
    {
      unique: true,
      fields: ['provincia_id', 'nombre']
    }
  ]
});

Municipio.belongsTo(Provincia, { foreignKey: 'provincia_id' });
Provincia.hasMany(Municipio, { foreignKey: 'provincia_id' });

module.exports = Municipio;
