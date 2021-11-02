const Employee = require('../lib/employee')
const Manager = require ("../lib/manager");

//I am unsure if this violates test unit conventions but this global variable keeps up with the DRY principle so
//I do not have to make this object each time I want to test a class function
    const name = "John Doe";
    const id = "001";
    const email = "john.doe@gmail.com";
    const officeNum = "201";

    const boss = new Manager(name, id, email, officeNum);

describe("Manager", () => {
    describe("Inheritence" , () => {
        it("should be an instance of the employee class", () => {

            expect(boss).toBeInstanceOf(Employee);
        })
    })

    describe("getRole()", () => {
        it("should return the role of manager rather than employee", () => {

            expect(boss.getRole()).toBe('<td>manager</td>')
        })
    })

    describe("getOfficeNum()", () => {
        it("should return the data cell for the manager's office number", () => {

            expect(boss.getOfficeNum()).toBe(`<td>201</td>`)
        })
    })
})