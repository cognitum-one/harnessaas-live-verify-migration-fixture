const _ = require('lodash');
module.exports = function describe(fn) {
  return _.isFunction(fn) ? 'function' : 'not-a-function';
};
