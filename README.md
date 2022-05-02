# CLN Online

Initial steps towards a frontend for [command line notes (cln)](https://github.com/kvnloughead/command-line-notes).

## Tech

- Built from @open-wc starter project
- Uses TypeScript and Lit Components
- `<code-input>` component for a syntax highlighted markdown editor
  - [original article](https://css-tricks.com/creating-an-editable-textarea-that-supports-syntax-highlighted-code/)
  - [repo](https://github.com/WebCoder49/code-inputs)

## Intended Features

- Mock command line for running [`cln` commands](https://github.com/kvnloughead/command-line-notes#other-usage), opening notes `code-input` window rather than local editor
- Create, read, edit and delete notes
- Search for notes with `cln grep` and `cln find` commands
- Window for viewing processed markdown files, maybe using [zero-md](https://zerodevx.github.io/zero-md/)

## Longer term

- File structure navigation
- For backend, consider [consider] (https://github.com/johnfoderaro/markdown-api)
