import { Theme, ThemeProviderProps } from "./ThemeProvider.types";
import ThemeContext from "../ThemeContext";
import useTheme from "../useTheme/useTheme";
import loadTheme from "../loadTheme";

const ThemeProvider = (props: ThemeProviderProps) => {
  const theme: Theme = useTheme();

  return (
    <ThemeContext.Provider value={ loadTheme(props.theme) }>
      { props.children }
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;