import { promptDirs, promptDocs, promptExts } from '../src/index.js'
import { test } from 'node:test'

const SOURCE = '..'

await promptExts(SOURCE)
await promptDirs(SOURCE)
await promptDocs(SOURCE)
