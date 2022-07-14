import * as React from "react";
import Terminal, { TerminalProps } from "./components/Terminal";
import ContextProvider from "./contexts";
import { TerminalContextProvider as _TerminalContextProvider } from "./contexts/TerminalContext";

export function ReactTerminal(props: TerminalProps) {
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
