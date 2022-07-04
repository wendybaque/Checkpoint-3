const express = require("express");

const { BoatController, TileController } = require("./controllers");

const TileExist = require("./services/tileExists");

const router = express.Router();

router.get("/tiles", TileController.browse);

router.get("/boat", BoatController.get);
router.put("/boat/move/:x/:y", TileExist, BoatController.move);
router.get("/boat/move/x/y", BoatController.move);
router.get("/boat/start", BoatController.start);
router.get("/start", BoatController.start);
module.exports = router;
