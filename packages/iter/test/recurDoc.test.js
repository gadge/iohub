import { ac, pad }  from '@spare/deco-path'
import { says }     from '@spare/logger'
import { test }     from 'node:test'
import { recurDoc } from '../src/recur.js'

const SOURCE = 'G:\\library blaustein\\semiotics'

test('recurDoc', async () => {
  const config = {
    dir: name => ![ 'test', 'archive' ].includes(name),
    pipe: (name, dir) => [ name, dir ],
    // doc: (name) => /\.txt$/.test(name)
  }
  let i = 0
  says.searching(SOURCE)
  const folders = {}
  for await (let [ name, base ] of recurDoc.call(config, SOURCE)) {
    if (!(base in folders)) {
      folders[base] = []
      says.folder(ac(base))
    }
    folders[base].push(name)
    says.file(pad(i++, 2), ac(name))
  }
  says.searching(`found (${i}) files`)
  // console.log(folders)
})

