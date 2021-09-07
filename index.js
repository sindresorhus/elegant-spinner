import process from 'node:process';

export const spinnerFrames = process.platform === 'win32'
	? ['-', '\\', '|', '/']
	: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

export default function elegantSpinner() {
	let index = 0;

	return () => {
		index = ++index % spinnerFrames.length;
		return spinnerFrames[index];
	};
}
