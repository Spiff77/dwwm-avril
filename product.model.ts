export class Product {

    private static $amountTaxe = 20;

    constructor(public price: number, public color: string) {
        this.color = color;
    }

    static set amountTaxe(value: number) {
        console.log('Changement de la taxe:', value);
        this.$amountTaxe = value;
    }

    getRealPrice(): number {
        return (this.price * (Product.$amountTaxe / 100)) + this.price;
    }
}
