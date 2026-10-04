<p align="center">
  <a href="https://anvil.kisp-lab.org/" aria-label="AnvilHDL website">
    <img alt="AnvilHDL" src="assets/anvilhdl-logo.png" height="84">
  </a>
</p>

# Anvil Language Server

A [Language Server Protocol](https://microsoft.github.io/language-server-protocol/) implementation for the [AnvilHDL](https://github.com/AnvilHDL/anvil) hardware description language, with extensions for VS Code and Vim/Neovim (coc.nvim).

![Hover information and inlay hints in VS Code](assets/screenshot.jpeg)

> [!NOTE]
> The language server and the compiler's AST output are experimental. The AST format may change between compiler versions.

## Features

| Feature | Support |
| --- | --- |
| Diagnostics | Compile errors; warnings¹ |
| Hover | Definitions, types and syntax help; lifetimes and timings¹ |
| Navigation | Go to definition, go to type definition¹, find references (current file only) |
| Completion | Keywords, document symbols, context-aware suggestions and snippets |
| Signature help | Function calls, message sends, record initialisers and spawns |
| Inlay hints | Clock cycles and lifetimes¹ |
| Rename | Not supported |

¹ Depends on compiler support that is still incomplete; results may be missing or inaccurate.

See [LSP.md](LSP.md) for the detailed feature matrix.

## Requirements

- [Node.js](https://nodejs.org/) 22 or later.
- An Anvil compiler with AST output (`-ast`): commit [`f1fd09b`](https://github.com/wxwern/anvil/tree/add-annotated-ast-output) or later. A compatible version is pinned as the `anvil` submodule of this repository.

## Installation

### Compiler

```bash
git clone --recurse-submodules https://github.com/AnvilHDL/anvil-lsp.git
cd anvil-lsp/anvil
eval $(opam env) && dune build --release && dune install
```

The compiler branch may be rebased. Run `./update.sh submodules` to resynchronise the submodule.

### VS Code

Install **AnvilHDL** (`anvilhdl.anvil-lsp`) from the Extensions view, or build it from source:

```bash
cd anvil-lsp/extensions/vscode
npm install && npm run build
```

Then run **Developer: Install Extension from Location...** from the Command Palette and select `extensions/vscode`. To create an installable package instead, run `npm run package` and use **Extensions: Install from VSIX...**.

### Vim/Neovim (coc.nvim)

With [vim-plug](https://github.com/junegunn/vim-plug):

```vim
Plug 'AnvilHDL/anvil-lsp', {
    \ 'rtp': 'extensions/vim',
    \ 'do': 'cd extensions/vim && npm install && npm run build'
    \ }
```

Alternatively, build `extensions/vim` with `npm install && npm run build` and add it to the runtime path:

```vim
set rtp^=/path/to/anvil-lsp/extensions/vim
```

## Configuration

| Setting | Default | Description |
| --- | --- | --- |
| `anvil.executablePath` | `anvil` on `PATH` | Path to the compiler. |
| `anvil.projectRoot` | Workspace root | Directory in which the compiler runs. |
| `anvil.maxNumberOfProblems` | `100` | Maximum number of diagnostics per file. |
| `anvil.showTimingInfo` | Condensed inlay hints and hover | Where clock-cycle and lifetime information is shown. |
| `anvil.showSyntaxHelp` | Hover and keyword completions | Where explanations of Anvil syntax are shown. |
| `anvil.asciiOnlyIcons` | `false` | Use ASCII characters instead of Unicode symbols. |

## Development

```bash
./build.sh    # compiler, server and extensions
./test.sh
./format.sh
./update.sh   # pull this repository and resynchronise submodules
```

Each script accepts component names (`anvil`, `server`, `vscode`, `vim`) to limit it to those components. See [MAINTAINERS.md](MAINTAINERS.md) for the architecture and maintenance guide.
