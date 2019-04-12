# elegant-spinner [![Build Status](https://travis-ci.org/sindresorhus/elegant-spinner.svg?branch=master)](https://travis-ci.org/sindresorhus/elegant-spinner)

> Elegant spinner for interactive CLI apps

<img width="173" src="screenshot.gif">

**You probably want [`ora`](https://github.com/sindresorhus/ora) instead, which includes this spinner and handles the animation for you.**


## Install

```
$ npm install elegant-spinner
```


## Usage

```js
const elegantSpinner = require('elegant-spinner');
const logUpdate = require('log-update');

const frame = elegantSpinner();

setInterval(() => {
	logUpdate(frame());
}, 50);
```


## Relevant

- [log-update](https://github.com/sindresorhus/log-update) - Log by overwriting the previous output in the terminal. Useful for rendering progress bars, animations, etc.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
