const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');

const name = "John"
const id = "002"
const email = "john.doe@gmail.com"
const github = "johnnyboy64"

const john = new Engineer(name, id, email, github);

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should be an instance of the Employee class", () => {

            expect(john).toBeInstanceOf(Employee);
        })
    })

    describe("getRole()", () => {

        expect(john.getRole()).toEqual('<td>engineer</td>');
    })

    describe("getGithub()", () => {
        expect(john.getGithub()).toBe(`<td>https://github.com/${github}</td>`)
    })
})