export class City {

    name: string;
    country: string;
    population: number;
    category: string;
    capital: boolean;

    constructor(name: string, country: string, population: number, capital: boolean) {
        this.name = name;
        this.country = country;
        this.population = population;
        this.capital = capital;
        if(this.capital) {
            this.category = (population > 600000) ? "Big" : "Small";
        } else {
            this.category = (population > 700000) ? "Big" : "Small";
        }
    }

    makeCompare(city: City): string {
        let result;
        if(this.population > city.population) {
            result = 'Plus grand';
        }else if(this.population < city.population) {
            result = 'Plus petit';
        }else {
            result = 'De même taille'
        }
        return this.name + result + city.name
    }
}

