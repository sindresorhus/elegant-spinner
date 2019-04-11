'use strict';

const frames = process.platform === 'win32' ?
	['-', '\\', '|', '/'] :
	['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

module.exports = () => {
	let i = 0;

	return () => {
		i = ++i % frames.length;
		return frames[i];
	};
};

module.exports.frames = frames;
