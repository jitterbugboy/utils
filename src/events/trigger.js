(function (exports) {
    "use strict";
    //TODO make cross browser / Mobile
    //TODO create unittest


    var trigger = function (elm, event, bubble, cancel) {
        var bubbles     = bubble || false
            , cancancel = cancel || true
            , triggerEvent;

        var createMouseEvent = function (type) {
        //  # First create an event
            var click_ev = document.createEvent("MouseEvent");
        //# initialize the event
            click_ev.initEvent(type, bubbles , cancancel);
        //# trigger the event
            elm.dispatchEvent(click_ev);

        };
        var fallback = function () {
        };

        var eventMapper = {click: createMouseEvent(event), fallback: fallback};
        triggerEvent = eventMapper[event] || eventMapper.fallback;

    };

     //expose the object to amd or exports
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return trigger;
        });
    }
    else {
        exports.trigger = trigger;
    }

}(this));