# JS Light Utils

JS Light Utils is a small collection of js utils wrapped up into a familiar jquery like $ object. But with a much smaller footprint.

- DOM: Powered by [jbone](https://www.npmjs.com/package/jbone) -- a tiny jquery replacment.
- AJAX: A [promise-based](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)  implementation with jquery syntax. Includes the es6-promise polyfill.
- Pubsub: A simple pubsub pattern for your modules.

### Usage with npm

Install with npm
```
npm install @hungryinc/js-light-utils
```
Use in your project
```
var $ = require('@hungryinc/js-light-utils');
```

### Dom Util
Use just like jQuery. Refer to [jbone docs](https://www.npmjs.com/package/jbone) for details.
```
$('a').addClass('rainbow-colors');
```

### Pubsub util
```
$.on(topic, listener)
$.off(topic)
$.trigger(topic, data)
```

### Ajax Util
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

### Tests
- Here's an html playground with some quick and dirty tests for now.
`npm run build-tests`
- Then open tests/index.html

### FAQ
- How big is it?
-- 8kb gzipped (without the es6-promise polyfill. 16kb with the polyfill)