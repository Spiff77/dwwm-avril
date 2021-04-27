define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.City = void 0;
    var City = /** @class */ (function () {
        function City(name, country, population, capital) {
            this.name = name;
            this.country = country;
            this.population = population;
            this.capital = capital;
            if (this.capital) {
                this.category = (population > 600000) ? "Big" : "Small";
            }
            else {
                this.category = (population > 700000) ? "Big" : "Small";
            }
        }
        City.prototype.makeCompare = function (city) {
            var result;
            if (this.population > city.population) {
                result = 'Plus grand';
            }
            else if (this.population < city.population) {
                result = 'Plus petit';
            }
            else {
                result = 'De même taille';
            }
            return this.name + result + city.name;
        };
        return City;
    }());
    exports.City = City;
});
//# sourceMappingURL=city.model.js.map