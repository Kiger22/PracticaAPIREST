
require("dotenv").config();
const express = require("express");
const app = express();

PORT = process.env.PORT || 3000;

const { connectDB } = require("./src/config/db");
const cyclistRouter = require("./src/api/routes/Cyclist.router");
connectDB();

const router = express.Router();

app.use(express.json())
app.use("/", router);

// Rutas
app.use("/api/v1/cyclist", cyclistRouter);

app.use("*", (req, res, next) => {
  const error = new Error("Pagina Vacía");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  return res.status(error.status || 500).json(error.message || "Unexpected error");
});

app.listen(3000, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
