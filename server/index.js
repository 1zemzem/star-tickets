require("dotenv").config();
const express = require("express");
const sequelize = require("./db.js");

const PORT = process.env.PORT || 5000;

const app = express();

async function start() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`server  ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

start();
