'use strict';

const frames = process.platform === 'win32' && !process.env.WT_SESSION ?
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
