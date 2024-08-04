import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';

import { ENTRIES } from '../config/entries.mjs';
import svgrConfig from '../../svgr.config.mjs';

const getEntryConfig = ({ inputFile }) => ({
  input: inputFile,
  output: [
    {
      dir: 'dist',
      format: 'esm',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: ['.js', '.jsx', '.scss', '.css'],
    }),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      configFile: './.babelrc.cjs',
    }),
    commonjs(),
    postcss({
      extensions: ['.css', '.scss'],
      extract: true,
      minimize: true,
      modules: true,
      use: ['sass'],
      failOnError: true,
    }),
    image(),
    url(),
    svgr(svgrConfig),
  ],
});

const getEntries = () => ENTRIES.map(entry => getEntryConfig(entry));

export default getEntries;
