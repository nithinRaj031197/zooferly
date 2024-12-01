import React, { createContext, useContext, useState } from "react";
import { lightTheme, darkTheme, ThemeType } from "./theme";

const ThemeContext = createContext<{ theme: ThemeType; toggleTheme: () => void }>({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return <ThemeContext.Provider value={{ theme: isDarkMode ? darkTheme : lightTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
