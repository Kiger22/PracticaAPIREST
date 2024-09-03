const mongoose = require("mongoose");
const Cyclist = require("../../api/models/Cyclist.model");
const { cyclists } = require("../../data/Cyclist.data");

mongoose
  .connect("mongodb+srv://kiger22:ndm7u3jIJNJvXouK@cluster0.nva9u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(async () => {
    const allCyclists = await Cyclist.find();
    if (allCyclists.length) {
      await Cyclist.collection.drop();
      console.log("Colección de ciclistas eliminada");
    }
  })
  .catch((err) => console.log(`Error al eliminar datos  : ${err}`))
  .then(async () => {
    await Cyclist.insertMany(cyclists);
    console.log("Ciclistas introducidas correctamente");
  })
  .catch((err) => console.log(`Error al insertar datos : ${err}`))
  .finally(() => mongoose.disconnect());
console.log("Conexión cerrada con la base de datos");