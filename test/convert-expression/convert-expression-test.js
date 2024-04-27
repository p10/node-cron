import chai from "chai";
import conversion from "../../src/convert-expression/index.js";
const { expect } = chai;
describe("month-names-conversion.js", () => {
    it("shuld convert month names", () => {
        const expression = conversion("* * * * January,February *");
        const expressions = expression.split(" ");
        expect(expressions[4]).to.equal("1,2");
    });
    it("shuld convert week day names", () => {
        const expression = conversion("* * * * * Mon,Sun");
        const expressions = expression.split(" ");
        expect(expressions[5]).to.equal("1,0");
    });
});
