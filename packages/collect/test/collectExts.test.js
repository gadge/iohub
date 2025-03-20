import { decoVector, says } from '@spare/logger'
import { test }             from 'node:test'
import { collectExts }      from '../index.js'

const SOURCE = 'C:\\Users\\hoyeu\\Downloads'

test('collectExts', async () => {
  says['searching'](SOURCE)
  const exts = await collectExts(SOURCE)
  says['extensions'](decoVector(exts))
  says['searching'](`found (${exts.length}) files`)
})