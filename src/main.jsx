import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CadastroProvider from "./context/CadastroProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CadastroProvider>
      <App />
    </CadastroProvider>
  </React.StrictMode>
);
