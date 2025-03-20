import { promptExts, promptFiles, promptFolders } from '../src/index.js'

const SOURCE = 'G:\\barencha'

await promptExts(SOURCE)
await promptFiles(SOURCE)

