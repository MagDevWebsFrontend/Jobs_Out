// app.js
require("dotenv").config();
const express = require("express");
const { sequelize } = require("./src/config/database"); // Ajusta según dónde tengas la DB

// Importa modelos (para que Sequelize los registre)
require("./src/models/usuario");
require("./src/models/provincia");
require("./src/models/municipio");
require("./src/models/trabajo");
require("./src/models/contacto_trabajo");
require("./src/models/publicacion");
require("./src/models/guardado");

// Importa rutas
const usuarioRoutes = require("./src/routes/usuario.routes");
const provinciaRoutes = require("./src/routes/provincia.routes");
const municipioRoutes = require("./src/routes/municipio.routes");
const trabajoRoutes = require("./src/routes/trabajo.routes");
const contactoRoutes = require("./src/routes/contacto_trabajo.routes");
const publicacionRoutes = require("./src/routes/publicacion.routes");
const guardadoRoutes = require("./src/routes/guardado.routes");

const app = express();

// ========================
// Middlewares globales
// ========================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ========================
// Rutas
// ========================
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/provincias", provinciaRoutes);
app.use("/api/municipios", municipioRoutes);
app.use("/api/trabajos", trabajoRoutes);
app.use("/api/contactos", contactoRoutes);
app.use("/api/publicaciones", publicacionRoutes);
app.use("/api/guardados", guardadoRoutes);

// Ruta raíz
app.get("/", (req, res) => {
  res.send("🚀 API Jobs_Out funcionando correctamente");
});

// ========================
// Inicializa base de datos
// ========================
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión a la base de datos exitosa");

    await sequelize.sync({ alter: true }); // { force: true } en desarrollo
    console.log("📦 Modelos sincronizados");
  } catch (error) {
    console.error("❌ Error al conectar con la base de datos:", error);
  }
})();

module.exports = app;
