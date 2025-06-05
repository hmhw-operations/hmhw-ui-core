"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export enum Theme {
  DARK = "dark-theme",
  LIGHT = "light-theme",
  DAY = "day-theme"
}

const THEMES = Object.values(Theme);
const DEFAULT_THEME = Theme.DARK;

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: DEFAULT_THEME,
  setTheme: () => {},
});

const getCurrentThemeFromBody = (): Theme => {
  if (typeof document === "undefined") return DEFAULT_THEME;

  const bodyClasses = document.body.classList;
  const currentTheme = THEMES.find(theme => bodyClasses.contains(theme));

  return currentTheme || DEFAULT_THEME;
};

const applyThemeToBody = (theme: Theme) => {
  if (typeof document === "undefined") return;

  const bodyClasses = document.body.classList;
  bodyClasses.remove(...THEMES);
  bodyClasses.add(theme);
};

interface ThemeProviderProps {
  children: ReactNode;
}
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);

  useEffect(() => {
    const currentTheme = getCurrentThemeFromBody();
    setThemeState(currentTheme);

    if (!THEMES.some(theme => document.body.classList.contains(theme))) {
      applyThemeToBody(DEFAULT_THEME);
    }
  }, []);

  useEffect(() => {
    applyThemeToBody(theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export { THEMES };
