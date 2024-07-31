/* eslint-disable no-console */
import { resolve, join, dirname, sep } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirName = dirname(filename);

const { readdir, writeFile } = fs.promises;

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

export default ${JSON.stringify(files, null, 2)}
`;
  await writeFile(
    join(dirName, '..', 'src', 'enums', 'icons-list.js'),
    content,
  );
}

processIcons(join(dirName, '..', 'src', 'assets'))
  .then(() => {
    console.log('\x1b[42m%s\x1b[0m', 'Successfully generated icons list');
  })
  .catch(e => {
    console.error('\x1b[41m%s: %s\x1b[0m', 'Failed to process icons', e);
  });
