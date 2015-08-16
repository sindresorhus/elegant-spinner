'use strict';
var test = require('ava');
var fn = require('./');

test(function (t) {
	t.assert(Array.isArray(fn.frames));

	var frame = fn();
	t.assert(frame() !== frame());
	t.assert(frame() !== frame());
	t.assert(frame() !== frame());
	t.assert(frame() !== frame());

	t.end();
});
