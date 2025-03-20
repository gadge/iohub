import { pad }              from '@spare/deco-path'
import { decoString, says } from '@spare/logger'
import { test }             from 'node:test'
import { iterDir }          from '../src/iter.js'

const SOURCE = '../'

test('iterDir', async () => {
  const CONF = { dir: name => ![ 'test', 'archive' ].includes(name) }
  let i = 0
  says['searching'](SOURCE)
  for await (let path of iterDir.call(CONF, SOURCE)) {
    says['folder'](pad(i++, 2), decoString(path))
  }
  says['searching'](`found (${i}) folders`)
})

