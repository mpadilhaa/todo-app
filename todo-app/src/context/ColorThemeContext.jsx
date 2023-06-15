import React, { createContext, useState } from "react";

const ColorThemeContext = createContext();

export const ColorThemeProvider = ({ children }) => {
  const [lightAndDarkColor, setLightAndDarkColor] = useState(false);

  const handleColorTheme = () => {
    setLightAndDarkColor(!lightAndDarkColor);
    console.log("ola");
  };

  return (
    <ColorThemeContext.Provider
      value={{ handleColorTheme, lightAndDarkColor, setLightAndDarkColor }}
    >
      {children}
    </ColorThemeContext.Provider>
  );
};

export default ColorThemeContext;
