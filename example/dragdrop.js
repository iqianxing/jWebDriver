var JWebDriver = require('../');
var co = require('co');

co(function*(){

    var driver = new JWebDriver();

    var chrome = yield driver.session('chrome');

    yield chrome.url('https://127.0.0.1/drag.html');
    var dragitem = yield chrome.find('#dragitem');
    yield dragitem.dragDropTo('#targetdiv');

    yield chrome.close();

}).then(function(){
    console.log('All done!');
}).catch(function(error){
    console.log('Catched error:', error);
});