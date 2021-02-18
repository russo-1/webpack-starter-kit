const { merge } = require('webpack-merge');
const common = require('./webpack_config/webpack.common');
const development = require('./webpack_config/webpack.dev');
const production = require('./webpack_config/webpack.prod');

module.exports = (env) => {
  let config;

  switch (env.MODE) {
    case 'development':
      config = development;
      break;
    case 'production':
      config = production;
      break;
    default:
      throw new Error('No matching configuration was found!');
  }

  return merge(common, config);
};
