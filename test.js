import test from 'ava';
import m from './';

test(t => {
	t.true(Array.isArray(m.frames));
	const frame = m();
	t.not(frame(), frame());
	t.not(frame(), frame());
	t.not(frame(), frame());
	t.not(frame(), frame());
});
