const { createTransformer } = require('babel-jest');
module.exports = createTransformer({
  presets: ['@babel/preset-env', '@babel/preset-react'],
});
