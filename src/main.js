requirejs.config({
	baseUrl : 'src', urlArgs : "bust=" + (new Date()).getTime()
});

 define(function (require) {
 "use strict";
 var utils = {

   classExtend : require("./classExtend"),
   events : {
     addEvents : require("./events/addEvents")
     , trigger : require("./events/trigger")
   },
  math : {
    getTangensEnd : require("./math/getTangensEnd"),
    getRadians: require("./math/getRadians")

  }

 };

 //for debugging
 window.utils = utils;
 return utils;
 });
