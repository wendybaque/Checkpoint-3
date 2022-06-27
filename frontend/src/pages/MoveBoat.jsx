import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useCaribbean } from "../contexts/CaribbeanContext";
import api from "../services/api";
import Map from "./Map";

function MoveBoat() {
  const navigate = useNavigate();
  const { x, y } = useParams();
  const { updateBoat } = useCaribbean();

  useEffect(() => {
    api
      .put(`/boat/move/${x}/${y}`)
      .then((response) => {
        if (response.status === 200) {
          updateBoat(response.data);
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        navigate("/map");
      });
  }, [x, y]);

  return <Map />;
}

export default MoveBoat;
