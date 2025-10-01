require("dotenv").config();
const app = require("./app"); // Importa la app ya configurada
const sequelize = require("./config/database");

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión a la base de datos exitosa");

    await sequelize.sync({ alter: true }); // O { force: true } solo en desarrollo
    console.log("📦 Modelos sincronizados");

    app.listen(PORT, () => {
      console.log(`🚀 Servidor iniciado en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error al iniciar el servidor:", error);
  }
}

startServer();
