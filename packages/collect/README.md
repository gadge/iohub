# @iohub/collect

Powerful filesystem collection utilities for Node.js

[![npm version][npm-image]][npm-url]
[![npm quality][quality-image]][quality-url]
[![npm download][download-image]][npm-url]
[![npm total-download][total-download-image]][npm-url]
[![size][size]][size-url]
[![github commit activity][commit-image]][github-url]
[![npm license][license-image]][npm-url]

## Features

- Efficient file and directory collection utilities
- Promise-based async/await API
- TypeScript support
- Zero dependencies for core functionality

## Installation

```bash
# npm
npm install @iohub/collect

# yarn
yarn add @iohub/collect

# pnpm
pnpm add @iohub/collect
```

## API

### File Collection

```js
import { 
  collectDocItems,
  collectDocPaths,
  collectDocs,
  collectNames,
  collectNameExts,
  collectExts
} from '@iohub/collect'

// Get file entries (Dirent objects)
const files = await collectDocItems('./docs')

// Get full file paths
const paths = await collectDocPaths('./docs')

// Get filenames with extensions
const docs = await collectDocs('./docs')

// Get filenames without extensions
const names = await collectNames('./docs')

// Get filename-extension pairs
const nameExts = await collectNameExts('./docs')

// Get unique file extensions
const extensions = await collectExts('./docs')
```

### Directory Collection

```js
import { collectDirItems, collectDirs } from '@iohub/collect'

// Get directory entries (Dirent objects)
const dirEntries = await collectDirItems('./src')

// Get directory names
const directories = await collectDirs('./src')
```

## License

[MIT](/LICENSE)

Copyright (c) 2019-present, Hoyeung Wong

[//]: <> (Shields)

[npm-image]: https://img.shields.io/npm/v/@iohub/collect.svg?style=flat-square

[quality-image]: http://npm.packagequality.com/shield/@iohub/collect.svg?style=flat-square

[download-image]: https://img.shields.io/npm/dm/@iohub/collect.svg?style=flat-square

[total-download-image]:https://img.shields.io/npm/dt/@iohub/collect.svg?style=flat-square

[license-image]: https://img.shields.io/npm/l/@iohub/collect.svg?style=flat-square

[commit-image]: https://img.shields.io/github/commit-activity/y/hoyeungw/@iohub/collect?style=flat-square

[size]: https://packagephobia.now.sh/badge?p=@iohub/collect

[//]: <> (Link)

[npm-url]: https://npmjs.org/package/@iohub/collect

[quality-url]: http://packagequality.com/#?package=@iohub/collect

[github-url]: https://github.com/hoyeungw/@iohub/collect

[size-url]: https://packagephobia.now.sh/result?p=@iohub/collect
