define(
  [
    'math/getTangensEnd'

  ], function (getTangensEnd) {

    describe('getTangensEnd testSuite', function () {

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


      it('can get position of 0 degrees angle', function () {

        expect(getTangensEnd( 0 ,100)).toEqual({x:100, y:0});

      });


      it('can get position of 0 degrees angle and negative tangens', function () {

        expect(getTangensEnd( 0 ,-100)).toEqual({x:-100, y:0});

      });


      it('can get position of 360 degrees angle and negative tangens', function () {

        expect(getTangensEnd( 360 ,-100)).toEqual({x:-100, y:0});

      });


      it('can get position of 90 degrees angle ', function () {
        var vector = getTangensEnd( 90 ,100);

        expect(vector.x).toBeCloseTo(0 ,9);
        expect(vector.y).toBe(-100);

      });

      it('can get position of -90 degrees angle ', function () {
        var vector = getTangensEnd( -90 ,100);

        expect(vector.x).toBeCloseTo(0 ,9);
        expect(vector.y).toBe(100);

      });

      it('can get position of 270 degrees angle ', function () {
        var vector = getTangensEnd( 270 ,100);

        expect(vector.x).toBeCloseTo(0 ,9);
        expect(vector.y).toBe(100);

      });



      it('can get position of 180 degrees angle ', function () {
        var vector = getTangensEnd( 180 ,100);

        expect(vector.x).toBe(-100);
        expect(vector.y).toBeCloseTo(0,9);

      });



      it('can get position of 45 degrees angle 2 ', function () {
        var vector = getTangensEnd( 45 , 100);

        expect(vector.x).toBeCloseTo(70.7, 1);
        expect(vector.y).toBeCloseTo(-70.7, 1);

      });



    });//describe
  });//define
