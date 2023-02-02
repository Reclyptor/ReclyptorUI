module.exports = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      "name": "@storybook/addon-postcss",
      "options": {
        "cssLoaderOptions": {
          "importLoaders": 1,
        },
        "postcssLoaderOptions": {
          "implementation": require("postcss"), // When using postCSS 8
        },
      },
    },
  ],
  "features": {
    "previewMdx2": "true"
  },
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}