var Employee = /** @class */ (function () {
    function Employee(fullName) {
        this._fullName = fullName;
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (name) {
            this._fullName = name;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee("Bob Smith");
if (employee.fullName) {
    console.log(employee.fullName);
}
