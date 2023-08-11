import React, { useContext } from "react";
import { Theme } from "../ThemeProvider/ThemeProvider.types";
import ThemeContext from "../ThemeContext";

const useTheme = (): Theme => {
  return useContext<Theme>(ThemeContext);
};

export default useTheme;