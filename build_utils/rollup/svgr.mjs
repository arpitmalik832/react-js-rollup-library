import svgr from '@svgr/rollup';

import icons_list from '../../static/enums/icons-list.js';

const config = {
  input: icons_list.map(i => `src/assets/icons/${i}`),
  output: {
    dir: 'dist',
    preserveModules: true,
    preserveModulesRoot: 'src',
    entryFileNames: chunkInfo => `${chunkInfo.name.replace('.svg', '')}.js`,
  },
  plugins: [
    // multiInput({
    //   transformOutputPath: output => output.replace('assets/', ''),
    // }),
    svgr(),
    // copy({
    //   hook: "buildStart",
    //   targets: [
    //     { src: "static/styles/*", dest: "dist/styles" },
    //     {
    //       src: "src/commonStyles/sass-generated/index.css",
    //       dest: "dist/styles",
    //       rename: "index-common.css",
    //     },
    //     {
    //       src: "dist/commonComponents-esm/assets/components/molecules/*",
    //       dest: "dist/styles",
    //     },
    //     {
    //       src: "dist/commonComponents-esm/assets/components/atoms/*",
    //       dest: "dist/styles",
    //     },
    //   ],
    // }),
    // del({
    //   hook: "buildEnd",
    //   targets: [
    //     "dist/commonComponents/assets",
    //     "dist/commonComponents-esm/assets/components/molecules",
    //     "dist/commonComponents-esm/assets/components/atoms",
    //     "dist/commonComponents-esm/assets/index.css",
    //   ],
    // }),
    // importMixins(),
  ],
  external: ['react', 'react-dom'],
};

export default config;
