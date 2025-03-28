import { iterDoc } from '@iohub/iter';
import { pathToName, pathToNameExt } from '@iohub/pathinfo';
import { asyncDistinct } from '@orche/distinct';
import { readdir } from 'node:fs/promises';
import { join, extname } from 'node:path';

const DIRENT = { withFileTypes: true };

const collectDocItems = async source => (await readdir(source, DIRENT)).filter(d => d.isFile());

const collectDocPaths = async source => (await collectDocItems(source)).map(({ name }) => join(source, name));

const collectDocs = async source => (await collectDocItems(source)).map(({ name }) => name);

const collectNames = async source => (await collectDocItems(source)).map(({ name }) => pathToName(name));

const collectNameExts = async source => (await collectDocItems(source)).map(({ name }) => pathToNameExt(name));

const EXT = { pipe: extname };
const collectExts = async source => await asyncDistinct(iterDoc.call(EXT, source));

const collectDirItems = async source => (await readdir(source, DIRENT)).filter(d => d.isDirectory());

const collectDirs = async source => (await collectDirItems(source)).map(({ name }) => name);

export { collectDirItems, collectDirs, collectDocItems, collectDocPaths, collectDocs, collectExts, collectNameExts, collectNames };
