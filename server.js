const express = require("express");
const routes = require("./router");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config(path.join(process.cwd(), ".env"));

const runServer = async () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));
  app.use("/api", routes);

  const db = mongoose.connection;
  db.on("error", (error) => console.log(error));
  db.once("open", () => console.log("connected to mongoose"));

  await mongoose.connect(process.env.DATABASE_URL);
  app.listen(process.env.PORT || 3000, (err) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.info(`Server running on port ${process.env.PORT}`);
  });
};

runServer();
