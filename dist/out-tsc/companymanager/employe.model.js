define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Employee = void 0;
    var Employee = /** @class */ (function () {
        function Employee($id, firstname, lastname, salary, company, bankInfo, status) {
            this.$id = $id;
            this.firstname = firstname;
            this.lastname = lastname;
            this.salary = salary;
            this.company = company;
            this.bankInfo = bankInfo;
            this.status = status;
        }
        Object.defineProperty(Employee.prototype, "id", {
            get: function () {
                return this.$id;
            },
            enumerable: false,
            configurable: true
        });
        return Employee;
    }());
    exports.Employee = Employee;
});
//# sourceMappingURL=employe.model.js.map