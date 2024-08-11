const path = require('path');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "framework": "@storybook/react",
  "staticDirs": ["../public"],
  webpackFinal: (config) => {
    /**
     * Add support for alias-imports
     * @see https://github.com/storybookjs/storybook/issues/11989#issuecomment-715524391
     */
    config.resolve.alias = config.resolve.alias||{}
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, '../'),
    };
    return config;
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    'storybook-tailwind-dark-mode',
      /* Allow the use of useRouter inside components */
    "storybook-addon-next-router"
  ]
}
