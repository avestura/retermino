import * as React from "react";
import defaultThemes from "../themes";
import { ReterminoTheme, ReterminoThemeCollection } from "../themes/theme";

export const ThemeContext = React.createContext<ReterminoTheme>(null);

type ThemeContextProviderProps = {
  children: React.ReactElement
}

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const themes: ReterminoThemeCollection = { ...defaultThemes, ...(children.props.themes || {}) };
  const currentTheme: ReterminoTheme = themes[children.props.theme] || themes.light;

  return (
    <ThemeContext.Provider value={currentTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default {
  ThemeContext,
  ThemeContextProvider
};
