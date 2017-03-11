'use strict';

var styles = {
  win32: ['-', '\\', '|', '/'],
  spinner: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
  bounce: ['⠁', '⠂', '⠄', '⠂']
};

module.exports = function (style) {
  var frames = styles[
    process.platform === 'win32'
      ? 'win32'
      : style
        ? style
        : 'spinner'
  ];
	var i = 0;

	return function () {
		return frames[i = ++i % frames.length];
	};
};

module.exports.styles = styles;
