import { asyncCollect } from '@orche/collect'
import { readdir }      from 'node:fs/promises'
import { join }         from 'node:path'
import { DIRENT }       from './assets/constants.js'
import { iterDoc }      from './iter.js'

export async function* recurDoc(source) {
  const { dir, doc, pipe = join } = this ?? {}
  const dirents = await readdir(source, DIRENT)
  for (const dirent of dirents) {
    if (dirent.isDirectory() && (dir?.(dirent.name) ?? true)) {
      yield* recurDoc.call(this, join(source, dirent.name))
    } else if (dirent.isFile() && (doc?.(dirent.name) ?? true)) {
      yield pipe(source, dirent.name)
    }
  }
}

export async function* recurDir(source) {
  const { dir, pipe = join } = this ?? {}
  const dirents = await readdir(source, DIRENT)
  for (const dirent of dirents) {
    if (dirent.isDirectory() && (dir?.(dirent.name) ?? true)) {
      yield pipe(source, dirent.name)
      yield* recurDir.call(this, join(source, dirent.name))
    }
  }
}

export async function* recurLot(source) {
  const DIR = { dir: this?.dir }
  const DOC = { doc: this?.doc, pipe: this?.pipe }
  for await (const folder of recurDir.call(DIR, source)) {
    const items = await asyncCollect(iterDoc.call(DOC, folder))
    if (!items?.length) continue
    items.dir = folder
    yield items
  }
}