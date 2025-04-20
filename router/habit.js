const express = require("express");
const router = express.Router();
const Habit = require("../models/Habit");

//get
router.get("/", async (req, res) => {
  try {
    const habit = await Habit.find({});
    res.status(200).json(habit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//post
router.post("/", async (req, res) => {
  try {
    const newHabit = new Habit(req.body);
    await newHabit.save();
    res.status(201).json(newHabit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
