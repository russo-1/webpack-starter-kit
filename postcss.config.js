/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

module.exports = ({ env }) => ({
  plugins: [
    env === 'production' ? require('cssnano') : null,
    require('autoprefixer'),
  ],
});
