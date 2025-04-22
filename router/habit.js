const express = require("express");
const router = express.Router();
const Habit = require("../models/Habit");
const { HABIT_STATUS_OPTIONS } = require("../constants/habitStatus");

//get
router.get("/", async (req, res) => {
  try {
    const habit = await Habit.find({});
    res.status(200).json(habit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/status-options", (req, res) => {
  res.status(200).json(Object.values(HABIT_STATUS_OPTIONS));
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

//delete
router.delete("/:id", async (req, res) => {
  try {
    const deletedHabit = await Habit.findByIdAndDelete(req.params.id);
    if (!deletedHabit)
      return res.status(404).json({ message: "couldn't find habit" });

    res.status(200).json(deletedHabit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
