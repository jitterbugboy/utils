define(['events/addEvents', 'events/trigger', 'jasminejquery' , 'sinon'], function (addEvents, trigger, jasminejquery, sinon) {


    describe('Events-trigger testSuite', function () {
        var div
            , handler;

        beforeEach(function () {
            var f = jasminejquery.getFixtures();
            f.fixturesPath = 'base/tests/fixtures/';
            f.load('nestedDiv.html');
            div = document.getElementById('inner');
            handler = sinon.spy();
            location.hash ='';

        });
        afterEach(function () {
            div = null;
            handler.reset();
        });

        it('MOUSE-CLICK- can trigger a jquery bound CLICK event', function () {
            $(div).on('click', handler);
            trigger(div, 'click');
            expect(handler.calledOnce).toBe(true);
        });




// Not sure how to test a new url - really an integration test?
        it('MOUSE-CLICK- can trigger an anchor with a new url', function () {
            var anchor = document.createElement('a')
                ,hash = "#test";

            anchor.href = location.href + hash;//+new Date();
            trigger(anchor, 'click');

            //auch this is nasty - needed since firefox doesnt immidately updates location
            setTimeout(function () {
                expect(location.hash).toBe(hash);
                location.hash ='';

            },5)


        });


    });
});
