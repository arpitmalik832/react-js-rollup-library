const config = {
  source: ['./src/configs/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: './src/styles/style-dictionary/',
      files: [
        {
          destination: 'colors.scss',
          format: 'scss/map-flat',
          options: {
            mapName: 'colors',
          },
          filter: token => token.attributes.category === 'color-semantics',
        },
      ],
    },
    // "scss-export": {
    //   transformGroup: "scss",
    //   buildPath: "./static/styles/",
    //   files: [
    //     {
    //       destination: "_colors.scss",
    //       format: "scss/map-deep",
    //       options: { mapName: "colors" },
    //       filter: (token) => token.attributes.category === "color-semantics",
    //     },
    //   ],
    // },
  },
};

export default config;
