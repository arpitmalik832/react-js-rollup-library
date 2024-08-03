const config = {
  prettier: false,
  svgo: false,
  svgoConfig: {
    plugins: [
      {
        removeViewBox: false,
      },
    ],
  },
  titleProp: true,
  ref: true,
};

export default config;
