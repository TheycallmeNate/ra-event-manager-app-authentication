const EventModel = require("../models/event");

exports.createNewEvent = (req, res) => {
  EventModel.create({ ...req.body }, (error, newEvent) => {
    if (error) return res.status(500).json({ message: error });

    return res
      .status(201)
      .json({ message: `${req.body.title} event created`, newEvent });
  });
};

exports.fetchEvents = (req, res) => {
  let filter = {};

  if (req.query.category) filter.category = req.query.category;

  Event.find(filter, (error, results) => {
    if (error) return res.status(500).json({ message: error });

    return res.status(200).json({ results });
  });
};

exports.fetchSingleEvent = (req, res) => {
  EventModel.findById(req.params.id, (error, result) => {
    if (error) return res.status(500).json({ message: error });
    if (!result) return res.status(404).json({ message: "Event not found." });
    return res.status(200).json({ result });
  });
};
