import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { CaribbeanProvider } from "@contexts/CaribbeanContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CaribbeanProvider>
        <App />
      </CaribbeanProvider>
    </BrowserRouter>
  </React.StrictMode>
);
