import { decoString, says } from '@spare/logger'
import { lpad }             from '@texting/padder'
import { test }             from 'node:test'
import { shallowFiles }    from '../src/shallowFiles.js'

const SOURCE = '../../resources'

test('shallowFiles shallow', async () => {
  const config = {
    dir: name => ![ 'test', 'archive' ].includes(name),
    // doc: (name) => /\.txt$/.test(name)
  }
  let i = 0
  says['searching'](SOURCE)
  for await (let path of shallowFiles.call(config, SOURCE)) {
    says['file'](lpad(i++, 2), decoString(path))
  }
  says['searching'](`found (${i}) files`)
})

