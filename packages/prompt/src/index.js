import checkbox                                      from '@inquirer/checkbox'
import { collectExts, collectFiles, collectFolders } from '@iohub/collect'
import { acPath }                                    from '@spare/deco-path'
import { ros }                                       from '@spare/logger'

export async function promptExts(source) {
  const choices = await collectExts(source)
  return !choices.length
    ? []
    : checkbox({ message: `select [${acPath(source)}]${ros('extension')}(s)`, choices: choices, pageSize: 12 })
}

export async function promptDocs(source) {
  const choices = await collectFiles(source)
  return !choices.length
    ? []
    : checkbox({ message: `select [${acPath(source)}] ${ros('docs')}(s)`, choices: choices, pageSize: 24 })
}

export async function promptDirs(source) {
  const choices = await collectFolders(source)
  return !choices.length
    ? []
    : checkbox({ message: `select [${acPath(source)}] ${ros('dir')}(s)`, choices: choices, pageSize: 18 })
}

