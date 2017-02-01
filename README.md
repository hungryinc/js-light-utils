# Sprinkles: A little sugar for your vanilla js.

Sprinkles is a tiny collection of DOM and AJAX utlis. The core is just [jbone](https://www.npmjs.com/package/jbone) -- a tiny jquery replacment.

## Usage with npm

Install with npm
```
npm install @erchaves/sprinkles
```

## Dom Util
Use just like jQuery. Refer to [jbone docs](https://www.npmjs.com/package/jbone) for details.
```
var $ = require('@erchaves/sprinkles');

$('a').addClass('rainbow-colors');
```

## Ajax Util
Sprinkles adds ajax helpers to the $ prototype.
Use [ES6 promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) style ajax in this form:
```
// METHOD can be get, post, put, or delete
$.METHOD(url, [data])
```
Examples:
```
$.get('https://unicorns.magic').then(doTheThings);
```
```
$.post('https://unicorns.magic/launch', {which: 'garfolo'})
	.then(function (response) {
		console.log(response.data);
	}, function (response) {
		console.log(response.error);
	});
```