define(["require", "exports", "./product.model"], function (require, exports, product_model_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var p1 = new product_model_1.Product(100, 'green');
    var p2 = new product_model_1.Product(150, 'red');
    console.log(p1.getRealPrice());
    console.log(p2.getRealPrice());
    product_model_1.Product.amountTaxe = 50;
    console.log(p1.getRealPrice());
    console.log(p2.getRealPrice());
});
//# sourceMappingURL=main.js.map