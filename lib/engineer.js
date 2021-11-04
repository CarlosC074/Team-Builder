const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = "engineer";
    }

    getGithub() {
        return `<td><a href= "https://github.com/${this.github}">${this.github}</a></td>`
    }
}

module.exports = Engineer;