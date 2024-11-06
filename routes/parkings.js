const express = require("express");
const router = express.Router();
const { parkings } = require("../data");

router.get("/", (req, res) => {
  res.json(parkings);
});

router.get("/:id", (req, res) => {
  const parking = parkings.find((p) => p.id == req.params.id);
  if (parking) {
    res.json(parking);
  } else {
    res.status(404).send("Parking not found");
  }
});

router.post("/", (req, res) => {
  const newParking = req.body;
  parkings.push(newParking);
  res.status(201).json(newParking);
});

router.delete("/:id", (req, res) => {
  const index = parkings.findIndex((p) => p.id == req.params.id);
  if (index !== -1) {
    parkings.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send("Parking not found");
  }
});

module.exports = router;
