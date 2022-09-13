/* 
* Configuracion de las rutas del servidor.
*/
const express = require("express");
const collection = require("./services/createCollection.js");
const getCollections = require("./services/getCollections.js");

const router = express.Router();

router.route("/").get(getCollections);

router.route("/adminDashboard").post(collection);

module.exports = router