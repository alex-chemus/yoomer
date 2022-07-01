const path = require('path')

const resolvePath = p => path.join(path.resolve(__dirname, p))

module.exports = {
  //reactScriptsVersion: "react-scripts",
  webpack: {
    alias: {
      '@redux': resolvePath('src/redux'),
      '@views': resolvePath('src/views'),
      '@shared': resolvePath('src/shared'),
      '@features': resolvePath('src/features'),
      '@src': resolvePath('src/')
    },
  },
}