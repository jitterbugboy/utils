define(['classExtend', 'jasminejquery' , 'sinon'], function (classExtend, jasminejquery, sinon) {

    describe('utilsJhn test Suite', function () {

        var Classes = {
            Parent: function () {
                this.prop = 1;
            }
            , Child: function () {}
            , SuperCallChild: function (args) {
                this._super.call(this, args);

            }
        };

        Classes.Parent.prototype.propParent = function () {return 1};

        var instance
            , childInstance
            , spy = sinon.spy(Classes, 'Parent')
            , newSuperChild;
        //SETUP

        beforeEach(function () {
            classExtend(Classes.Parent, Classes.SuperCallChild);
            classExtend(Classes.Parent, Classes.Child);

            instance = new Classes.Parent();
            childInstance = new Classes.Child();

            spy.reset();

        });

        //TEAR DOWN
        afterEach(function () {
            instance = childInstance = newSuperChild = null;

        });


        //////////////////////////////////////
        ////////////SPEC//////////////////////
        //////////////////////////////////////


        it('- Can inherit parent methods', function () {
            expect(childInstance.propParent).toBeDefined();
        });

        it('- Can alter inherited method without affecting parent method', function () {
            Classes.Child.prototype.propParent = function () {
                return 2
            };
            expect(instance.propParent()).toBe(1);
            expect(childInstance.propParent()).toBe(2);
        });

        it('- does not call parent constructor', function () {
            var newInstance = new Classes.Child();
            expect(spy.called).toBeFalsy();

        });

        it('- Can call parent constructor method through super', function () {
            newSuperChild = new Classes.SuperCallChild();

            expect(spy.calledOnce).toBeTruthy();
            expect(newSuperChild.prop).toBe(1);
        });


        it('- Can call parent constructor method through super with this value as childClass', function () {
            //only need the super Child here
            var localSpy = sinon.spy(Classes, 'SuperCallChild');
            newSuperChild = new Classes.SuperCallChild();

            expect(localSpy.calledOnce).toBeTruthy();
            expect(localSpy.calledBefore(spy)).toBeTruthy();
            expect(spy.calledOn(newSuperChild)).toBe(true);

        });

    });
});
