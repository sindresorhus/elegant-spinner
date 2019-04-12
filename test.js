import test from 'ava';
import elegantSpinner from '.';

test('main', t => {
	t.true(Array.isArray(elegantSpinner.frames));
	const frame = elegantSpinner();
	t.not(frame(), frame());
	t.not(frame(), frame());
	t.not(frame(), frame());
	t.not(frame(), frame());
});
