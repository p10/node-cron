import chai from "chai";
import validate from "../../src/pattern-validation.js";
const { expect } = chai;
describe("pattern-validation.js", () => {
    describe("validate minutes", () => {
        it("should fail with invalid minute", () => {
            expect(() => {
                validate("63 * * * *");
            }).to.throw("63 is a invalid expression for minute");
        });
        it("should not fail with valid minute", () => {
            expect(() => {
                validate("30 * * * *");
            }).to.not.throw();
        });
        it("should not fail with *", () => {
            expect(() => {
                validate("* * * * *");
            }).to.not.throw();
        });
        it("should not fail with */2", () => {
            expect(() => {
                validate("*/2 * * * *");
            }).to.not.throw();
        });
    });
});
