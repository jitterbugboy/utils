define(function () {
    "use strict";
    /**
     * @descriptions augments Child with Parent
     * @param {Class} parentClass The Class to augment the child from
     * @param {Class} childClass the class to extend with parents methods
     */
    var classExtend = function (parentClass, childClass) {

        var tmpObj = function () {};
        tmpObj.prototype = parentClass.prototype;
        childClass.prototype = new tmpObj();

        childClass.prototype.constructor = childClass;
        childClass.prototype._super = parentClass;

        //if ever needed - test if it makes it possible to overide all instance
        //childClass.prototype.superClass = parentClass.prototype;
        //consider also :
        //if(parentClass.prototype.constructor === Object.prototype.constructor){
        //    parentClass.prototype.constructor = parentClass;
        // }

    };

    return classExtend;
});
