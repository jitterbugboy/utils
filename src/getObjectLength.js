(function (exports) {
    "use strict";
    var getObjectLength = function (obj) {
        var i = 0, item;
        for (item in obj) {
            if (obj.hasOwnProperty(item)) {
                i++;
            }
        }
        return i;
    }            ;

    if (typeof define === 'function' && define.amd) {
        define(function () {
            return getObjectLength;
        });
    }
    else {
        exports.getObjectLength = getObjectLength;
    }

}(this));
