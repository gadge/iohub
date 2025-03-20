import { readdir } from 'node:fs/promises'
import { join }    from 'node:path'
import { DIRENT }  from './assets/constants.js'

export async function* iterDoc(source) {
  const { doc, pipe = join } = this ?? {}
  const dirents = await readdir(source, DIRENT)
  for (const dirent of dirents) {
    if (dirent.isFile() && (doc?.(dirent.name) ?? true)) {
      yield pipe(source, dirent.name)
    }
  }
}

export async function* iterDir(source) {
  const { dir, pipe = join } = this ?? {}
  const dirents = await readdir(source, DIRENT)
  for (const dirent of dirents) {
    if (dirent.isDirectory() && (dir?.(dirent.name) ?? true)) {
      yield pipe(source, dirent.name)
    }
  }
}