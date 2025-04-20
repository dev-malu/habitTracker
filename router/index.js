const express = require("express");
const router = express.Router();
const habitRouter = require("./habit");
const userRouter = require("./user");

router.use("/habit", habitRouter);
router.use("/user", userRouter);

router.get("/", (req, res) => {
  res.send("Hi hello index");
});

module.exports = router;
