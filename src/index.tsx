import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navigate from "./Navigate";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Navigate />
  </React.StrictMode>
);
