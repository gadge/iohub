# @iohub/pathinfo

Powerful path manipulation utilities for Node.js with zero dependencies.

[![npm version](https://img.shields.io/npm/v/@iohub/pathinfo.svg?style=flat-square)](https://npmjs.org/package/@iohub/pathinfo)
[![npm downloads](https://img.shields.io/npm/dm/@iohub/pathinfo.svg?style=flat-square)](https://npmjs.org/package/@iohub/pathinfo)
[![npm license](https://img.shields.io/npm/l/@iohub/pathinfo.svg?style=flat-square)](https://npmjs.org/package/@iohub/pathinfo)
[![github commit activity](https://img.shields.io/github/commit-activity/y/gadge/iohub?style=flat-square)](https://github.com/gadge/iohub)

## Features

- Extract file names, extensions, and directory information
- Asynchronous file existence checking
- Zero dependencies
- Modern ES modules support
- Node.js >=22.0.0

## Installation

```bash
# npm
npm install @iohub/pathinfo

# yarn
yarn add @iohub/pathinfo

# pnpm
pnpm add @iohub/pathinfo
```

## Usage

```js
import { pathToName, pathToNameExt, pathToEntry, pathToInfo, exists } from '@iohub/pathinfo'

// Extract file name without extension
pathToName('path/to/file.txt')  // => 'file'

// Get file name with extension
pathToNameExt('path/to/file.txt')  // => 'file.txt'

// Get file name and extension as array
pathToEntry('path/to/file.txt')  // => ['file', '.txt']

// Get complete path information
pathToInfo('path/to/file.txt')  // => { dir: 'path/to', doc: 'file', ext: '.txt' }

// Check if path exists
await exists('path/to/file.txt')  // => true/false
```

## License

[MIT](LICENSE) © Hoyeung Wong
