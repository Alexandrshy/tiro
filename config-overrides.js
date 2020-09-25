const {
  override,
  addDecoratorsLegacy,
  useEslintRc,
  enableEslintTypescript,
  addBundleVisualizer,
  addPostcssPlugins,
  addWebpackAlias,
} = require("customize-cra");
const path = require("path");

module.exports = override(
  addDecoratorsLegacy(),
  useEslintRc(),
  enableEslintTypescript(),
  addPostcssPlugins([require("autoprefixer")]),
  process.env.BUNDLE_VISUALIZE === 1 && addBundleVisualizer(),
  addWebpackAlias({
    "@components": path.resolve(__dirname, "src/components"),
    "@images": path.resolve(__dirname, "src/images"),
    "@stores": path.resolve(__dirname, "src/stores"),
    "@constants": path.resolve(__dirname, "src/constants"),
    "@helpers": path.resolve(__dirname, "src/helpers"),
  })
);
