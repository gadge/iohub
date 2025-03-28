import { access, constants }          from 'node:fs/promises'
import { basename, dirname, extname } from 'node:path'

export const pathToExt = extname

export const pathToName = filePath => basename(filePath, extname(filePath))

export const pathToNameExt = filename => {
  const ext = extname(filename), name = basename(filename, ext)
  return name + ext
}

export const pathToEntry = filename => {
  const ext = extname(filename), name = basename(filename, ext)
  return [ name, ext ]
}

export const pathToInfo = filename => {
  const ext = extname(filename), dir = dirname(filename), doc = basename(filename, ext)
  return { dir, doc, ext }
}

export const exists = async path => {
  try { // F_OK: a flag that checks for the existence of the path (without checking for read/write permissions).
    await access(path, constants.F_OK) // Check if the path exists
    return true
  } catch {
    return false // If access throws an error, the path does not exist
  }
}