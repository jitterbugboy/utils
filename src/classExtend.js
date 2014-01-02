define(function () {
    "use strict";
    /**
     * @descriptions augments Child with Parent
     * @param {Class} parentObj The Class to augment the child from
     * @param {Class} childObj the class to extend with parents methods
     */
    var classExtend = function (parentObj, childObj) {

        var tmpObj = function () {
        };
        tmpObj.prototype = parentObj.prototype;
        childObj.prototype = new tmpObj();
        childObj.prototype.constructor = childObj;

    };
    return classExtend;
});
