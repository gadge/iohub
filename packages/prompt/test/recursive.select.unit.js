import { join }                   from 'node:path'
import { promptDirs, promptDocs } from '../src/index.js'

const SOURCE = '..'

async function selector(source) {
  const list = this ?? []
  const files = await promptDocs(source)
  list.push(...files.map(file => join(source, file)))
  const folders = await promptDirs(source)
  for (const folder of folders) {
    await selector.call(list, join(source, folder))
  }
  return list
}

const result = await selector(SOURCE)
console.log(result)