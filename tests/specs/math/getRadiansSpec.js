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

      it('can get number radians of 0 degrees', function () {
        expect(getRadians(0)).toBe(0);

      });

      it('can reset radians of 360 degrees', function () {
        expect(getRadians(360)).toBe(0);

      });

      //common chart values
      it('can match chart values deg' ,function () {
        expect(getRadians(30)).toBe(Math.PI / 6);
        expect(getRadians(45)).toBe(Math.PI / 4);
        expect(getRadians(60)).toBe(Math.PI / 3);
        expect(getRadians(90)).toBe(Math.PI / 2);
        expect(getRadians(120)).toBe(2*Math.PI / 3);
        expect(getRadians(135)).toBe(3*Math.PI / 4);

        expect(getRadians(30 + 360)).toBe(Math.PI / 6);
        expect(getRadians(45 + 360)).toBe(Math.PI / 4);
        expect(getRadians(60 + 360)).toBe(Math.PI / 3);
        expect(getRadians(90 + 360)).toBe(Math.PI / 2);
        expect(getRadians(120 + 360)).toBe(2*Math.PI / 3);
        expect(getRadians(135 + 360)).toBe(3*Math.PI / 4);




        expect(getRadians(-30)).toBe((Math.PI / 6) *-1);
        expect(getRadians(-45)).toBe((Math.PI / 4) *-1);
        expect(getRadians(-60)).toBe((Math.PI / 3)*-1);
        expect(getRadians(-90)).toBe((Math.PI / 2)*-1);
        expect(getRadians(-120)).toBe((2*Math.PI / 3)*-1);
        expect(getRadians(-135)).toBe((3*Math.PI / 4)*-1);


        expect(getRadians(-390)).toBe((Math.PI / 6) *-1);
        expect(getRadians(-405)).toBe((Math.PI / 4) *-1);
        expect(getRadians(-420)).toBe((Math.PI / 3)*-1);
        expect(getRadians(-90 + -360)).toBe((Math.PI / 2)*-1);
        expect(getRadians(-120 + -360)).toBe((2*Math.PI / 3)*-1);
        expect(getRadians(-135 + -360)).toBe((3*Math.PI / 4)*-1);

      });

    });//describe
  });//define
