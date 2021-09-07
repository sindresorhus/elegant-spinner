/**
Elegant spinner for interactive CLI apps.

__You probably want [`ora`](https://github.com/sindresorhus/ora) instead, which includes this spinner and handles the animation for you.__

@example
```
import elegantSpinner from 'elegant-spinner';
import logUpdate from 'log-update';

const frame = elegantSpinner();

setInterval(() => {
	logUpdate(frame());
}, 50);
```
*/
export default function elegantSpinner(): () => string;

/**
All the frames of the spinner.
*/
export const spinnerFrames: readonly string[];
