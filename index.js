'use strict';

var styles = {
	win32: ['-', '\\', '|', '/'],
	spinner: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
	bounce: ['⠁', '⠂', '⠄', '⠂']
};

module.exports = function (options) {
	var frames = process.platform === 'win32' ? styles.win32 : styles[options.style];
	var i = 0;

	return function () {
		return frames[i++ % frames.length];
	};
};
