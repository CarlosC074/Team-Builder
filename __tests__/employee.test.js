const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('getName()', () => {
        it("should return the name: John Doe", () => {
            const name = 'John Doe';
            const id = '001';
            const email = 'john.doe@gmail.com';

            const employee = new Employee(name, id, email);

            expect(employee.getName()).toEqual(`<td>John Doe</td>`);
        })
    })

    describe('getId()', () => {
        it("should return the id: 001", () => {
            const name = 'John Doe';
            const id = '001';
            const email = 'john.doe@gmail.com';

            const employee = new Employee(name, id, email);

            expect(employee.getId()).toEqual( `<td>001</td>`);
        })
    })

    describe('getEmail()', () => {
        it("should return the email: john.doe@gmail.com", () => {
            const name = 'John Doe';
            const id = '001';
            const email = 'john.doe@gmail.com';

            const employee = new Employee(name, id, email);

            expect(employee.getEmail()).toEqual(`<td><a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a></td>`);
        })
    })

    describe('getRole()', () => {
        it("should return the email: john.doe@gmail.com", () => {
            const name = 'John Doe';
            const id = '001';
            const email = 'john.doe@gmail.com';

            const employee = new Employee(name, id, email);

            expect(employee.getRole()).toEqual(`<td>employee</td>`);
        })
    })
})

    