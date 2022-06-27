import { createContext, useContext, useEffect, useState } from "react";
import propTypes from "prop-types";

import api from "@services/api";

const caribbeanContext = createContext();

export function CaribbeanProvider({ children }) {
  const { Provider } = caribbeanContext;

  const [boat, setBoat] = useState();
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    Promise.all([api.get("/tiles"), api.get("/boat")]).then((responses) => {
      const [tilesResponse, boatResponse] = responses;

      setTiles(tilesResponse.data);
      setBoat(boatResponse.data);
    });
  }, []);

  const updateBoat = (partialBoat) => setBoat({ ...boat, ...partialBoat });

  return <Provider value={{ boat, updateBoat, tiles }}>{children}</Provider>;
}

CaribbeanProvider.propTypes = {
  children: propTypes.element.isRequired,
};

export const useCaribbean = () => useContext(caribbeanContext);
