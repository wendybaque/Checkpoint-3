// const { RestartProcess } = require("concurrently");
const models = require("../models");
// CONSIGNE 4 :

const TileExist = (req, res, next) => {
  // console.log(req.params);
  // Tester s'il y a un tile en x et y :
  models.tile
    .findOne(req.params.x, req.params.y)
    .then((result) => {
      if (result[0]) {
        next();
      } else {
        res.status(422).send("Vous ne pouvez pas aller plus loin.");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur serveur.");
    });
  next();
};
module.exports = { TileExist };
