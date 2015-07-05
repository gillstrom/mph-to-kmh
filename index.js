'use strict';
module.exports = function (mph) {
	if (typeof mph !== 'number') {
		throw new TypeError('Expected a number');
	}

	return mph * 1.609344;
};
