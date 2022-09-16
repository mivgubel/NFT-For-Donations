/* 
* Configuracion de las rutas del servidor.
*/
const express = require("express");
const getCollections = require("./services/getCollections.js");
const collection = require("./services/createCollection.js");

const getCollection = require("./services/getCollection.js")
const getUserNFTsForProfile = require("./services/getUserNFTs.js");
const getNFTDetail = require("./services/getNFTDetail.js");

const router = express.Router();

router.route("/").get(getCollections);
router.route("/adminDashboard").post(collection);
router.route("/collection/:contractAddress").get(getCollection);

router.route("/user/:walletAddress").get(getUserNFTsForProfile);
router.route("/NFTDetail/:contractAddress/:tokenID").get(getNFTDetail);

module.exports = router