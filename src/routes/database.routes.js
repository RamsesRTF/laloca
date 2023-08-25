const express = require("express");
const router = express.Router();
/**
 * @param Estudiante mongodb model
 * 
 */
const Estudiante = require("../models/Estudiante");
router.get("/estudiante", async (req, res) => {
  const estudiantes = await Estudiante.find({});
  res.json(estudiantes);
});

router.get("/estudiante/:id", async (req, res) => {
  const estudiante = await Estudiante.findById(req.params.id);
  res.json(estudiante);
});

router.post("/estudiante", async (req, res) => {
  const estudiante = new Estudiante(req.body);
  await estudiante.save()
  res.json({
    status: "Estudiante guardado",
  });
});

router.put("/estudiante/:id", async (req, res) => {
  await Estudiante.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    status: "Estudiante Actualizado",
  });
});

router.delete("/estudiante/:estuId", async (req, res) => {
  await Estudiante.findByIdAndRemove(req.params.estuId);
  res.json({
    status: "Estudiante borrado",
  });
});
module.exports = router;
