define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Company = void 0;
    var Company = /** @class */ (function () {
        function Company($name) {
            this.$name = $name;
        }
        Object.defineProperty(Company.prototype, "name", {
            get: function () {
                return this.$name;
            },
            set: function (value) {
                this.$name = value;
            },
            enumerable: false,
            configurable: true
        });
        return Company;
    }());
    exports.Company = Company;
});
//# sourceMappingURL=company.model.js.map