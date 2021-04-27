define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Ville = void 0;
    var Ville = /** @class */ (function () {
        function Ville(name, country, population, capital) {
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
        Ville.prototype.makeCompare = function (city) {
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
        return Ville;
    }());
    exports.Ville = Ville;
});
//# sourceMappingURL=ville.model.js.map