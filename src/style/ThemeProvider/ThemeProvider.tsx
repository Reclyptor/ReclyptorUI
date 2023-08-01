import { Theme, ThemeProviderProps } from "./ThemeProvider.types";
import ThemeContext from "../ThemeContext";
import useTheme from "../../hook/useTheme";

const ThemeProvider = (props: ThemeProviderProps) => {
  const theme: Theme = useTheme(props.theme);

  return (
    <ThemeContext.Provider value={ theme }>
      { props.children }
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;