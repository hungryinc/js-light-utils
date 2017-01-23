# Sprinkles: A little sugar for your vanilla js.

Sprinkles is a tiny collection of DOM and AJAX utlis. It is mostly just [jbone -- a tiny jquery replacment](https://www.npmjs.com/package/jbone) with some AJAX on top.

## Usage with npm

Install with npm
```
npm install @erchaves/sprinkles
```

Use $ just like jQuery.
```
var $ = require('@erchaves/sprinkles');

$('a').addClass('rainbow-colors');
```

Use [ES6 promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) style ajax.
```
$.get('https://unicorns.magic').then(function (response) {
	console.log(response.data);
}, function (response) {
 	console.log(response.error);
});
```