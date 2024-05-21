// next.config.js
const withImages = require('next-images')
module.exports = withImages({
  assetPrefix: 'https://example.com',
  dynamicAssetPrefix: true,
  webpack(config, options) {
    return config
  }
})