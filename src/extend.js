(function (exports) {
  "use strict";
  /**
   * @description copies all properties from objSrc to targetObj. properties from objSrc will overwrite on targetObj if same exists
   * @param {Object} targetObj the Object the should recieve the properties from objSrc and be modified
   * @param {Object} objSrc  the source object to copy properties from
   * @param {Boolean} [deepCopy=false] perform deep copy - yes if true
   * @returns {Object} the targetObj merged with objSrc
   */
  var extend = function (targetObj, objSrc, deepCopy) {
    var deep = deepCopy || false, item, targetProp;


    //throw error if wrong types are sendt to the function
    if (Object.prototype.toString.call(objSrc) !== "[object Object]" && Object.prototype.toString.call(objSrc) !== "[object Array]" || Object.prototype.toString.call(targetObj) !== "[object Object]" && Object.prototype.toString.call(targetObj) !== "[object Array]")
    {
      throw new TypeError("function extend expected an object as input parameter but recived : " +
        Object.prototype.toString.call(targetObj) + " and : " + Object.prototype.toString.call(objSrc));

    }


    //copy the properties
    for (item in objSrc)
    {
      if (objSrc.hasOwnProperty(item))
      {
        if (deep === true)
        {
          if (Object.prototype.toString.call(objSrc[item]) === "[object Object]")
          {
            targetProp = {};

            targetObj[item] = extend(targetProp, objSrc[item], true);
          }
          else if (Object.prototype.toString.call(objSrc[item]) === "[object Array]")
          {
            targetProp =  [];

            targetObj[item] = extend(targetProp, objSrc[item], true);
          }
          else{

            targetObj[item] = objSrc[item];
          }
        }

        else
        {
          targetObj[item] = objSrc[item];

        }
      }
    }

    return targetObj;
  };  //extend

  //expose to amd or exports
  if (typeof define === 'function' && define.amd)
  {
    define(function () {
      return extend;
    });
  }
  else
  {
    exports.extend = extend;
  }


}(this));