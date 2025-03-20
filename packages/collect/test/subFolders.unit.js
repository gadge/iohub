import { deco, says }                                                       from '@spare/logger'
import { test }                                                        from 'node:test'
import { collectDocItems, collectNameExts, collectNames, collectDocs } from '../src/collectDocs.js'
import { collectDirs }                                                 from '../src/collectDirs.js'

test('subFolders', async () => {
  const SRC = 'G:\\advertisement asset\\imagery'
  says['collectFolders'](deco(await collectDirs(SRC)))
  says['collectFiles'](deco(await collectDocs(SRC)))
  says['collectFileNames'](deco(await collectNames(SRC)))
  says['collectFileExts'](deco(await collectNameExts(SRC)))
  says['collectFileEnts'](deco(await collectDocItems(SRC)))
})