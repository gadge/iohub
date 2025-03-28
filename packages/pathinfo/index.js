import { access, constants } from 'node:fs/promises';
import { extname, basename, dirname } from 'node:path';

const pathToExt = extname;

const pathToName = filePath => basename(filePath, extname(filePath));

const pathToNameExt = filename => {
  const ext = extname(filename), name = basename(filename, ext);
  return name + ext
};

const pathToEntry = filename => {
  const ext = extname(filename), name = basename(filename, ext);
  return [ name, ext ]
};

const pathToInfo = filename => {
  const ext = extname(filename), dir = dirname(filename), doc = basename(filename, ext);
  return { dir, doc, ext }
};

const exists = async path => {
  try { // F_OK: a flag that checks for the existence of the path (without checking for read/write permissions).
    await access(path, constants.F_OK); // Check if the path exists
    return true
  } catch {
    return false // If access throws an error, the path does not exist
  }
};

export { exists, pathToEntry, pathToExt, pathToInfo, pathToName, pathToNameExt };
