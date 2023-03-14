class Employee {
    private _fullName: string;
    constructor(fullName: string) {
        this._fullName = fullName
    }
    get fullName(): string {
        return this._fullName
    }

    set fullName(name: string) {
        this._fullName = name
    }

}

let employee = new Employee("Bob Smith");
if (employee.fullName) {
    console.log(employee.fullName);
}