import { ac, pad } from '@spare/deco-path'
import { says }    from '@spare/logger'
import { test }    from 'node:test'
import { iterDoc } from '../src/iter.js'

const SOURCE = '../../static'

test('iterDoc', async () => {
  const config = {
    dir: name => ![ 'test', 'archive' ].includes(name),
    // doc: (name) => /\.txt$/.test(name)
  }
  let i = 0
  says['searching'](SOURCE)
  for await (let path of iterDoc.call(config, SOURCE)) {
    says['file'](pad(i++, 2), ac(path))
  }
  says['searching'](`found (${i}) files`)
})

