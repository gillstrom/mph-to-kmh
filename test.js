'use strict';
var test = require('ava');
var mphToKmh = require('./');

test('mphToKmh', function (t) {
	t.plan(2);

	t.assert(mphToKmh(1) === 1.609344);
	t.assert(mphToKmh(50) === 80.4672);
});
