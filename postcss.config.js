/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

module.exports = ({ env }) => ({
  plugins: [
    env === 'development' ? null : require('cssnano'),
    require('autoprefixer'),
  ],
});
