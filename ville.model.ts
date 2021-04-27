export class Ville {

    
    category: string;
    private $refUnesco: string = "15487";

    constructor(public name: string, public country: string, public population: number, public capital: boolean) {
        if(this.capital) {
            this.category = (population > 600000) ? "Big" : "Small";
        } else {
            this.category = (population > 700000) ? "Big" : "Small";
        }
    }

    makeCompare(city: Ville): string {
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

    get refUnesco(): string {
        return this.$refUnesco;
    }
}

