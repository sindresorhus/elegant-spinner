# elegant-spinner

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


## Related

- [log-update](https://github.com/sindresorhus/log-update) - Log by overwriting the previous output in the terminal. Useful for rendering progress bars, animations, etc.


---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-elegant-spinner?utm_source=npm-elegant-spinner&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
