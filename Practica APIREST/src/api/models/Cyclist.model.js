const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const victoriaSchema = new Schema({
  tour_de_Francia: Number,
  vuelta_a_España: Number,
  giro_de_Italia: Number,
  clasicas: Number
}, {
  timestamps: true,
});

const cyclistSchema = new Schema({
  nombre: { type: String, required: true },
  equipo: { type: String, required: true },
  nacionalidad: { type: String, required: true },
  edad: { type: Number, required: true },
  especialidad: { type: String, required: true },
  victorias: victoriaSchema
}, {
  timestamps: true,
});

const Cyclist = mongoose.model('cyclists', cyclistSchema);

module.exports = Cyclist;