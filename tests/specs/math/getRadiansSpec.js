define(
  [
    'math/getRadians'

  ], function (getRadians) {

    describe('Math - getRadians testSuite', function () {

      /////////////////////////////////////
      //////////SETUP//////////////////////
      /////////////////////////////////////


      beforeEach(function () {


      });

      //TEAR DOWN
      afterEach(function () {

      });


      //////////////////////////////////////
      ////////////SPEC//////////////////////
      //////////////////////////////////////


      it('can get number radians of 90 degrees', function () {
        expect(getRadians(90)).toBe(Math.PI / 180 * 90);

      });


      it('can get number radians of 0 degrees', function () {
        expect(getRadians(0)).toBe(0);

      });

      it('can reset radians of 360 degrees', function () {
        expect(getRadians(360)).toBe(0);

      });


      it('can get number radians of 400 degrees', function () {
        expect(getRadians(400)).toBe(Math.PI / 180 * 40);

      });


      it('can get number radians of negative degrees', function () {
        expect(getRadians(-60)).toBe(Math.PI / 180 * (360 - 60));

      });


      it('can match positive and negative bumbers', function () {
        expect(getRadians(-1)).toBe(getRadians(359));

      });

    });//describe
  });//define
