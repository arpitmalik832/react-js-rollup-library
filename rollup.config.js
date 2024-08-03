import getEntries from './build_utils/rollup/entries.mjs';
import svgrConfig from './build_utils/rollup/svgr.mjs';

const config = [...getEntries(), svgrConfig];

export default config;
