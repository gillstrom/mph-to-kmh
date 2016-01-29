import test from 'ava';
import m from './';

test('mphToKmh', t => {
	t.is(m(1), 1.609344);
	t.is(m(50), 80.4672);
});
