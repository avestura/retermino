import React from "react";
import * as style from "../index.scss";

export const styles = style.default;
export const StyleContext = React.createContext(null);

type StyleContextProviderProps = {
  children: React.ReactNode
}

export const StyleContextProvider = ({ children }: StyleContextProviderProps) => (
    <StyleContext.Provider value={styles}>
      {children}
    </StyleContext.Provider>
  );

export default {
  StyleContext,
  StyleContextProvider
};
