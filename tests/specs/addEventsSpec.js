define(['events/addEvents', 'events/trigger', 'sinon', 'jasminejquery'], function (addEvents, trigger, sinon, jasminejquery) {

    describe('Events-addEvents testSuite', function () {
        var div
            , handler;

        beforeEach(function () {
            var f = jasminejquery.getFixtures();
            f.fixturesPath = 'base/tests/fixtures/';
            f.load('nestedDiv.html');
            div =  document.getElementById('inner');
            handler = sinon.spy();
        });

        afterEach(function () {
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
            trigger(div, 'click');
            spyCall = handler.getCall(0);
            //kinda ducktyping here - idk how to check for the actual eventobject in another way
            target = spyCall.args[0].target;
            expect(target).toBe(div);
        });

        it('can bubble',function () {
            var handlerOuter = sinon.spy()
                ,outerDiv = $('#outer')[0];
            addEvents(outerDiv,'click', handlerOuter);
            addEvents(div,'click', handler);
            //trigger(div, 'click');

            $(div).trigger('click')
            //trigger(div, 'click');

            expect(handlerOuter.calledOnce).toBe(true);
            expect(handler.calledOnce).toBe(true);
            //expect(handler.calledBefore(handlerOuter)).toBe(true);




        });

        it('can propegate', function () {

        });


    });
});
