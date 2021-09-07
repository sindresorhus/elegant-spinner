import test from 'ava';
import elegantSpinner, {spinnerFrames} from './index.js';

test('main', t => {
	t.true(Array.isArray(spinnerFrames));

	const frame = elegantSpinner();
	t.not(frame(), frame());
	t.not(frame(), frame());
	t.not(frame(), frame());
	t.not(frame(), frame());
});
