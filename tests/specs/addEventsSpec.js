define(['events/addEvents', 'events/trigger', 'sinon','jasminejquery'], function (addEvents, trigger, sinon, jasminejquery) {

    describe('Events-addEvents testSuite', function () {
        var div
            , handler;

        beforeEach(function () {
            var f = jasminejquery.getFixtures();
            f.fixturesPath = 'base';
            f.load('tests/fixtures/sample.html');

            div = document.createElement('div');
            document.getElementsByTagName('body')[0].appendChild(div);
            handler = sinon.spy();
        });
        afterEach(function () {
            document.body.removeChild(div);
            div = null;
            handler.reset();
        });


        it('can add click event to div sinon', function () {
            var handler = sinon.spy();
            addEvents(div, 'click', handler);
            trigger(div, 'click');
            expect(handler.calledOnce).toBe(true);
        });


        it('has clicked dom element as this reference', function () {
            addEvents(div, 'click', handler);
            trigger(div, 'click');
            expect(handler.calledOn(div)).toBe(true);
        });


        it('can add have clicked event object passed as argument', function () {
            var spyCall
                , target;

            addEvents(div, 'click', handler);
            div.click();
            spyCall = handler.getCall(0);
            //kinda ducktyping here - idk how to check for the actual eventobject in another way
            target = spyCall.args[0].target;
            expect(target).toBe(div);
        });

        it('can find jasmine', function () {
            console.log(jasminejquery.getFixtures());
           expect(jasminejquery.getFixtures()).toBeDefined();
        });

        it('can bubble',function () {

        });

        it('can propegate', function () {

        });


    });
});
