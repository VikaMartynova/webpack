
var log = require('./logger')(module);


module.exports = function(message){
     log(`Welcome ${message}`);
};