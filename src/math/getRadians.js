(function (exports) {
    "use strict";
  //TODO unittest
    var  TO_RADIANS = Math.PI / 180;
    /**
     * @description returns the radian value of any rotation in degrees
     * @param {number | int} rotation
     * @return {number | int}
     */
    var getRadians = function (rotation) {

        return rotation >= 0 ? (rotation % 360) * TO_RADIANS  : (360 + rotation ) % 360 * TO_RADIANS  ;
    };

    //expose the object to amd or exports
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return getRadians;
        });
    }
    else {
        exports.getRadians = getRadians;
    }

}(this));