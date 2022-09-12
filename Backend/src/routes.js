const express = require("express");
const collection = require("./services/createCollection.js");
// const fetch = require('node-fetch');

const router = express.Router();

router.route("/").get((req, res) => res.send("Hello World..."));

router.route("/adminDashboard").post(collection);

module.exports = router