const Cyclist = require("../models/Cyclist.model");

// GET Cyclists
const getCyclists = async (req, res, next) => {
  try {
    const cyclists = await Cyclist.find();
    return res.status(200).json(cyclists);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// GET Cyclist by ID
const getCyclistsById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const cyclist = await Cyclist.findById(id);
    if (cyclist) {
      return res.status(200).json(cyclist);
    }
    else {
      return res.status(404).json({ message: "Ciclista no Encontrado" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// POST Cyclist
const postCyclist = async (req, res, next) => {
  try {
    const newCyclist = new Cyclist(req.body);
    const cyclistSaved = await newCyclist.save();
    return res.status(201).json(cyclistSaved);
  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// PUT Cyclist
const putCyclist = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedCyclist = await Cyclist.findByIdAndUpdate(id, req.body, { new: true });
    if (updatedCyclist) {
      return res.status(200).json(updatedCyclist);
    }
    else {
      return res.status(404).json({ message: "Ciclista no Encontrado" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// DELETE Cyclist
const deleteCyclist = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedCyclist = await Cyclist.findByIdAndDelete(id);
    if (deletedCyclist) {
      return res.status(200).json({ Message: "Elemento eliminado", elemento: deletedCyclist });
    }
    else {
      return res.status(404).json({ message: "Ciclista no Encontrado" });
    }
  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getCyclists,
  getCyclistsById,
  postCyclist,
  putCyclist,
  deleteCyclist
};