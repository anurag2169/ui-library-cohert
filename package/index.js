// Barrel file exporting all components
import { ThemeProvider, useTheme } from "./context/ThemeProvider";


import "./styles/global.css";
export * from "./components/Button";
export * from "./components/Badge"
export * from "./components/Input"

export { ThemeProvider, useTheme };
