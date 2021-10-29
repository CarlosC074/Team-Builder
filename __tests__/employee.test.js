const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('getName()', () => {
        it("should return the name: John Doe", () => {
            const name = 'John Doe';
            const id = '001';
            const email = 'john.doe@gmail.com';

            const employee = new Employee(name, id, email);

            expect(employee.getName()).toEqual('John Doe');
        })
    })

    describe('getId()', () => {
        it("should return the id: 001", () => {
            const name = 'John Doe';
            const id = '001';
            const email = 'john.doe@gmail.com';

            const employee = new Employee(name, id, email);

            expect(employee.getid()).toEqual('001');
        })
    })

    describe('getId()', () => {
        it("should return the email: john.doe@gmail.com", () => {
            const name = 'John Doe';
            const id = '001';
            const email = 'john.doe@gmail.com';

            const employee = new Employee(name, id, email);

            expect(employee.getId()).toEqual('john.doe@gmail.com');
        })
    })

    describe('getRole()', () => {
        it("should return the email: john.doe@gmail.com", () => {
            const name = 'John Doe';
            const id = '001';
            const email = 'john.doe@gmail.com';

            const employee = new Employee(name, id, email);

            expect(employee.getId()).toEqual('john.doe@gmail.com');
        })
    })
})

    