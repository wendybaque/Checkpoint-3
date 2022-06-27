import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Map from "./pages/Map";
import MoveBoat from "./pages/MoveBoat";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/boat/move/:x/:y" element={<MoveBoat />} />
          <Route path="/boat/move/east" element={<MoveBoat />} />
          <Route path="/boat/move/north" element={<MoveBoat />} />
          <Route path="/boat/move/west" element={<MoveBoat />} />
          <Route path="/boat/move/south" element={<MoveBoat />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
