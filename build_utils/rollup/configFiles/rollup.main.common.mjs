/**
 * Rollup configuration for the main library build.
 * @file This file is saved as `main.mjs`.
 */
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
import progress from 'rollup-plugin-progress';

import svgrConfig from '../../../svgr.config.mjs';
import importStyles from '../customPlugins/importStyles.mjs';
import stripCustomWindowVariables from '../customPlugins/stripCustomWindowVariables.mjs';
import { ENVS } from '../../config/index.mjs';

const config = {
  input: 'src/index.js',
  output: [
    {
      dir: 'dist',
      format: 'esm',
      sourcemap: ![ENVS.PROD, ENVS.BETA].includes(process.env.LIB_ENV),
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  external: [/node_modules/], // Exclude node_modules
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.scss', '.css'],
    }),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      configFile: './babel.config.cjs',
    }),
    commonjs(),
    [ENVS.PROD, ENVS.BETA].includes(process.env.LIB_ENV) &&
      stripCustomWindowVariables({
        variables: ['abc'],
      }),
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
    json(),
    importStyles(),
    progress(),
  ],
};

export default config;
