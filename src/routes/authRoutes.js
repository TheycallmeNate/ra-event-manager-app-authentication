const express = require("express");
const router = express.Router();
const { registerNewUser } = require("../controllers/authController");

router.post("/signup", registerNewUser);
router.post("/login", (req, res) => res.json({ message: "login" }));

module.exports = router;
