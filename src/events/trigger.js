(function (exports) {
    "use strict";
    //TODO make cross browser / Mobile



    var trigger = function (elm, event, bubble, cancel) {
        var bubbles     = bubble !== undefined ? bubble : true
            , cancancel = cancel !== undefined ? cancel : true
            , triggerEvent;

        var createMouseEvent = function (type) {
        //  # First create an event
            var click_ev = document.createEvent("MouseEvent");
        //# initialize the event
            click_ev.initEvent(type, bubbles , cancancel);
        //# trigger the event
            elm.dispatchEvent(click_ev);

        };

        /**
         * Might need to do something different - maybe allow custom event types!
         */
        var fallback = function () {};

        var eventMapper = {click: createMouseEvent, fallback: fallback};
        triggerEvent = eventMapper[event] || eventMapper.fallback;
        triggerEvent(event);
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