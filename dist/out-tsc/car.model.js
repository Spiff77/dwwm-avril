define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Car = void 0;
    var Car = /** @class */ (function () {
        function Car(model, color, year) {
            this.options = [];
            this.gasQuantity = 0;
            this.model = model;
            this.color = color;
            this.year = year;
        }
        Car.prototype.addOption = function (option) {
            if (this.options.length < 3) {
                this.options.push(option);
                return "OK";
            }
            else {
                return "Max d'options atteint";
            }
        };
        Object.defineProperty(Car, "maxGasTankSize", {
            get: function () {
                return this.$maxGasTankSize;
            },
            set: function (value) {
                if (value >= 300) {
                    this.$maxGasTankSize = 300;
                }
                else {
                    this.$maxGasTankSize = value;
                }
            },
            enumerable: false,
            configurable: true
        });
        Car.prototype.fillTank = function () {
            this.gasQuantity = Car.$maxGasTankSize;
        };
        Car.$maxGasTankSize = 100;
        return Car;
    }());
    exports.Car = Car;
});
//# sourceMappingURL=car.model.js.map