require("dotenv").config();
const app = require("./src/app");
const sequelize = require("./src/config/database");

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    // Conectar a la BD
    await sequelize.authenticate();
    console.log("✅ Conexión a la base de datos exitosa");

    // Sincronizar modelos (⚠️ cuidado con force: true en prod)
    // await sequelize.sync({ force: false });
    console.log("📦 Modelos sincronizados");

    // Levantar servidor
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error("❌ Error al iniciar el servidor:", error);
    process.exit(1);
  }
}

startServer();
