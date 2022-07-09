import * as React from "react";
import Terminal from "./components/Terminal";
import ContextProvider from "./contexts";
import { TerminalContextProvider as _TerminalContextProvider } from "./contexts/TerminalContext";

export function ReactTerminal(props: any): any {
  return (
    <ContextProvider>
      <Terminal {...props} />
    </ContextProvider>
  );
}

export const TerminalContextProvider = _TerminalContextProvider;

export default {
  ReactTerminal,
  TerminalContextProvider
};
