# @iohub/iter

Async directory traversal utilities with flexible filtering and customization options.

[![npm version](https://img.shields.io/npm/v/@iohub/iter.svg?style=flat-square)](https://npmjs.org/package/@iohub/iter)
[![npm quality](http://npm.packagequality.com/shield/@iohub/iter.svg?style=flat-square)](http://packagequality.com/#?package=@iohub/iter)
[![npm download](https://img.shields.io/npm/dm/@iohub/iter.svg?style=flat-square)](https://npmjs.org/package/@iohub/iter)
[![npm total-download](https://img.shields.io/npm/dt/@iohub/iter.svg?style=flat-square)](https://npmjs.org/package/@iohub/iter)
[![size](https://packagephobia.now.sh/badge?p=@iohub/iter)](https://packagephobia.now.sh/result?p=@iohub/iter)
[![github commit activity](https://img.shields.io/github/commit-activity/y/hoyeungw/@iohub/iter?style=flat-square)](https://github.com/hoyeungw/@iohub/iter)
[![npm license](https://img.shields.io/npm/l/@iohub/iter.svg?style=flat-square)](https://npmjs.org/package/@iohub/iter)

## Features

- Async iterators for efficient directory traversal
- Flexible filtering for files and directories
- Recursive and non-recursive traversal options
- Custom path joining and transformation
- Built on native Node.js fs/promises API

## Installation

```bash
# npm
npm install @iohub/iter

# yarn
yarn add @iohub/iter

# pnpm
pnpm add @iohub/iter
```

## Usage

```js
import { iterDir, iterDoc, recurDir, recurDoc, recurLot } from '@iohub/iter'

// List files in a directory
for await (const file of iterDoc('src')) {
  console.log(file) // Yields file paths in src/
}

// List subdirectories
for await (const dir of iterDir('src')) {
  console.log(dir) // Yields directory paths in src/
}

// Recursively list all files
for await (const file of recurDoc('src')) {
  console.log(file) // Yields file paths in src/ and subdirectories
}

// Recursively list all directories
for await (const dir of recurDir('src')) {
  console.log(dir) // Yields directory paths in src/ and subdirectories
}

// Group files by directory
for await (const group of recurLot('src')) {
  console.log(group.dir) // Directory path
  console.log(group) // Array of files in directory
}

// Custom filtering and path transformation
const options = {
  doc: name => name.endsWith('.js'), // Filter files
  dir: name => !name.startsWith('.'), // Filter directories
  pipe: (name, dir) => `${dir}/${name}`, // Custom path joining
}

for await (const file of recurDoc.call(options, 'src')) {
  console.log(file) // Yields only .js files, skipping dot directories
}
```

## Meta

[LICENSE (MIT)](/LICENSE)

Copyright (c) 2019-present, Hoyeung Wong
