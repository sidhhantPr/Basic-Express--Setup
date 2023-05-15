const express = require("express");
const router = express.Router();
const { InfoController } = require("../../controller");

console.log(InfoController.info);

router.get("/info", InfoController.info);

module.exports = router;
