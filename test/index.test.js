const { test } = require('node:test');
const assert = require('node:assert');
const describe = require('../src/index');

test('isFunction works across lodash versions', () => {
  assert.equal(describe(function () {}), 'function');
  assert.equal(describe(42), 'not-a-function');
});
