var $ = require('../$');
// quick and dirty testing for now
// todo -- use testing framework

var testOn = function(){
  $.on('someEvent', function(){
    console.log('someEvent was triggered!');
  });
  $.trigger('someEvent');
};

var testOff = function(){
  $.on('someEvent', function(){
    console.log('This should not fire because the event will be removed before the trigger.');
  });
  $.off('someEvent');
  $.trigger('someEvent');
  console.log('someEvent was successfully removed');
};

testOn();
testOff();

// expose so we can test in the browser
window.$ = $;

module.exports = $;
