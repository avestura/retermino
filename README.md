<h1 align="center">
  Retermino
</h1>

<p align="center">🚀 React component that renders a Terminal 🖥</p>

<p align="center">
  <a href="https://github.com/avestura/retermino/actions?query=Build+and+Test"><img src="https://github.com/avestura/retermino/workflows/Build%20and%20Test/badge.svg" data-canonical-src="https://github.com/avestura/retermino/workflows/Build%20and%20Test/badge.svg"/></a>
  <a href="https://codecov.io/gh/avestura/retermino"><img src="https://codecov.io/gh/avestura/retermino/branch/main/graph/badge.svg?token=xt1kdpvlam" data-canonical-src="https://codecov.io/gh/avestura/retermino/branch/main/graph/badge.svg?token=xt1kdpvlam"/></a>
  <a href="https://www.npmjs.com/package/retermino"><img src="https://img.shields.io/npm/v/retermino/latest" data-canonical-src="https://img.shields.io/npm/v/retermino/latest"/></a>
  <img src="https://img.shields.io/npm/l/retermino" data-canonical-src="https://img.shields.io/npm/l/retermino"/>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#props">Props</a> •
  <a href="#report-a-bug">Report a bug</a>
</p>

![Terminal png](https://retermino.sirv.com/static/terminal-dracula.png)

## Features
- Mobile support. 📱
- Customizable commands, prompt and error message. ✅
- Support callbacks(async/non-async) for commands. 🔄
- Command history using arrow up and down. 🔼
- Support for copy/paste. 📋
- In-built themes and support to create more. 🚀

## Installation
Install package with NPM or YARN and add it to your development dependencies:
```
npm install retermino
```
OR
```
yarn add retermino
```

## Usage
```
import { ReactTerminal } from "retermino";

function App(props) {
  // Define commands here
  const commands = {
    whoami: "jackharper",
    cd: (directory) => `changed path to ${directory}`
  };

  return (
    <ReactTerminal
      commands={commands}
    />
  );
}
```

Also make sure to wrap the main mountpoint around the `TerminalContextProvider`. This retains the state even when the component is unmounted and then mounted back:
```
import { TerminalContextProvider } from "retermino";

ReactDOM.render(
  <TerminalContextProvider>
    <App/>
  </TerminalContextProvider>,
  rootElement
);
```

## Creating custom themes
The component comes with few in-built themes: `light`, `dark`, `material-light`, `material-dark`, `material-ocean`, `matrix` and `dracula`. You can also create custom themes by passing `themes` parameter in props, as follows:

```
<ReactTerminal
  commands={commands}
  themes={{
    my-custom-theme: {
      themeBGColor: "#272B36",
      themeToolbarColor: "#DBDBDB",
      themeColor: "#FFFEFC",
      themePromptColor: "#a917a8"
    }
  }}
  theme="my-custom-theme"
/>
```

## Props
| name | description | default
|--|--|--
| `welcomeMessage` | A welcome message to show at the start, before the prompt begins. Value can be either a string or JSX | null
| `prompt` | Terminal prompt | >>>
| `commands` | List of commands to be provided as a key value pair where value can be either a string, JSX/HTML tag or callback | null
| `errorMessage` | Message to show when unidentified command executed, can be either a string, JSX/HTML tag or callback | "not found!"
| `enableInput` | Whether to enable user input | true
| `showControlBar` | Whether to show the top control bar | true
| `showControlButtons` | Whether to show the control buttons at the top bar of the terminal | true
| `theme` | Theme of the terminal | "light"
| `themes` | Themes object to supply custom themes | null
| `defaultHandler` | Default handler to be used (if provided) when no commands match. Useful when you don't know list of commands beforehand/want to send them to server for handling. | null

## In-built commands
| command | description |
|--|--|
| clear | clears the console |

## Report a bug
If you found a bug in this library, please file an GitHub issue [here](https://github.com/avestura/retermino/issues).
