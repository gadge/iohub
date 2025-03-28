import { asyncCollect } from '@orche/collect'
import { readdir }      from 'node:fs/promises'
import { join }         from 'node:path'
import { iterDoc }      from './iter.js'
import { DIRENT }       from './utils/constants.js'
import { elab }         from './utils/elab.js'

export async function* recurDoc(source) {
  const { dir, doc, pipe = elab } = this ?? {}
  const dirents = await readdir(source, DIRENT)
  for (const dirent of dirents) {
    if (dirent.isDirectory() && (dir?.(dirent.name) ?? true)) {
      yield* recurDoc.call(this, join(source, dirent.name))
    } else if (dirent.isFile() && (doc?.(dirent.name) ?? true)) {
      yield pipe(dirent.name, source)
    }
  }
}

export async function* recurDir(source) {
  const { dir, pipe = elab } = this ?? {}
  const dirents = await readdir(source, DIRENT)
  for (const dirent of dirents) {
    if (dirent.isDirectory() && (dir?.(dirent.name) ?? true)) {
      yield pipe(dirent.name, source)
      yield* recurDir.call(this, join(source, dirent.name))
    }
  }
}

export async function* recurLot(source) {
  const dir = this?.dir, ctx = dir ? { dir } : null
  for await (const folder of recurDir.call(ctx, source)) {
    const items = await asyncCollect(iterDoc.call(this, folder))
    if (!items?.length) continue
    items.dir = folder
    yield items
  }
}