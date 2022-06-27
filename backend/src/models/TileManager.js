const AbstractManager = require("./AbstractManager");

class TileManager extends AbstractManager {
  static table = "tile";

  findAll() {
    return this.connection.query(
      `select id, type, coord_x, coord_y from  ${TileManager.table}`
    );
  }

  findOne(x ,y) {
    return this.connection.query(`SELECT * FROM ${TileManager.table} WHERE`);
  }

  // CONSIGNE 7 :
  getRandomIsland() {
    return this.connection.query(
      `SELECT column FROM table
      ORDER BY RAND()
      LIMIT 1 from  ${TileManager.table}`
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
