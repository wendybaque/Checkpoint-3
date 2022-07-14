import { Link } from "react-router-dom";
import { useCaribbean } from "../contexts/CaribbeanContext";

import "./Map.css";

import boatImage from "../assets/boat.png";

function Map() {
  const { boat, tiles } = useCaribbean();
  // const actualTile = tile.filter

  return (
    <div className="container-fluid">
      <h1>Map</h1>
      <div className="row">
        <div className="col-md-10">
          <div className="map">
            {tiles.length === 0 ? (
              <div className="alert alert-warning">
                You are still on the firm ground, you have to fill the database
                first !
              </div>
            ) : (
              <div className="row">
                {tiles.map((tile) => (
                  <div className={`tile col-1 ${tile.type}`} key={tile.id}>
                    <div className="tile-name">{tile.name}</div>
                    <div className="tile-name coords">
                      {tile.coord_x},{tile.coord_y}
                    </div>
                    {boat?.coord_x === tile.coord_x &&
                      boat?.coord_y === tile.coord_y && (
                        <img
                          className="boat img-fluid"
                          src={boatImage}
                          alt="boat"
                        />
                      )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="col-md-2">
          <div className="infos">
            <h2>Information</h2>
            {/* CONSIGNE 5 */}
            {/* Add here informations about current ship position */}
            <h3>Name: {boat.name}</h3>
            <p>Coordinate X : {boat.coord_x}</p>
            <p>Coordinate Y : {boat.coord_y}</p>
            <p>Tile Back : {boat.tileType}</p>
            <p>
              Tile Front :
              {
                tiles.filter(
                  (tile) =>
                    tile.coord.x === boat.coord_x &&
                    tile.coord.y === boat.coord_y
                )[0].type
              }
              {/* CONSIGNE 10 : */}
              {boat.isJackRich && <p>You WIN, congrats !</p>}
            </p>
          </div>
          <div className="navigation">
            <h2>Navigation</h2>
            {/* CONSIGNE 3 */}
            {/* Add here N/S/E/W links */}
            {/* NORTH */}
            <div className="row">
              <li>
                <Link to={`/boat/move/${boat.coord_x}/${boat.coord_y - 1}`}>
                  NORTH
                </Link>
              </li>
            </div>
            {/* SOUTH */}
            <div className="row">
              <li>
                <Link to={`/boat/move/${boat.coord_x}/${boat.coord_y + 1}`}>
                  SOUTH
                </Link>
              </li>
            </div>
            {/* EAST */}
            <div className="row">
              <li>
                <Link to={`/boat/move/${boat.coord_x - 1}/${boat.coord_y}`}>
                  EAST
                </Link>
              </li>
            </div>
            {/* WEST */}
            <div className="row">
              <li>
                <Link to={`/boat/move/${boat.coord_x + 1}/${boat.coord_y}`}>
                  WEST
                </Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
