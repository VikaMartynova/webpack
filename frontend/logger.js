
module.exports = function(module) {

    return function (/*...*/) {
        var args =[module.i].concat([].slice.call(arguments));
        console.log.apply(console, args);
    };
};