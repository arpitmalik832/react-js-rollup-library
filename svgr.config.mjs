const config = {
  prettier: true,
  svgo: true,
  exportType: 'named',
  jsxRuntime: 'automatic',
  svgoConfig: {
    plugins: [
      {
        name: 'removeViewBox',
        active: false,
      },
    ],
  },
  titleProp: true,
  ref: true,
  outputDir: 'dist/assets',
  icon: true,
};

export default config;
