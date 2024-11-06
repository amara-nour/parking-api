const express = require("express");
const app = express();
const port = 3100;

app.use(express.json());

const parkingsRoutes = require("./routes/parkings");
const reservationsRoutes = require("./routes/reservations");

app.use("/parkings", parkingsRoutes);
app.use("/parkings/:id/reservations", reservationsRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
