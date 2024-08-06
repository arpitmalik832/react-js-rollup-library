import copy from 'rollup-plugin-copy';

const config = () =>
  copy({
    targets: [
      {
        src: 'static/styles/*',
        dest: 'dist/styles',
      },
      {
        src: 'src/styles/mixins/*',
        dest: 'dist/styles/mixins',
      },
      {
        src: 'static/enums/icons_list.mjs',
        dest: 'dist/assets/icons',
      },
    ],
  });
export default config;
