import {Product} from './product.model';

let p1 = new Product(100, 'green')
let p2 = new Product(150, 'red')

console.log(p1.getRealPrice())
console.log(p2.getRealPrice())

Product.amountTaxe = 50;

console.log(p1.getRealPrice())
console.log(p2.getRealPrice())
