define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Perso = void 0;
    var Perso = /** @class */ (function () {
        function Perso($firstname, $lastname, $age) {
            this.$firstname = $firstname;
            this.$lastname = $lastname;
            this.$age = $age;
        }
        Perso.prototype.anniversaire = function () {
            this.$age++;
        };
        Perso.prototype.getFullname = function () {
            return this.$firstname + " " + this.lastname;
        };
        Perso.prototype.changeAge = function (newAge) {
            this.$age = newAge;
        };
        Perso.prototype.compare = function (perso) {
            var result;
            if (this.$age > perso.$age) {
                result = 'plus agé';
            }
            else if (this.$age < perso.$age)
                result = 'plus jeune';
            else {
                result = 'du même age';
            }
            return this.getFullname() + " est " + result + " que " + perso.getFullname();
        };
        Object.defineProperty(Perso.prototype, "lastname", {
            get: function () {
                return this.$lastname;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Perso.prototype, "age", {
            get: function () {
                return this.$age;
            },
            enumerable: false,
            configurable: true
        });
        return Perso;
    }());
    exports.Perso = Perso;
});
//# sourceMappingURL=perso.model.js.map