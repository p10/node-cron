import chai from "chai";
import Task from "../../src/task.js";
const { expect } = chai;
describe("Task", () => {
    it("should accept a function", () => {
        expect(() => {
            new Task(() => { });
        }).to.not.throw();
    });
    it("should fail without a function", () => {
        expect(() => {
            new Task([]);
        }).to.throw("execution must be a function");
    });
});
