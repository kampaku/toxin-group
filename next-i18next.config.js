const path = require('path');

module.exports = {
  // debug: true,
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    localePath: path.resolve('./public/locales'),
  },
};
