# @iohub/sizeinfo

Precise byte-size formatting utility for Node.js and browsers

[![npm version](https://img.shields.io/npm/v/@iohub/sizeinfo.svg?style=flat-square)](https://npmjs.org/package/@iohub/sizeinfo)
[![npm quality](http://npm.packagequality.com/shield/@iohub/sizeinfo.svg?style=flat-square)](http://packagequality.com/#?package=@iohub/sizeinfo)
[![npm download](https://img.shields.io/npm/dm/@iohub/sizeinfo.svg?style=flat-square)](https://npmjs.org/package/@iohub/sizeinfo)
[![npm total-download](https://img.shields.io/npm/dt/@iohub/sizeinfo.svg?style=flat-square)](https://npmjs.org/package/@iohub/sizeinfo)
[![size](https://packagephobia.now.sh/badge?p=@iohub/sizeinfo)](https://packagephobia.now.sh/result?p=@iohub/sizeinfo)
[![github commit activity](https://img.shields.io/github/commit-activity/y/hoyeungw/iohub?style=flat-square)](https://github.com/hoyeungw/iohub)
[![npm license](https://img.shields.io/npm/l/@iohub/sizeinfo.svg?style=flat-square)](https://npmjs.org/package/@iohub/sizeinfo)

## Features

- Precise byte-size formatting with decimal point control
- Support for both binary (1024) and decimal (1000) units
- Automatic scale detection from bytes to yottabytes
- Zero dependencies
- ES2015+ syntax

## Installation

```bash
# Using npm
$ npm install @iohub/sizeinfo

# Using yarn
$ yarn add @iohub/sizeinfo

# Using pnpm
$ pnpm add @iohub/sizeinfo
```

## Usage

```js
import { humanScale, base3ToScale, trailZero } from '@iohub/sizeinfo'

// humanScale(num, dec)
// Converts bytes to human-readable format
// @param {number} num - Size in bytes
// @param {boolean} dec - Use decimal (1000) instead of binary (1024)
// @returns {string} Formatted size with unit
humanScale(1500000, false)  // => "1.43 MB"
humanScale(1500000, true)   // => "1.50 M"

// base3ToScale(base3, dec)
// Gets the appropriate unit suffix for a given scale
// @param {number} base3 - Power of 1024/1000 (0-8)
// @param {boolean} dec - Use decimal units (K,M,G) instead of binary (KB,MB,GB)
// @returns {string} Unit suffix
base3ToScale(2, false)  // => "MB"
base3ToScale(2, true)   // => "M"

// trailZero(num)
// Formats a number with exactly two decimal places
// @param {number} num - Number to format
// @returns {string} Formatted number with two decimals
trailZero(1.5)    // => "1.50"
trailZero(1.567)  // => "1.57"
```

## License

[MIT](LICENSE) © Hoyeung Wong
