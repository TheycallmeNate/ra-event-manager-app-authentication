const express = require("express");
const router = express.Router();
const {
  createNewEvent,
  fetchEvents,
} = require("../controllers/eventControllers");

router.post("/events", createNewEvent);

router.get("/events", fetchEvents);

module.exports = router;
