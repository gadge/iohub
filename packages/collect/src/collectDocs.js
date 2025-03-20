import { iterDoc }                   from '@iohub/iter'
import { pathToName, pathToNameExt } from '@iohub/pathinfo'
import { asyncDistinct }             from '@orche/distinct'
import { readdir }                   from 'node:fs/promises'
import { extname, join }             from 'node:path'
import { DIRENT }                    from './assets/constants.js'

export const collectDocItems = async source => (await readdir(source, DIRENT)).filter(d => d.isFile())

export const collectDocPaths = async source => (await collectDocItems(source)).map(({ name }) => join(source, name))

export const collectDocs = async source => (await collectDocItems(source)).map(({ name }) => name)

export const collectNames = async source => (await collectDocItems(source)).map(({ name }) => pathToName(name))

export const collectNameExts = async source => (await collectDocItems(source)).map(({ name }) => pathToNameExt(name))

const EXT = { pipe: (dir, doc) => extname(doc) }
export const collectExts = async source => await asyncDistinct(iterDoc.call(EXT, source))
