define(
  [
    "./getRadians"
  ], function (getRadians) {
    "use strict";
    //TODO unittest
    var TO_RADIANS = Math.PI / 180;
    /**
     * @description returns the Tangens position
     * @param {number} rotation
     * @param {number} distance the distance of the tangens
     * @return {{x,y} }
     */
    var getTangensEnd = function (rotation, distance) {

      //http://stackoverflow.com/questions/3309617/calculating-degrees-between-2-points-with-inverse-y-axis

      return {
        x : Math.cos(getRadians(rotation)) * distance
        , y : Math.sin(getRadians(rotation)) * distance *-1
      };
    };
    return getTangensEnd;

  });