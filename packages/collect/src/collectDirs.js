import { readdir } from 'node:fs/promises'
import { join }    from 'node:path'
import { DIRENT }  from './assets/constants.js'

export const collectDirItems = async source => (await readdir(source, DIRENT)).filter(d => d.isDirectory())

export const collectDirPaths = async source => (await collectDirItems(source)).map(({ name }) => join(source, name))

export const collectDirs = async source => (await collectDirItems(source)).map(({ name }) => name)
