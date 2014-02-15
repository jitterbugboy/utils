requirejs.config({
	baseUrl : 'src', urlArgs : "bust=" + (new Date()).getTime()
});
/*
 define(function (require) {
 "use strict";
 var utils = {
 addEvents : require("./events/addEvents")
 , trigger : require("./events/trigger")
 , classExtend : require("./classExtend")

 };

 //for debugging
 //window.utils = utils;
 return utils;
 });
 */