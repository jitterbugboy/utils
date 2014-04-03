define([
    "./getRadians"
  ], function (getRadians) {
    "use strict";

    var cachedRotation;
    /**
     * @description returns the Tangens position
     * @param {number} rotation
     * @param {number} distance the distance of the tangens
     * @return {{x,y} }
     */
    var getTangensEnd = function (rotation, distance) {
      cachedRotation = getRadians(rotation);
      //http://stackoverflow.com/questions/3309617/calculating-degrees-between-2-points-with-inverse-y-axis

      return {
        x : Math.cos(cachedRotation) * distance,
        y : Math.sin(cachedRotation) * distance * -1
      };
    };
    return getTangensEnd;

  });