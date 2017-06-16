const isProduction = process.env.NODE_ENV === 'production';
const starter = require('marko-starter');
starter.plugins(['marko-starter-babel']);

module.exports = starter.projectConfig({
  httpPort: process.env.PORT || 8080, // Optional, but added here for demo purposes
  lassoConfig: {
    bundlingEnabled: isProduction,
    minifyJS: false
  }
});
