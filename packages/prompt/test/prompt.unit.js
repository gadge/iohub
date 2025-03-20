import { promptDirs, promptDocs, promptExts } from '../src/index.js'

const SOURCE = '..'

await promptExts(SOURCE)
await promptDirs(SOURCE)
await promptDocs(SOURCE)
