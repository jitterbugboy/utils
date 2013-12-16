define(['events/addEvents','events/trigger', 'jquery' , 'sinon'], function (addEvents, trigger, $, sinon ) {


    describe('Events-trigger testSuite', function () {
        var div
            , nullElement = null;

        beforeEach(function () {
            div = document.createElement('div');
            div.setAttribute("id","hej");
            document.getElementsByTagName('body')[0].appendChild(div);

        });
        afterEach(function () {
            document.body.removeChild(div);
            div = null;
            nullElement = null;
        });

        it('can trigger a jquery bound click event', function () {
           $(div).on('click', function () {
               nullElement = 'notNull';
           });
               trigger(div,'click');
               expect(nullElement).toBe('notNull');

        });
    });
});
