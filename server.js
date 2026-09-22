// Servidor mínimo para "Sala de Máquinas".
// Sirve un único archivo estático (public/index.html). Cada visitante corre
// toda la actividad en su propio navegador: no hay estado compartido en el
// servidor, así que 30 (o más) sesiones simultáneas no compiten entre sí.

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  express.static(path.join(__dirname, "public"), {
    // Evita que el navegador cachee una versión vieja de la página mientras
    // se está iterando; Railway igual sirve por HTTPS con su propio CDN.
    etag: true,
    maxAge: "5m",
  })
);

app.get("/healthz", (req, res) => res.status(200).send("ok"));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Sala de Máquinas escuchando en el puerto ${PORT}`);
});
