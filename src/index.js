// index.js
import app from "./app.js"; // Importamos la aplicación express correctamente
import { PORT } from "./config.js";
import { connectDB } from "./db.js";

// Función principal para iniciar el servidor
async function main() {
  try {
    await connectDB();

    // Solo en desarrollo, usamos app.listen()
    if (process.env.NODE_ENV !== "production") {
      app.listen(PORT, () => {
        console.log(`Listening on port http://localhost:${PORT}`);
        console.log(`Environment: ${process.env.NODE_ENV}`);
      });
    } else {
      // En producción, usamos serverless-http
      console.log("Running in production with serverless.");
    }
  } catch (error) {
    console.error(error);
  }
}

main();
