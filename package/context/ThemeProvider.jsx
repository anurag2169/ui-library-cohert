import { createContext, useContext, useState, useEffect } from "react";
import "../styles/global.css"; // Auto-import styles inside the provider

const ThemeContext = createContext();
const availableThemes = ["light", "dark"];

export function ThemeProvider({ children, initialTheme = "light" }) {
  const storedTheme = localStorage.getItem("theme");
  const defaultTheme = storedTheme || initialTheme;
  const [theme, setTheme] = useState(availableThemes.includes(defaultTheme) ? defaultTheme : "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const setAppTheme = (newTheme) => {
    if (availableThemes.includes(newTheme)) {
      setTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setAppTheme, availableThemes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
