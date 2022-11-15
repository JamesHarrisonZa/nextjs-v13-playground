module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  staticDirs: ['../public'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    // mock NextJS <Image /> component that does optimization via a server request
    config.resolve.alias = {
      'next/future/image': require.resolve('./__mocks__/NextJSImageMock.tsx'),
    };

    return config;
  },
};
