define(
  [
    'extend'

  ], function (extend) {

    describe('extend testSuite', function () {

      /////////////////////////////////////
      //////////SETUP//////////////////////
      /////////////////////////////////////
      var srcObj
        , targetObj
        , srcCopy;


      beforeEach(function () {

        srcObj = {prop1 : "1", prop2 : "2", prop3 : {prop1 : "1", prop2 : "2"}, prop4 :
          [
            'arr1',
            'arr2'
          ]};
        srcCopy = {prop1 : "1", prop2 : "2", prop3 : {prop1 : "1", prop2 : "2"}, prop4 :
          [
            'arr1',
            'arr2'
          ]};
        targetObj = {};
      });

      //TEAR DOWN
      afterEach(function () {

      });


      //////////////////////////////////////
      ////////////SPEC//////////////////////
      //////////////////////////////////////


      it('can copy properties from source to target', function () {

        extend(targetObj, srcObj, false);

        expect(targetObj).toEqual(srcObj);

        //make sure src has not been modified
        expect(srcObj).toEqual(srcCopy);

      });

      it('can do deepCopy', function () {

        extend(targetObj, srcObj, true);

        expect(targetObj.prop3).toEqual(srcObj.prop3);

        expect(targetObj.prop3).not.toBe(srcObj.prop3);

        expect(srcObj).toEqual(srcCopy);


      });


      it('can do reference copy only', function () {

        extend(targetObj, srcObj, false);

        expect(targetObj.prop3).toBe(srcObj.prop3);

        expect(srcObj).toEqual(srcCopy);
      });


      it('does overwrite exsisting properties', function () {
        var newtarget = {prop1 : "overwrite this"};

        extend(newtarget, srcObj, false);

        expect(newtarget.prop1).toBe('1');

      });

      it('will throw error if other than object or array is passed ', function () {

        expect(function () {extend('hej',{})}).toThrow();

      });




      //bug found at 02-12-2014 - jasmines toEqual does not detect this
      it('does not convert array to object', function () {

        extend(targetObj, srcObj, false);

        expect(Object.prototype.toString.call(targetObj.prop4)).toEqual("[object Array]");

        //make sure src has not been modified
        expect(srcObj).toEqual(srcCopy);

      });

    });//describe
  });//define
