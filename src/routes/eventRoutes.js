const express = require("express");
const router = express.Router();
const {
  createNewEvent,
  fetchEvents,
  fetchSingleEvent,
} = require("../controllers/eventControllers");

router.post("/events", createNewEvent);

router.get("/events", fetchEvents);

router.get("/events/:id", fetchSingleEvent);

module.exports = router;
