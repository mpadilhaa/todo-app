import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ColorThemeProvider } from "./context/ColorThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorThemeProvider>
      <App />
    </ColorThemeProvider>
  </React.StrictMode>
);
