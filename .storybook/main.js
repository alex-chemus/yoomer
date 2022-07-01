const path = require('path')

const resolvePath = p => path.join(path.resolve(__dirname, p))

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    /*{
      name: 'storybook-preset-craco',
      options: {
        //cracoConfigFile: path.resolve(__dirname, 'craco.storybook.config.js')
        cracoConfigFile: '../../craco.config.js'
      }
    }*/
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5"
  },
  webpackFinal(config, { configType }) {
    return {
      ...config,
      resolve: {
        alias: {
          ...config.resolve.alias,
          //'~': path.resolve(__dirname, '../src/'),
          '@redux': resolvePath('../src/redux'),
          '@views': resolvePath('../src/views'),
          '@shared': resolvePath('../src/shared'),
          '@features': resolvePath('../src/features'),
          '@src': resolvePath('../src/')
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    };
  },
  /*typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },*/
}