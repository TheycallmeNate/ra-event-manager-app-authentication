const express = require("express");
const router = express.Router();
const {
  createNewEvent,
  fetchEvents,
  fetchSingleEvent,
  updateEntireEvent,
} = require("../controllers/eventControllers");

router.post("/events", createNewEvent);

router.get("/events", fetchEvents);

router.get("/events/:id", fetchSingleEvent);

router.put("/events/:id", updateEntireEvent);

module.exports = router;
