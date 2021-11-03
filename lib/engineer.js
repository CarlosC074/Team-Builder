const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = "engineer";
    }

    getGithub() {
        return `<td>https://github.com/${this.github}</td>`
    }
}

module.exports = Engineer;