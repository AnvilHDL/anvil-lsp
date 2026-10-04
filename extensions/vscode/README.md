<p align="center">
  <img alt="AnvilHDL" src="https://raw.githubusercontent.com/AnvilHDL/anvil-lsp/main/assets/anvilhdl-logo.png" height="84">
</p>

# AnvilHDL for Visual Studio Code

Language support for [AnvilHDL](https://anvil.kisp-lab.org/), a timing-safe hardware description language, powered by the [Anvil Language Server](https://github.com/AnvilHDL/anvil-lsp).

![Hover information and inlay hints](https://raw.githubusercontent.com/AnvilHDL/anvil-lsp/main/assets/screenshot.jpeg)

## Features

- **Diagnostics:** compile errors as you type.
- **Hover:** definitions, types, timing contracts and lifetimes, with explanations of Anvil syntax.
- **Navigation:** go to definition, go to type definition and find references.
- **Completion:** keywords, symbols and context-aware suggestions, with snippets.
- **Signature help:** function calls, message sends, record initialisers and spawns.
- **Inlay hints:** clock cycles and lifetimes.
- **Syntax highlighting** and file icons for `.anvil` files.

The extension and the compiler's AST output are experimental, and some timing features depend on compiler support that is still incomplete.

## Requirements

The extension runs the Anvil compiler to analyse your code. It needs a compiler with AST output (`-ast`), at commit [`f1fd09b`](https://github.com/wxwern/anvil/tree/add-annotated-ast-output) or later. See the [installation instructions](https://github.com/AnvilHDL/anvil-lsp#installation).

The compiler is found as `anvil` on your `PATH`, or at the path set in `anvil.executablePath`.

## Settings

| Setting | Default | Description |
| --- | --- | --- |
| `anvil.executablePath` | `anvil` on `PATH` | Path to the compiler. |
| `anvil.projectRoot` | Workspace root | Directory in which the compiler runs. |
| `anvil.maxNumberOfProblems` | `100` | Maximum number of diagnostics per file. |
| `anvil.showTimingInfo` | Condensed inlay hints and hover | Where clock-cycle and lifetime information is shown. |
| `anvil.showSyntaxHelp` | Hover and keyword completions | Where explanations of Anvil syntax are shown. |
| `anvil.asciiOnlyIcons` | `false` | Use ASCII characters instead of Unicode symbols. |

## Feedback

Report issues at [github.com/AnvilHDL/anvil-lsp](https://github.com/AnvilHDL/anvil-lsp/issues).
