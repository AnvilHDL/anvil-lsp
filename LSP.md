# Feature Support

Status of Language Server Protocol features. Several features depend on annotations in the compiler's AST output; where that support is incomplete, the feature is implemented in the language server but results may be missing or inaccurate.

| Status | Meaning |
| --- | --- |
| ✅ | Supported |
| ⚠️ | Implemented; requires further compiler support to be complete |
| ⏳ | Not implemented; requires compiler support |
| ❌ | Not implemented |

## Diagnostics

- ✅ Compile errors
- ⚠️ Compile warnings

## Hover

- ✅ Definitions and types
- ✅ Anvil syntax help
- ⚠️ Lifetimes and timings
- ❌ Documentation comments

## Navigation

- ✅ Go to definition
- ⚠️ Go to type definition
- ✅ Find all references (current file only)
- ⏳ Rename symbol (requires all reference locations from the compiler)

## Signature Help

- ✅ Function calls: `call f(...)`
- ✅ Message sends: `send ep.msg(...)`
- ✅ Record initialisers: `Rec::{ field = value; ... }`
- ✅ Spawns: `spawn Proc(...)`

## Completion

- ✅ Keywords
- ✅ Document symbols
- ✅ Snippets for function calls, record initialisers and spawns, with automatic delimiter insertion
- Context-aware suggestions:
    - ✅ Function calls (`call`)
    - ✅ Message send and receive (`send`, `recv`)
    - ✅ Register read (`*`) and assignment (`set`)
    - ✅ Enum variants (`Enum::`)
    - ✅ Type annotations (`name : type`)
    - ✅ Lifetime annotations in channel definitions
    - ⏳ Record field access (`.field`)
    - ⏳ Values matching parameter data types
    - ❌ Record initialiser fields (`Rec::{ field =`)

## Inlay Hints

- ⚠️ Clock-cycle indicators
- ⚠️ Lifetime indicators
