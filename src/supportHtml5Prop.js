(function (exports) {
    "use strict";
//TODO Create Unit test
    /**
     * @description test if a property is supported on a given element- defaults elment is div
     * @param  {String} prop to test if given element should support
     * @param {String} [elm="div"] the element the property should be tested on
     * @returns {Boolean} true if supported
     */
    var supportHtml5Prop = function (prop, elm) {
        var supports = false, elm = elm || "div", testObj;
        testObj = document.createElement(elm);

        if (prop in testObj) {
            supports = true;
        }
        testObj = null;
        return supports;
    };


    if (typeof define === 'function' && define.amd) {
        define(function () {
            return supportHtml5Prop;
        });
    }
    else {
        exports.supportHtml5Prop = supportHtml5Prop;
    }

}(this));
