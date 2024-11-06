const express = require("express");
const router = express.Router({ mergeParams: true });
const { reservations } = require("../data");

router.get("/", (req, res) => {
  const parkingId = req.params.id;
  const parkingReservations = reservations.filter(
    (r) => r.parkingId == parkingId
  );
  res.json(parkingReservations);
});

router.get("/:idReservation", (req, res) => {
  const reservation = reservations.find(
    (r) => r.id == req.params.idReservation && r.parkingId == req.params.id
  );
  if (reservation) {
    res.json(reservation);
  } else {
    res.status(404).send("Reservation not found");
  }
});

router.post("/", (req, res) => {
  const newReservation = req.body;
  newReservation.parkingId = parseInt(req.params.id);
  reservations.push(newReservation);
  res.status(201).json(newReservation);
});

router.delete("/:idReservation", (req, res) => {
  const index = reservations.findIndex(
    (r) => r.id == req.params.idReservation && r.parkingId == req.params.id
  );
  if (index !== -1) {
    reservations.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send("Reservation not found");
  }
});

module.exports = router;
