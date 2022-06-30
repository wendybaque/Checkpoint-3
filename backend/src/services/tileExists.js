const models = require("../models");

// CONSIGNE 4 :
const TileExist = (req, res, next) => {
  // Tester s'il y a un tile en x et y :
  models.tile
    .findOne(req.params.x, req.params.y)
    .then((result) => {
      if (result[0]) {
        // eslint-disable-next-line prefer-destructuring
        req.tile = result[0];
        next();
      } else {
        res.status(422).send("You can't move around");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Server error.");
    });
  next();
};
module.exports = { TileExist };
