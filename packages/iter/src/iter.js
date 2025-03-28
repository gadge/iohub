import { readdir } from 'node:fs/promises'
import { DIRENT } from './utils/constants.js'
import { elab }   from './utils/elab.js'

export async function* iterDoc(source) {
  const { doc, pipe = elab } = this ?? {}
  const dirents = await readdir(source, DIRENT)
  for (const dirent of dirents) {
    if (dirent.isFile() && (doc?.(dirent.name) ?? true)) {
      yield pipe(dirent.name, source)
    }
  }
}

export async function* iterDir(source) {
  const { dir, pipe = elab } = this ?? {}
  const dirents = await readdir(source, DIRENT)
  for (const dirent of dirents) {
    if (dirent.isDirectory() && (dir?.(dirent.name) ?? true)) {
      yield pipe(dirent.name, source)
    }
  }
}