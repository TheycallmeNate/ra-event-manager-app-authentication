const express = require("express");
const app = express();
const port = 4000;
const dbSetup = require("./database/setup");
const eventRoutes = require("./routes/eventRoutes");

dbSetup();

app.use(express.json());
app.use(eventRoutes);

app.listen(port, () => console.log(`app listening on ${port}`));
