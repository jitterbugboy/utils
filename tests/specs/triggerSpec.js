define(['events/addEvents', 'events/trigger', 'jasminejquery' , 'sinon'], function (addEvents, trigger, jasminejquery, sinon) {
//not really a dream example of a unittest - firefox is not tested!
var linkURL = function () {
    return location.href.replace("#","");
};

    describe('Events-trigger testSuite', function () {
        var div
            , outerDiv
            , handler
            , handler2
            , f;

        beforeEach(function () {
            //get fixtures
            f               = jasminejquery.getFixtures();
            f.fixturesPath  = 'base/tests/fixtures/';
            f.load('nestedDiv.html');

            //setup commonly used elements
            div             = document.getElementById('inner');
            outerDiv        = document.getElementById('outer');

            //spy used troughout the spec
            handler         = sinon.spy();
            handler2        = sinon.spy();

            //since there is some manipulation of the url - reset each time
            location.hash = '';

        });
        afterEach(function () {
            div         = null;
            outerDiv    = null;
            handler.reset();
            handler2.reset();
            location.hash = '';
        });

        it('can trigger and bubble', function () {
            //setup events with capture false
            addEvents(div, 'click', handler);
            addEvents(outerDiv,'click', handler2, false);

            trigger(div, 'click');


            expect(handler.calledOnce).toBe(true);
            expect(handler2.calledOnce).toBe(true);

        });

        it('can trigger and cancel bubble', function () {
            //setup events with capture false
            addEvents(div, 'click', handler);
            addEvents(outerDiv,'click', handler2, false);

            trigger(div, 'click', false);

            expect(handler.calledOnce).toBe(true);
            expect(handler2.calledOnce).toBe(false);

        });

        it('can trigger and PREVENT cancel of event', function () {
            var anchor  = document.createElement('a')
                , hash  = "test"
                , obj   = {
                    localHandler : function (e) {
                                e.preventDefault();
                            }
                           }
            , spy   = sinon.spy(obj ,'localHandler');
            anchor.href = linkURL() + "#" + hash;
            //setup events with capture false

            addEvents(anchor, 'click', obj.localHandler);

            trigger(anchor, 'click',true, false);

            //TODO find a fix
            if (navigator.userAgent.toLowerCase().indexOf('firefox') !== -1) {
                return false;
            }


            expect(spy.calledOnce).toBe(true);
            expect(location.hash).toBe('#'+hash);


        });

        it('can trigger bound event and allow preventing default', function () {
            var anchor  = document.createElement('a')
                , hash  = "test"
                , obj   = {
                    localHandler : function (e) {
                        e.preventDefault();
                    }
                }
                , spy   = sinon.spy(obj ,'localHandler');
            anchor.href = linkURL() + "#" + hash;
            //setup events with capture false

            addEvents(anchor, 'click', obj.localHandler);

            trigger(anchor, 'click',true);

            //TODO find a fix
            if (navigator.userAgent.toLowerCase().indexOf('firefox') !== -1) {
                return false;
            }


            expect(spy.calledOnce).toBe(true);
            expect(location.hash).toBe('');


        });


        /***************
         * CLICK
         **************/
        it('MOUSE-CLICK- can trigger a jquery bound CLICK event', function () {
            $(div).on('click', handler);
            trigger(div, 'click');
            expect(handler.calledOnce).toBe(true);
        });

        // Not sure how to test a new url - really an integration test?
        it('MOUSE-CLICK- can trigger an anchor with a new url', function () {
            var anchor = document.createElement('a')
                , hash = "test";

            // firefox stupidity
            // firefox doesnt update before it proceeds - when changing location, a solution is to use a 2 millisec delay, but causes error in karma teset runner
            // this is the ugly solution! - anyways works in current ff version (26)
            //TODO find a fix
            if (navigator.userAgent.toLowerCase().indexOf('firefox') !== -1) {
                return false;
            }

            anchor.href = linkURL() + "#" + hash; //+new Date();
            trigger(anchor, 'click');
            expect(location.href.split('#')[1]).toBe(hash);
            location.hash = '';

        });


        /**
         * Might need to do something different!
         */

        it('does nothing when using not existing event type', function () {
            expect( function () {trigger(div,'noEvent')}).not.toThrow();

        });


    });//describe
});//define
