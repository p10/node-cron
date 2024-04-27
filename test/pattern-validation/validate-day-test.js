import chai from "chai";
import validate from "../../src/pattern-validation.js";
const { expect } = chai;
describe("pattern-validation.js", () => {
    describe("validate day of month", () => {
        it("should fail with invalid day of month", () => {
            expect(() => {
                validate("* * 32 * *");
            }).to.throw("32 is a invalid expression for day of month");
        });
        it("should not fail with valid day of month", () => {
            expect(() => {
                validate("0 * * 15 * *");
            }).to.not.throw();
        });
        it("should not fail with * for day of month", () => {
            expect(() => {
                validate("* * * * * *");
            }).to.not.throw();
        });
        it("should not fail with */2 for day of month", () => {
            expect(() => {
                validate("* * */2 * *");
            }).to.not.throw();
        });
    });
});
