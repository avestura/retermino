import React from "react";
import { StyleContextProvider } from "./StyleContext";
import { ThemeContextProvider } from "./ThemeContext";

type ContextProviderProps = {
  children: React.ReactElement
}

export default function ContextProvider({ children }: ContextProviderProps) {
  return (
    <StyleContextProvider>
      <ThemeContextProvider>
        {children}
      </ThemeContextProvider>
    </StyleContextProvider>
  );
}
