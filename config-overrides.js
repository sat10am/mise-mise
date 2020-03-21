const {
  override,
  overrideDevServer,
  disableEsLint,
  addBundleVisualizer,
  addWebpackAlias,
  watchAll,
} = require('customize-cra');
const path = require('path');

module.exports = {
  webpack: override(
    // disable eslint in webpack
    disableEsLint(),

    // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
    process.env.BUNDLE_VISUALIZE === 1 && addBundleVisualizer(),

    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
    }),
  ),
  devServer: overrideDevServer(
    // devserverPlugin
    watchAll(),
  ),
};
