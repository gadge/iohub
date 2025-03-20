import { ac, pad }  from '@spare/deco-path'
import { says }     from '@spare/logger'
import { test }     from 'node:test'
import { recurDir } from '../src/index.js'

const SOURCE = 'G:\\library blaustein\\history'

test('recurDir', async () => {
  const config = {
    dir: name => ![ 'test', 'archive' ].includes(name),
    pipe: (source, name) => [ source, name ],
  }
  let i = 0
  says['searching'](SOURCE)
  for await (let [ parent, current ] of recurDir.call(config, SOURCE)) {
    says['folder'](pad(i++, 2), ac(parent), '\\', ac(current))
  }
  says['searching'](`found (${i}) folders`)
})

