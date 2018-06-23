
var welcome = require('./welcome');
var log = require('./logger')(module);
require('./style.css');
var Img = require('./1488399690.jpg');
document.write("Webpack....");
var el = document.getElementById('image');

welcome("home hello");
log('it s log!');
var myImg = new Image();
myImg.src = Img;

el.appendChild(myImg);
exports.welcome = welcome;
exports.el = el;
exports.log = log;
