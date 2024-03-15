const Company = function (name) {
    // refers to a particular instance of this class Company
    this.name = name;
}

Company.prototype = {
    summarize () {
        return `Look at this stupid company called ${this.name}, whose only purpose is to drain the world of resource and waste human hours.`
    }
}

// Makes it have a global scope (can be used in a REPL)
window.Company = Company;
window.summarizeCompany = function (company) {
    return `Look at this stupid company called ${company.name}, whose only purpose is to drain the world of resource and waste human hours.`
}

window.companyFactory = function (name) {
    return new Company(name);
}

export default Company;