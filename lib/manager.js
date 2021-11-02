const Employee = require('../lib/employee');

class Manager extends Employee{
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
        this.role = "manager";
    }

    getOfficeNum() {
        return `<td>${this.officeNum}</td>`
    }
}

module.exports = Manager;