import chai from "chai";
import validate from "../../src/pattern-validation.js";
const { expect } = chai;
describe("pattern-validation", () => {
    it("should succeed with a valid expression", () => {
        expect(() => {
            validate("59 * * * *");
        }).to.not.throw();
    });
    it("should fail with an invalid expression", () => {
        expect(() => {
            validate("60 * * * *");
        }).to.throw("60 is a invalid expression for minute");
    });
    it("should fail without a string", () => {
        expect(() => {
            validate(50);
        }).to.throw("pattern must be a string!");
    });
});
