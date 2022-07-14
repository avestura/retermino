import * as React from "react";
import { isMobile } from "react-device-detect";

import { StyleContext } from "../contexts/StyleContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { useClickOutsideEvent } from "../hooks/terminal";

import Editor, { type EditorProps } from "./Editor";

export type TerminalProps = Partial<EditorProps> & {
  theme?: string
};

export default function Terminal(props: TerminalProps) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [consoleFocused, setConsoleFocused] = React.useState(!isMobile);
  const style = React.useContext(StyleContext);
  const themeStyles = React.useContext(ThemeContext);
  useClickOutsideEvent(wrapperRef, consoleFocused, setConsoleFocused);

  // Get all props destructively
  const {
    caret,
    theme,
    prompt,
    commands,
    welcomeMessage,
    errorMessage,
    enableInput,
    defaultHandler
  } = props;

  const editor = (
<Editor
  caret={caret}
  consoleFocused={consoleFocused}
  prompt={prompt}
  commands={commands}
  welcomeMessage={welcomeMessage}
  errorMessage={errorMessage}
  enableInput={enableInput}
  defaultHandler={defaultHandler}
/>
);

  return (
    <div
      ref={wrapperRef}
      id={style.terminalContainer}
      className={style[`theme--${theme}`]}
      data-testid="terminal"
    >
      <div className={`${style.terminal}`} style={{ background: themeStyles.themeToolbarColor, color: themeStyles.themeColor }}>
        {editor}
      </div>
    </div>
  );
}
