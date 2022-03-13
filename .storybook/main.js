module.exports = {
  stories: [
    '../src/components/intro/intro.stories.mdx',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    'storybook-dark-mode/register'
  ],
  framework: '@storybook/react'
};
