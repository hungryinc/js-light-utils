import pubsub from './pubsub';

const $ = require('jbone');
const ajax = require('./ajax');

// add ajax functions
$.post = ajax.post;
$.get = ajax.get;
$.put = ajax.put;
$.delete = ajax.delete;

// add a global scope pubsub util
$.on = pubsub.on;
$.off = pubsub.off;
$.trigger = pubsub.trigger;

module.exports = $;
