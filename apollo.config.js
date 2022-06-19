const {default: CONFIG} = require('./app/const/config');

module.exports = {
  client: {
    service: {
      name: 'spacex-api',
      url: CONFIG.SPACEX_BASE,
    },
  },
};
