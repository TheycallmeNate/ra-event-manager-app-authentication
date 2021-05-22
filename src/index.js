const express = require("express");
const app = express();
const port = 4000;
const dbSetup = require("./database/setup");

// REQUIRE ROUTES
const eventRoutes = require("./routes/eventRoutes");
const authRoutes = require("./routes/authRoutes");

dbSetup();

// Middleware
app.use(express.json());
app.use("/auth", authRoutes);
app.use(eventRoutes);

app.listen(port, () => console.log(`app listening on ${port}`));
