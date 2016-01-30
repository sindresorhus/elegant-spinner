import test from 'ava';
import m from './';

test(t => {
	const frame = m({style: 'spinner'});
	t.not(frame(), frame());
	t.not(frame(), frame());
	t.not(frame(), frame());
	t.not(frame(), frame());
});
