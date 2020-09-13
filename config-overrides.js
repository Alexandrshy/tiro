const {
  override,
  addDecoratorsLegacy,
  useEslintRc,
  enableEslintTypescript,
  addBundleVisualizer,
  addPostcssPlugins,
  addWebpackAlias,
} = require("customize-cra");

module.exports = override(
  addDecoratorsLegacy(),
  useEslintRc(),
  enableEslintTypescript(),
  addPostcssPlugins([require("autoprefixer")]),
  process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),
  addWebpackAlias({})
);
