import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthContext from "./Components/AuthContext/AuthContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AuthContext>
      <App />
    </AuthContext>
  </>
);
