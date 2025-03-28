import checkbox                                  from '@inquirer/checkbox'
import { collectDirs, collectDocs, collectExts } from '@iohub/collect'
import { acPath }                                from '@spare/deco-path'
import { ac }                                    from '@spare/plot'

export async function promptExts(source) {
  const pageSize = this?.pageSize ?? 12
  const choices = await collectExts(source)
  return !choices.length
    ? []
    : checkbox({ message: `select [${acPath(source)}] ${ac('extension')}(s)`, choices, pageSize })
}

export async function promptDocs(source) {
  const pageSize = this?.pageSize ?? 24
  const choices = await collectDocs(source)
  return !choices.length
    ? []
    : checkbox({ message: `select [${acPath(source)}] ${ac('docs')}(s)`, choices, pageSize })
}

export async function promptDirs(source) {
  const pageSize = this?.pageSize ?? 18
  const choices = await collectDirs(source)
  return !choices.length
    ? []
    : checkbox({ message: `select [${acPath(source)}] ${ac('dir')}(s)`, choices, pageSize })
}

