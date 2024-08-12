/* eslint-disable no-console */
import { resolve, join, dirname, sep } from 'path';
import { readdir, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';

import commonPaths from '../build_utils/config/commonPaths.mjs';

const filename = fileURLToPath(import.meta.url);
const dirName = dirname(filename);

async function getIcons(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map(dirent => {
      const res = resolve(dir, dirent.name);
      return dirent.isDirectory()
        ? getIcons(res)
        : res?.split(`${sep}icons${sep}`)[1];
    }),
  );
  return Array.prototype.concat(...files);
}

async function processIcons(dir) {
  const files = await getIcons(dir);
  const content = `// Do not edit directly.
// Last generated on ${new Date()}

const list = ${JSON.stringify(files, null, 2)}

export default list;
`;
  await writeFile(join(dirName, '..', commonPaths.icons_list), content);
}

processIcons(join(dirName, '..', commonPaths.icons))
  .then(() => {
    console.log('\x1b[42m%s\x1b[0m', 'Successfully generated icons list');
  })
  .catch(e => {
    console.error('\x1b[41m%s: %s\x1b[0m', 'Failed to process icons', e);
  });
