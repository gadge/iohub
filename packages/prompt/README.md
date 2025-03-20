# @iohub/prompt

Interactive CLI prompts for file system operations

[![npm version](https://img.shields.io/npm/v/@iohub/prompt.svg?style=flat-square)](https://npmjs.org/package/@iohub/prompt)
[![npm quality](http://npm.packagequality.com/shield/@iohub/prompt.svg?style=flat-square)](http://packagequality.com/#?package=@iohub/prompt)
[![npm download](https://img.shields.io/npm/dm/@iohub/prompt.svg?style=flat-square)](https://npmjs.org/package/@iohub/prompt)
[![npm total-download](https://img.shields.io/npm/dt/@iohub/prompt.svg?style=flat-square)](https://npmjs.org/package/@iohub/prompt)
[![size](https://packagephobia.now.sh/badge?p=@iohub/prompt)](https://packagephobia.now.sh/result?p=@iohub/prompt)
[![github commit activity](https://img.shields.io/github/commit-activity/y/hoyeungw/iohub?style=flat-square)](https://github.com/hoyeungw/iohub)
[![npm license](https://img.shields.io/npm/l/@iohub/prompt.svg?style=flat-square)](https://npmjs.org/package/@iohub/prompt)

## Features

- Interactive file system selection with checkbox interface
- Efficient filtering by extensions, files, or folders
- Customizable page sizes for better UX
- Zero dependencies for core functionality
- Modern ES modules support
- TypeScript-ready

## Installation

```bash
# Using npm
npm install @iohub/prompt

# Using yarn
yarn add @iohub/prompt

# Using pnpm
pnpm add @iohub/prompt
```

## Usage

```js
import { promptExts, promptDocs, promptDirs } from '@iohub/prompt'

// Select files by extension
await promptExts('/path/to/source')
// Returns: string[] - Array of selected extensions
// Example: ['.js', '.ts', '.json']

// Select specific documents
await promptDocs('/path/to/source')
// Returns: string[] - Array of selected document paths
// Example: ['index.js', 'package.json']

// Select directories
await promptDirs('/path/to/source')
// Returns: string[] - Array of selected directory paths
// Example: ['src', 'test', 'dist']
```

## API

### promptExts(source: string)
Displays a checkbox prompt for selecting file extensions in the given source directory.
- Page size: 12 items
- Returns: Promise<string[]>

### promptDocs(source: string)
Displays a checkbox prompt for selecting documents in the given source directory.
- Page size: 24 items
- Returns: Promise<string[]>

### promptDirs(source: string)
Displays a checkbox prompt for selecting directories in the given source directory.
- Page size: 18 items
- Returns: Promise<string[]>

## License

[MIT](LICENSE) © Hoyeung Wong
