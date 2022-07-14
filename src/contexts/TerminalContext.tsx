import React, { Dispatch, ReactNode, SetStateAction } from "react";

type TerminalContextValue = {
  bufferedContent: ReactNode
  setBufferedContent: Dispatch<SetStateAction<ReactNode>>
  appendCommandToHistory: (command: string) => void
  getPreviousCommand: () => string
  getNextCommand: () => string
}

export const TerminalContext = React.createContext<TerminalContextValue>(null);

type TerminalContextProviderProps = {
  children: React.ReactNode
}

export const TerminalContextProvider = ({ children }: TerminalContextProviderProps) => {
  const [bufferedContent, setBufferedContent] = React.useState("");
  const [commandsHistory, setCommandsHistory] = React.useState<string[]>([]);
  const [historyPointer, setHistoryPointer] = React.useState(null);

  React.useEffect(() => {
    setHistoryPointer(commandsHistory.length);
  }, [commandsHistory]);

  const appendCommandToHistory = (command: string) => {
    if (!command) {
      return;
    }

    setCommandsHistory(commandsHistory.concat(command));
  };

  const getPreviousCommand = () => {
    if (historyPointer === 0) {
      if (commandsHistory.length === 0) {
        return "";
      }

      return commandsHistory[0];
    }

    const command = commandsHistory[historyPointer - 1];
    if (historyPointer > 0) {
      setHistoryPointer(historyPointer - 1);
    }

    return command;
  };

  const getNextCommand = () => {
    if (historyPointer + 1 <= commandsHistory.length) {
      const command = commandsHistory[historyPointer + 1];
      setHistoryPointer(historyPointer + 1);
      return command;
    }

    return "";
  };

  return (
    <TerminalContext.Provider
      value={{
        bufferedContent,
        setBufferedContent,
        appendCommandToHistory,
        getPreviousCommand,
        getNextCommand
      }}
    >
      {children}
    </TerminalContext.Provider>
  );
};

export default {
  TerminalContext,
  TerminalContextProvider
};
