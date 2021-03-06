const models = require("../models");

// CONSIGNE 4 :
const TileExist = (req, res, next) => {
  // Tester s'il y a un tile en x et y :
  models.tile
    .findOne(req.params.x, req.params.y)
    .then((tile) => {
      if (tile[0]) {
        // eslint-disable-next-line prefer-destructuring
        req.tile = tile[0];
        next();
      } else {
        res.status(422).send("You can't move here.");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Server error.");
    });
};
// // AUTRE MANIERE DE FAIRE :
// const checkTileExistFromDB = (req, res, next) => {
//   models.tile
//     .findOneByCoordinate(req.params.x, req.params.y)
//     .then((tile) => {
//       if (tile[0]) {
//         // eslint-disable-next-line prefer-destructuring
//         req.macle = tile[0];
//         next();
//       } else {
//         res.status(422).send("You can't move here.");
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).send("Server error.");
//     });
// };

module.exports = { TileExist };
