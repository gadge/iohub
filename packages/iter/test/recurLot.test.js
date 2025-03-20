import { decoPath, Fades, pad } from '@spare/deco-path'
import { says }                 from '@spare/logger'
import { test }                 from 'node:test'
import { recurLot }             from '../src/recur.js'

test('recurLot', async () => {
  const SRC = 'G:\\library blaustein\\semiotics'
  for await (const list of recurLot(SRC)) {
    const fades = Fades.build(list.length)
    says['folder'](decoPath(list.dir))
    for (const [ index, file ] of list.entries()) {
      console.log(pad(index, 2), fades.deco(file))
    }
  }
})