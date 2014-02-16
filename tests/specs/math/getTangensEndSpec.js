define(
  [
    'getObjectLength'

  ], function (getObjectLength) {

    describe('getObjectLength testSuite', function () {

      /////////////////////////////////////
      //////////SETUP//////////////////////
      /////////////////////////////////////



      beforeEach(function () {

        testObj = {prop1 : "", prop2 : 2, prop3 : 3};
      });

      //TEAR DOWN
      afterEach(function () {

      });


      //////////////////////////////////////
      ////////////SPEC//////////////////////
      //////////////////////////////////////


      it('can get number of properties in object', function () {

        Object.prototype.test = "test";
        expect(getObjectLength(testObj)).toEqual(3);

      });


      it('does not count inherited properties', function () {

        Object.prototype.test = "test";

        expect(getObjectLength(testObj)).toEqual(3);

        delete Object.prototype.test;

      });


    });//describe
  });//define
