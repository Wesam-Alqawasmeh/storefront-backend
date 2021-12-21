"use strict";

const express = require("express");
const cors = require("cors");

const router = require("./routes/router");

require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use(router);

function start() {
  if (!PORT) {
    throw new Error("Missing Port");
  }
  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
}

module.exports = {
  server: app,
  start: start,
};
