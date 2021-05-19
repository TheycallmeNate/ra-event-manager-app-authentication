const Event = require("../models/event");

exports.createNewEvent = (req, res) => {
  Event.create({ ...req.body }, (error, newEvent) => {
    if (error) res.status(500).json({ message: error });

    return res
      .status(201)
      .json({ message: `${req.body.title} event created`, newEvent });
  });
};

exports.fetchEvents = (req, res) => {
  let filter = {};

  if (req.query.category) filter.category = req.query.category;

  Event.find(filter, (error, results) => {
    if (error) res.status(500).json({ message: error });

    return res.status(200).json(results);
  });
};
