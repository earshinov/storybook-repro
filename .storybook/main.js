module.exports = {
  stories: ['../src/**/*.stories.ts'],
  // https://storybook.js.org/docs/addons/addon-gallery/
  addons: [
    '@storybook/preset-scss',
  ],
  webpackFinal: async (config, { configType }) => {
    //console.log("Webpack config")
    //console.dir(config, { depth: null })

    // A workaround for https://github.com/storybookjs/storybook/issues/13381
    function checkUse(use) {
      if (use.loader && use.loader.includes('ts-loader') && 'configFile' in use.options && use.options.configFile === undefined)
        delete use.options.configFile;
    }
    for (let rule of config.module.rules) {
      if (rule.use)
        for (let use of rule.use)
          checkUse(use);
      else
        checkUse(rule);
    }

    return config;
  },
};
