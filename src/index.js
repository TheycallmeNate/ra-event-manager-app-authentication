const express = require("express");
const app = express();
const port = 4000;
const dbSetup = require("./database/setup");

app.use(express.json());

dbSetup();

app.listen(port, () => console.log(`app listening on ${port}`));
