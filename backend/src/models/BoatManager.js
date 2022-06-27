const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  static table = "boat";

  update(boat) {
    return this.connection.query(
      `update ${BoatManager.table} set coord_x = ?, coord_y = ? where name = ?`,
      [boat.coord_x, boat.coord_y, boat.name]
    );
  }
}

module.exports = BoatManager;
