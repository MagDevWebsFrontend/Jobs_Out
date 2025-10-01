// src/models/index.js
const Sequelize = require('sequelize');
const {sequelize} = require('../config/database');

// Importar modelos
const Provincia = require('./provincia');
const Municipio = require('./municipio');
const Usuario = require('./usuario');
const Trabajo = require('./trabajo');
const TrabajoContacto = require('./trabajo_contactos');
const Publicacion = require('./publicacion');
const Guardado = require('./guardado');

// =========================
// Configuración de relaciones
// =========================

// Provincias y Municipios
Provincia.hasMany(Municipio, { foreignKey: 'provincia_id' });
Municipio.belongsTo(Provincia, { foreignKey: 'provincia_id' });

// Municipios y Usuarios
Municipio.hasMany(Usuario, { foreignKey: 'municipio_id' });
Usuario.belongsTo(Municipio, { foreignKey: 'municipio_id' });

// Usuarios y Trabajos
Usuario.hasMany(Trabajo, { foreignKey: 'autor_id' });
Trabajo.belongsTo(Usuario, { foreignKey: 'autor_id' });

// Municipios y Trabajos
Municipio.hasMany(Trabajo, { foreignKey: 'municipio_id' });
Trabajo.belongsTo(Municipio, { foreignKey: 'municipio_id' });

// Trabajos y Contactos
Trabajo.hasMany(TrabajoContacto, { foreignKey: 'trabajo_id' });
TrabajoContacto.belongsTo(Trabajo, { foreignKey: 'trabajo_id' });

// Trabajos y Publicaciones
Trabajo.hasMany(Publicacion, { foreignKey: 'trabajo_id' });
Publicacion.belongsTo(Trabajo, { foreignKey: 'trabajo_id' });

// Usuarios y Publicaciones
Usuario.hasMany(Publicacion, { foreignKey: 'autor_id' });
Publicacion.belongsTo(Usuario, { foreignKey: 'autor_id' });

// Publicaciones y Guardados
Publicacion.hasMany(Guardado, { foreignKey: 'publicacion_id' });
Guardado.belongsTo(Publicacion, { foreignKey: 'publicacion_id' });

// Usuarios y Guardados
Usuario.hasMany(Guardado, { foreignKey: 'usuario_id' });
Guardado.belongsTo(Usuario, { foreignKey: 'usuario_id' });

// =========================
// Exportar
// =========================
module.exports = {
  sequelize,
  Provincia,
  Municipio,
  Usuario,
  Trabajo,
  TrabajoContacto,
  Publicacion,
  Guardado
};
