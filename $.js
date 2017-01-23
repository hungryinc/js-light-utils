var $ = require('jbone');
var ajax = require('./ajax');

$.fn.post = ajax.post;
$.fn.get = ajax.get;
$.fn.put = ajax.put;
$.fn.delete = ajax.delete;

module.exports = $;
