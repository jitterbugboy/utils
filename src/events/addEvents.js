(function (exports) {
    "use strict";
    //TODO make cross browser / Mobile
    //TODO create unittest
    /**
     * @description adds eventlisteners to a given element
     * @param {Object} element the DOM node to attach the event to
     * @param {String} event the type of event to attach e.g. click, keydown etc.
     * @param {Function} fn the function to execute on the given event
     * @param {Boolean} useCapture - standard dom event handling - default false
     */
    var addEvents = function (element, event, fn, useCapture) {
            var useCapture = useCapture || false;
            element.addEventListener(event, function (event) { fn.call(this, event);}
             , useCapture);
        };

    //expose the object to amd or exports
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return addEvents;
        });
    }
    else {
        exports.addEvents = addEvents;

    }

}(this));