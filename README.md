# iohub

[![Node Version](https://img.shields.io/badge/node-%3E%3D22.0.0-brightgreen.svg)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg)](https://pnpm.io/)

A collection of high-performance I/O utilities for Node.js.

## Features

- 🚀 Zero-dependency core functionality
- ⚡️ Promise-based async/await API
- 📦 Modern ES modules support
- 🔧 TypeScript-ready
- 🎯 Focused, single-purpose packages

## Packages

### [@iohub/collect](./packages/collect)
Efficient file and directory collection utilities.
```js
import { collectDirs, collectDocs, collectExts } from '@iohub/collect'

// Get all directories
const dirs = await collectDirs('./src')

// Get all files
const files = await collectDocs('./src')

// Get unique file extensions
const extensions = await collectExts('./src')
```

### [@iohub/iter](./packages/iter)
Iterative file system traversal utilities.
```js
import { iterDir, iterDoc, recurDir, recurDoc } from '@iohub/iter'

// Iterate through files
for await (const file of iterDoc('./src')) {
  console.log(file)
}

// Recursively traverse directories
for await (const dir of recurDir('./src')) {
  console.log(dir)
}
```

### [@iohub/pathinfo](./packages/pathinfo)
Path manipulation and information utilities.
```js
import { pathToName, pathToNameExt, exists } from '@iohub/pathinfo'

// Get filename without extension
const name = pathToName('file.txt') // 'file'

// Get filename and extension
const { name, ext } = pathToNameExt('file.txt') // { name: 'file', ext: '.txt' }

// Check if path exists
const fileExists = await exists('./file.txt')
```

### [@iohub/prompt](./packages/prompt)
Interactive file system prompts.
```js
import { promptExts, promptFiles, promptFolders } from '@iohub/prompt'

// Select files by extension
const selectedFiles = await promptExts('./src')

// Select folders
const selectedFolders = await promptFolders('./src')
```

### [@iohub/sizeinfo](./packages/sizeinfo)
Human-readable file size formatting.
```js
import { humanScale, trailZero } from '@iohub/sizeinfo'

// Format file size
const size = humanScale(1024 * 1024) // '1.00 MB'

// Remove trailing zeros
const formatted = trailZero('1.00') // '1'
```

## Installation

```bash
# npm
npm install @iohub/collect @iohub/iter @iohub/pathinfo @iohub/prompt @iohub/sizeinfo

# yarn
yarn add @iohub/collect @iohub/iter @iohub/pathinfo @iohub/prompt @iohub/sizeinfo

# pnpm
pnpm add @iohub/collect @iohub/iter @iohub/pathinfo @iohub/prompt @iohub/sizeinfo
```

Or install individual packages as needed.

## License

[MIT](LICENSE) © Hoyeung Wong