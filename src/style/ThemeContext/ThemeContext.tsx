import { Theme } from "../ThemeProvider/ThemeProvider.types";
import { createContext } from "react";
import loadTheme from "../loadTheme/loadTheme";

const ThemeContext = createContext<Theme>(loadTheme());

export default ThemeContext;