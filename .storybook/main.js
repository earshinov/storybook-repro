module.exports = {
  stories: ['../src/**/*.stories.ts'],
  // https://storybook.js.org/docs/addons/addon-gallery/
  addons: [
    '@storybook/preset-scss',
  ],
  //webpackFinal: async (config, { configType }) => {
  //  console.log("Webpack config")
  //  console.dir(config, { depth: null })
  //  return config;
  //},
};
