class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "employee";
    }

    getName() {
        return `<td>${this.name}</td>`;
    }

    getId() {
        return `<td>${this.id}</td>`;
    }

    getEmail() {
        return `<td><a href="mailto:${this.email}">${this.email}</a></td>`;
    }

    getRole() {
        return `<td>${this.role}</td>`;
    }
}

module.exports = Employee;