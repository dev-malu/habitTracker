const mongoose = require("mongoose");
const { HABIT_STATUS_OPTIONS } = require("../constants/habitStatus");

const habitSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(HABIT_STATUS_OPTIONS),
      default: HABIT_STATUS_OPTIONS.PENDING,
    },
    Notes: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Habit", habitSchema);
