"use strict";
exports.__esModule = true;
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(model, color, year) {
        this.options = [];
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
    return Car;
}());
exports.Car = Car;
var c1 = new Car('Peugeot', 'Red', 2015);
console.log(c1.addOption('Clim'));
console.log(c1.addOption('Radio'));
console.log(c1.addOption('Abs'));
console.log(c1.addOption('Toaster'));
console.log(c1);
