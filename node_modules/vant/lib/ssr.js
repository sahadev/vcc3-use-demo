'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./vant.cjs.min.js');
} else {
  module.exports = require('./vant.cjs.js');
};
