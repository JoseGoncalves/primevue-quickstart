module.exports = {
  chainWebpack: config => {
    config.performance
      .maxEntrypointSize(512000);
  }
};
