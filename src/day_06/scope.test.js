
describe('DAY 6: Test Scope', () => {

    it(`n should be available outside of the block scope`, () => {

        {
            // change the declaration statement to accomplish the task
            let n = 5;
        }

        expect(n).toBe(5);
    });

    it(`outer n should be 5
        inner IIFE n variable should be 4 (hint: add the missing code)`, () => {
        let n = 5;

        (function () {

            expect(n).toBe(4);

        }());

        expect(n).toBe(5);
    });

    it(`inner most IIFE should have access to the outer most n variable (hint: change the expect statement)`, () => {
        let n = 5;

        (function () {

            (function () {

                (function () {

                    (function () {

                        (function () {

                            expect(n).not.toBe(5);

                        }());

                    }());

                }());

            }());

        }());

    });

});
