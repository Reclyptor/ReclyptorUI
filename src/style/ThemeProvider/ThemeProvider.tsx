import { Theme, ThemeConfiguration, ThemeProviderProps } from "./ThemeProvider.types";
import { createContext } from "react";
import useTheme from "../../hook/useTheme";

const DefaultTheme: ThemeConfiguration = require("../../../theme.json");

const ThemeProvider = (props: ThemeProviderProps) => {
  const theme: Theme = useTheme(props.theme);

  return (
    <ThemeContext.Provider value={ theme }>
      { props.children }
    </ThemeContext.Provider>
  );
};

export const ThemeContext = createContext<ThemeConfiguration>(DefaultTheme);
export default ThemeProvider;