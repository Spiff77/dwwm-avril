export class Car {
    model: string;
    color: string;
    year:number;
    options: string[] = [];
    private static $maxGasTankSize: number = 100;
    gasQuantity: number = 0;

    constructor(model: string, color: string, year: number) {
        this.model = model;
        this.color = color;
        this.year = year;
    }

    addOption(option: string): string{
        if(this.options.length < 3){
            this.options.push(option);
            return "OK"
        }else {
           return "Max d'options atteint";
        }
    }

    static get maxGasTankSize(): number {
        return this.$maxGasTankSize;
    }

    static set maxGasTankSize(value: number) {
        if(value >= 300) {
            this.$maxGasTankSize = 300;
        }else{
            this.$maxGasTankSize = value;
        }
    }
    fillTank() {
        this.gasQuantity = Car.$maxGasTankSize;
    }

}
