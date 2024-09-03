const { getCyclists, postCyclist, putCyclist, deleteCyclist, getCyclistsById } = require("../controllers/Cyclist.controllers");

const cyclistRouter = require("express").Router();

cyclistRouter.get("/", getCyclists);
cyclistRouter.get("/:id", getCyclistsById);
cyclistRouter.post("/", postCyclist);
cyclistRouter.put("/:id", putCyclist);
cyclistRouter.delete("/:id", deleteCyclist);

module.exports = cyclistRouter;
