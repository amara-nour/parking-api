const parkings = [
  {
    id: 1,
    name: "Parking 1",
    type: "AIRPORT",
    city: "ROISSY EN FRANCE",
  },
  {
    id: 2,
    name: "Parking 2",
    type: "AIRPORT",
    city: "BEAUVAIS",
  },
  {
    id: 3,
    name: "Parking 3",
    type: "AIRPORT",
    city: "ORLY",
  },
  {
    id: 4,
    name: "Parking 4",
    type: "AIRPORT",
    city: "NICE",
  },
  {
    id: 5,
    name: "Parking 5",
    type: "AIRPORT",
    city: "LILLE",
  },
];
const reservations = [
  {
    id: 1,
    parking: "Parking 1",
    parkingId: 1,
    city: "Paris",
    clientName: "Thomas Martin",
    vehicle: "car",
    licensePlate: "ED432EF",
    checkin: "2020-08-21T06:00:00Z",
    checkout: "2020-08-27T06:00:00Z",
  },
  {
    id: 2,
    parking: "Parking 1",
    parkingId: 1,
    city: "Roissy",
    clientName: "Frédéric Bertholet",
    vehicle: "car",
    licensePlate: "AB213CD",
    checkin: "2020-08-20T06:00:00Z",
    checkout: "2020-08-27T06:00:00Z",
  },
  {
    id: 3,
    parking: "Parking 1",
    parkingId: 1,
    city: "Roissy",
    clientName: "Anatole Basthoz",
    vehicle: "car",
    licensePlate: "EB123KJ",
    checkin: "2020-08-01T06:00:00Z",
    checkout: "2020-08-17T06:00:00Z",
  },
  {
    id: 4,
    parking: "Parking 2",
    parkingId: 2,
    city: "Beauvais",
    clientName: "Caroline Wattremez",
    vehicle: "car",
    licensePlate: "BD198DD",
    checkin: "2020-08-21T06:00:00Z",
    checkout: "2020-08-27T06:00:00Z",
  },
  {
    id: 5,
    parking: "Parking 3",
    parkingId: 3,
    city: "Orly",
    clientName: "Thomas Martin",
    vehicle: "car",
    licensePlate: "ED432EF",
    checkin: "2020-08-28T06:00:00Z",
    checkout: "2020-08-29T06:00:00Z",
  },
  {
    id: 6,
    parking: "Parking 4",
    parkingId: 4,
    city: "Paris",
    clientName: "Elena Richardson",
    vehicle: "car",
    licensePlate: "KJ233OE",
    checkin: "2020-08-12T06:00:00Z",
    checkout: "2020-08-17T06:00:00Z",
  },
];
module.exports = { parkings, reservations };
