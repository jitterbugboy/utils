define(['events/addEvents', 'events/trigger', 'jasminejquery' , 'sinon'], function (addEvents, trigger, jasminejquery, sinon) {


    describe('Events-trigger testSuite', function () {
        var div
            , handler
            , f;

        beforeEach(function () {
            f = jasminejquery.getFixtures();
            f.fixturesPath = 'base/tests/fixtures/';
            f.load('nestedDiv.html');
            div = document.getElementById('inner');
            handler = sinon.spy();
            location.hash = '';

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
                , hash = "test";

            //test ff stupidity
            // firefox doesnt update before it proceeds - when changing location, a solution is to use a 2 millisec delay, but causes error in karma teset runner
            // this is the ugly solution! - anyways works in current ff version (26)
            //TODO find a fix
            if (navigator.userAgent.toLowerCase().indexOf('firefox') !== -1) {
                return false;
            }

            anchor.href = location.href + "#" + hash; //+new Date();
            trigger(anchor, 'click');
            expect(location.href.split('#')[1]).toBe(hash);
            location.hash = '';

        });


    });
});
