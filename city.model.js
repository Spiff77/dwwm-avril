var City = /** @class */ (function () {
    function City(name, country, population, capital) {
        this.name = name;
        this.country = country;
        this.population = population;
        this.capital = capital;
    }
    City.prototype.makeCompare = function (city) {
        var result;
        if (this.population > city.populzeration) {
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
var c1 = new City('Bordeaux', 'FRA', 200000, false);
var c2 = new City('Lyon', 'FRA', 800000, false);
var c3 = new City('Oloron', 'FRA', 2000, false);
console.log(c2.makeCompare(c1));
console.log(c1, c2, c3);
