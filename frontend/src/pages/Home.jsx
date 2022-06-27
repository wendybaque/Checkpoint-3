import { Link } from "react-router-dom";

import compassImage from "@assets/compass.png";
import jackImage from "@assets/jack.gif";
import sparrowImage from "@assets/sparrow.jpg";

export default function Home() {
  return (
    <>
      <div className="container">
        <h1 className="text-center">Checkpoint 3</h1>
        <div className="row introduction">
          <div className="col-sm-9">
            <p>
              The most famous pirate in the world, the great and inimitable
              Captain Jack Sparrow, is looking for the lost treasure of Rackham
              the Red, an old and pitiless pirate who spread terror among the
              Caribbean seas, a long long time ago.
            </p>
            <p>
              An old sailor from the Kingdom of France, Captain Haddock, has
              given Jack a mysterious map with many islands on it. Haddock only
              knew that the treasure is buried on one of these islands. Jack and
              his crew have the mission to navigate to each of them, until they
              find the gold coins and precious gems that constitute the hidden
              treasure.
            </p>
          </div>
          <div className="col-sm-3">
            <img className="sparrow" src={sparrowImage} alt="Jack Sparrow" />
          </div>
          <div className="col-sm-12 text-center">
            <img className="compass" src={compassImage} alt="compass" />
          </div>
          <div className="col-sm-12">
            <p>
              Take control of the Black Perl, Jack's magnificent ship, and
              navigate among the oceans. Avoid krakens, storms or other pirates
              and be the first to find the treasure! It's time to finish your
              last bottle of rum and let's start this adventure!
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid deep-sea">
        <div className="row">
          <div className="col-sm-12">
            <h2>Your mission</h2>
            <ol className="instructions">
              <li>
                <p>
                  Hello ship boy,{" "}
                  <strong>read carefully the instructions </strong> below before
                  starting to code ;)
                </p>
                <p>
                  Each step is relatively independent, do not hesitate to move
                  on to the next if you stay blocked too long on one step. Also,
                  remember you can request assistance from your trainer ;)
                </p>
                <p>
                  You have to push your code on this project repository, with
                  your lastname and firstname as a branch name (e.g.
                  SPARROW_JACK). Furthermore, think about atomic commits!
                </p>
              </li>

              <li>
                <p>
                  Look at the navbar, there is a <Link to="/map">Map</Link> link
                  (/map url). The Black Pearl can navigate on this map, which is
                  built with tiles. Each tile has coordinates (x, y) and a type
                  (sea, port, island). The Black Pearl (one boat entity) also
                  has coordinates (x, y), so it can be displayed on a chosen
                  tile of the map. X is for the horizontal position and Y for
                  the vertical position.
                </p>
                <blockquote className="pl-4">
                  On the map, you can move the boat with the{" "}
                  <em>/boat/move/x/y</em> route (it already exists : x and y
                  should be coordinates). This react route will call the
                  corresponding express route, which will execute the{" "}
                  <code>move()</code> method of the BoatController. As you can
                  see in the code, you just have to use the route{" "}
                  <Link to="/boat/move/2/2">/boat/move/2/2</Link> and the Black
                  Pearl will go to the right tile.
                </blockquote>
              </li>

              <li>
                <p>
                  The <em>/boat/move/x/y</em> route is cool. However, it is more
                  like a teleport than a real move...
                </p>
                <p>
                  In Map page, add four links to allow the user to move the 4
                  possible ways : north, south, east or west. Put your links in
                  the div className "navigation" (it already exists). Of course,
                  the links should move the boat in the right direction.
                </p>
                <p>
                  Indeed, if the boat is heading east, it must move to the
                  right. Therefore, its position in X will increase by 1 and its
                  position in Y will remain unchanged. On the other hand, if the
                  boat is heading south, it will visually descend on the map and
                  there, its X position remains the same but its Y position will
                  increase.
                </p>
                <details>
                  <summary className="hint">Hint: </summary>Add conditional
                  rendering to display the links only when the boat is defined.
                </details>
              </li>

              <li>
                <p>
                  Right now, if you move your boat to a nonexistent tile, the
                  boat just disappears and there is no error message. To prevent
                  Jack from getting lost, you will have to prevent moving
                  outside the map. Create a <em>tileExists.js</em> file in the{" "}
                  <em>backend/src/services</em> folder. The file should export a
                  middleware (it takes req, res and next as arguments). It
                  should test if the tile with the given coordinates
                  (`req.params.x` and `req.params.y`) exists or not. If the tile
                  exists, continue to the next middleware. If the tile doesn't
                  exist, send back an error status (422). Use this new
                  middleware in the <em>/boat/move/x/y</em> route, to prevent
                  the boat from moving if the destination tile does not exist.
                </p>
                <details>
                  <summary className="hint">Hint: </summary>Use TileManager in
                  your middleware. You must add a method to it in order to find
                  tiles from their coordinates.
                </details>
                <details>
                  <summary className="hint">Hint 2: </summary>If you have
                  difficulties using TileManager, you can check the X coordinate
                  is between 0 and 11 (included) and the Y coordinate is between
                  0 and 5 (included).
                </details>
              </li>

              <li>
                <p>
                  In the Map page, in the <code>div</code> with the className
                  "infos", add the following information about the boat :
                </p>
                <ul>
                  <li>its coordinates (`coord_x` and `coord_y`)</li>
                  <li>the type of tile where the boat currently is</li>
                </ul>
                <details>
                  <summary className="hint">Hint: </summary>In the Map page,
                  search in the `tiles` array for a tile with the same
                  coordinates as the boat.
                </details>
              </li>

              <li>
                <p>
                  Add the property <code>has_treasure</code> (a boolean) to the
                  tile entity. It will be <em>not nullable</em> and the default
                  value will be <em>false</em>. This property should{" "}
                  <strong>never</strong> be shared outside the server. It will
                  allow to know if the treasure is on a tile or not. Don't
                  forget to use the migrate command to update your database.
                </p>
              </li>

              <li>
                <p>
                  In TileManager, create a <code>getRandomIsland()</code>{" "}
                  method. It should return a <strong>random</strong> tile with{" "}
                  <strong>island</strong> type.
                </p>
                <details>
                  <summary className="hint">Hint: </summary>Look at{" "}
                  <a href="https://www.petefreitag.com/item/466.cfm">
                    "SQL to Select a random row from a database table"
                  </a>
                  .
                </details>
              </li>

              <li>
                <p>
                  In BoatController, create a <code>start()</code> method
                  (associated to a <em>/boat/start</em> route) which launches a
                  new game. The method must reset the boat's coordinates to (0,
                  0). It also must put the treasure on a random island. You will
                  need multiple SQL requests for this step.
                </p>
                <details>
                  <summary className="hint">Hint: </summary>Add a method{" "}
                  <code>hideTreasure</code> in TileManager. Warning, only one
                  treasure can be on the map, don't forget to remove the old
                  ones from the map <strong>before</strong> putting one in
                  another tile. You may use{" "}
                  <a href="https://thewebdev.info/2022/03/05/how-to-run-multiple-statements-in-one-query-with-node-mysql/">
                    multiple update statements separated with a semicolon
                  </a>{" "}
                  in your query ;)
                </details>
                <details>
                  <summary className="hint">Hint 2: </summary>On the front side,
                  you should adapt the "start" button in the top navbar. Call
                  your API, <strong>then</strong> use the reload function.
                </details>
              </li>

              <li>
                <p>
                  Create a <code>checkTreasure()</code> service. The middleware
                  should read `req.params.x` and `req.params.y`, and check if
                  the boat is on the tile with the treasure. Set
                  `req.isJackRich` to <em>true</em> or <em>false</em>{" "}
                  accordingly, and always continue to the next middleware.
                </p>
                <details>
                  <summary className="hint">Hint: </summary>Be sure to read the{" "}
                  <code>has_treasure</code> property from the tile table.
                </details>
              </li>

              <li>
                <p>
                  This service must be called <strong>on each move</strong> of
                  the boat. Add a property to the response to let the client
                  knows about Jack's luck.
                </p>
              </li>

              <li>
                <p>
                  <strong>Bonus :</strong> Display an "endgame" page when Jack
                  find the treasure ;)
                </p>
              </li>
            </ol>
            <blockquote>Good luck !</blockquote>
          </div>

          <div className="col-sm-12 text-center">
            <img src={jackImage} alt="Good Luck!" />
          </div>
        </div>
      </div>
    </>
  );
}
