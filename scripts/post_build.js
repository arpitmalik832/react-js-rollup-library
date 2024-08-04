/* eslint-disable no-console */
import { rename, readFile, writeFile, mkdir, rm } from 'fs/promises';
import { resolve, join, dirname, basename } from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

import commonPaths from '../build_utils/config/commonPaths.mjs';

const filename = fileURLToPath(import.meta.url);
const dirName = dirname(filename);

const DIST_DIR = resolve(dirName, '..', commonPaths.outputDir);
const COMPONENTS_DIR = resolve(DIST_DIR, 'components');
const DIST_IMAGE_DIR = resolve(DIST_DIR, 'assets', 'images');
const COMPONENTS_ASSETS_DIR = resolve(COMPONENTS_DIR, 'assets');
const COMPONENTS_IMAGE_DIR = resolve(COMPONENTS_DIR, 'assets', 'images');

async function moveAssets(dir) {
  const assetFiles = glob.sync('**/*.{png,jpg,gif,svg}.js', {
    cwd: dir,
  });

  assetFiles.forEach(async file => {
    const oldPath = join(dir, file);
    const oldMapPath = join(dir, `${file}.map`);
    const newFile = file.replace(/.(png|jpg|gif|svg)/g, '');
    const newPath = join(DIST_IMAGE_DIR, newFile);
    const newMapPath = join(DIST_IMAGE_DIR, `${newFile}.map`);
    await mkdir(dirname(newPath), { recursive: true });
    await rename(oldPath, newPath);
    await rename(oldMapPath, newMapPath);
  });
}

async function updateAssetsImports(dir) {
  const jsFiles = glob.sync('**/*.js', { cwd: dir });

  jsFiles.forEach(async file => {
    const filePath = join(dir, file);
    let content = await readFile(filePath, 'utf-8');

    content = content.replace(
      /import\s+(.+?)\s+from\s+['"](.+?)\.(png|jpg|gif|svg).js['"]/g,
      (match, importName, fileName, ext) =>
        `import ${importName} from '../${fileName}'`,
    );

    await writeFile(filePath, content, 'utf-8');
  });
}

async function deleteDirectory(dirPath) {
  try {
    await rm(dirPath, { recursive: true, force: true });
    console.log(`Directory ${dirPath} has been successfully deleted.`);
  } catch (error) {
    console.error(`Error deleting directory ${dirPath}:`, error);
  }
}

const moveDirectoryUp = async currentPath => {
  const parentDir = dirname(dirname(currentPath));
  const dir = basename(currentPath);
  const newPath = join(parentDir, dir);

  try {
    await rename(currentPath, newPath);
    console.log(`Successfully moved ${dir} to ${newPath}`);
  } catch (error) {
    console.error(`Error moving directory: ${error}`);
  }
};

async function main() {
  await moveAssets(COMPONENTS_IMAGE_DIR);
  await updateAssetsImports(COMPONENTS_DIR);
  await deleteDirectory(COMPONENTS_ASSETS_DIR);
  await moveDirectoryUp(join(COMPONENTS_DIR, 'components'));

  console.log(
    'Assets moved and imports updated successfully, including subdirectories.',
  );
}

main().catch(error => console.error('Error:', error));
