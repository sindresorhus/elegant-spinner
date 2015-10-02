'use strict';

var frames = process.platform === 'win32' ?
	['-', '\\', '|', '/'] :
	['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

module.exports = function () {
	var i = 0;

	return function () {
		var frame = frames[i];
		
		i = (i + 1) % frames.length;
		
		return frame;
	};
};

module.exports.frames = frames;
