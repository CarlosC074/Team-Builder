const Employee = require('../lib/employee');
const Intern = require('../lib/intern');

const name = "freddy";
const id = "005";
const email = "ready.freddy@gmail.com";
const school = "The school of hard knocks";

const fred = new Intern(name, id, email, school);

describe("Intern", () => {
    describe("Initialization", () => {
        it("should be an instance of the employee class", () => {
            expect(fred).toBeInstanceOf(Employee);
        })
    })

    describe("getRole()", () => {
        it("should return the the role Intern rather than Employee", () => {
            expect(fred.getRole()).toBe(`<td>intern</td>`)
        })
    })

    describe("getSchool()", () => {
        it("should return the intern's school", () => {
            expect(fred.getSchool()).toBe(`<td>${school}</td>`)
        })
    })
})