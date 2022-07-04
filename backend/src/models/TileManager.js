const AbstractManager = require("./AbstractManager");

class TileManager extends AbstractManager {
  static table = "tile";

  findAll() {
    return this.connection.query(
      `select id, type, coord_x, coord_y from  ${TileManager.table}`
    );
  }

  // CONSIGNE 4 :
  findOne(x, y) {
    return this.connection
      .query(
        `SELECT * FROM ${TileManager.table} WHERE coord_x = ? AND coord_y = ?`,
        [x, y]
      )
      .then((res) => res[0]);
  }

  // CONSIGNE 7 :
  setTreasureOnRandomIsland() {
    return this.connection
      .query(
        `UPDATE * FROM  ${TileManager.table}
      SET has_treasure = 1
      WHERE type = "island"
      ORDER BY RAND()
      LIMIT 1`
      )
      .then((res) => res[0]);
  }

  // CONSIGNE 8 :
  resetTreasure() {
    return this.connection.query(
      `UPDATE ${TileManager.table} SET has_treasure = 0`
    );
  }

  // CONSIGNE 9 :
  checkTreasure() {
    return this.connection.query(
      `SELECT tile SET tile = ? req.isJackRich = ? FROM  ${TileManager.table}`
    );
  }
}

module.exports = TileManager;
