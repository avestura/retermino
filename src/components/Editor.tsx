import * as React from "react";

import { StyleContext } from "../contexts/StyleContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { TerminalContext } from "../contexts/TerminalContext";
import { useCurrentLine, useScrollToBottom } from "../hooks/editor";

export type EditorProps = {
    enableInput: boolean;
    caret: boolean;
    consoleFocused: boolean;
    prompt: string;
    commands: Record<
        string,
        React.ReactNode | ((args: string) => React.ReactNode)
    >;
    welcomeMessage?: string;
    errorMessage: React.ReactNode | ((command: string) => React.ReactNode);
    defaultHandler?: (command: string) => void;
};

export default function Editor({
  enableInput,
  caret,
  consoleFocused,
  prompt,
  commands,
  welcomeMessage,
  errorMessage,
  defaultHandler,
}: EditorProps) {
    const wrapperRef = React.useRef(null);
    const style = React.useContext(StyleContext);
    const themeStyles = React.useContext(ThemeContext);
    const { bufferedContent } = React.useContext(TerminalContext);

    useScrollToBottom(bufferedContent, wrapperRef);

    const currentLine = useCurrentLine(
        caret,
        consoleFocused,
        prompt,
        commands,
        errorMessage,
        enableInput,
        defaultHandler
    );

    return (
        <div
          ref={wrapperRef}
          className={style.editor}
          style={{ background: themeStyles.themeBGColor }}
        >
            {welcomeMessage ?? ""}
            {bufferedContent}
            {currentLine}
        </div>
    );
}
