import { ThemeConfiguration } from "../ThemeProvider/ThemeProvider.types";
import { createContext } from "react";

const DefaultTheme: ThemeConfiguration = require("../../../theme.json");

const ThemeContext = createContext<ThemeConfiguration>(DefaultTheme);
export default ThemeContext;