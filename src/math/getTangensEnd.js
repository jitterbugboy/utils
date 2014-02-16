define(["./getRadians"],function (getRadians) {
    "use strict";
    var  TO_RADIANS = Math.PI / 180;
    /**
     * @description returns the Tangen position
     * @param {number} rotation
     * @param {number} distance the distance of the tangens
     * @return {{x,y} }
     */
    var getTangensEnd = function (rotation, distance) {
       /* if(!rotation || !distance){
            throw new TypeError("expected rotation or distance as input but recieved Rotation:"+ rotation + "; distance: " +distance);
        }*/
        return {x:Math.cos(getRadians(rotation))*distance, y :Math.sin(rotation * TO_RADIANS) * distance};
    };
    return getTangensEnd;


});