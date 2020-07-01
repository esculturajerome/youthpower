const express = require("express");
const router = express.Router();

// @desc login/Landin Page
// @route Get /

router.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "jerome" },
    { id: 2, name: "Gel" },
  ]);
});

// @desc login/Landin Page
// @route Get /login

router.get("/dashboard", (req, res) => {
  res.send("dashboard");
});

module.exports = router;
