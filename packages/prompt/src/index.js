import checkbox                                  from '@inquirer/checkbox'
import { collectDirs, collectDocs, collectExts } from '@iohub/collect'
import { acPath }                                from '@spare/deco-path'
import { ac }                                    from '@spare/plot'

export async function promptExts(source) {
  const choices = await collectExts(source)
  return !choices.length
    ? []
    : checkbox({
      message: `select [${acPath(source)}] ${ac('extension')}(s)`, choices: choices, pageSize: 12,
    })
}

export async function promptDocs(source) {
  const choices = await collectDocs(source)
  return !choices.length
    ? []
    : checkbox({ message: `select [${acPath(source)}] ${ac('docs')}(s)`, choices: choices, pageSize: 24 })
}

export async function promptDirs(source) {
  const choices = await collectDirs(source)
  return !choices.length
    ? []
    : checkbox({ message: `select [${acPath(source)}] ${ac('dir')}(s)`, choices: choices, pageSize: 18 })
}

