define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Product = void 0;
    var Product = /** @class */ (function () {
        function Product(price, color) {
            this.price = price;
            this.color = color;
            this.color = color;
        }
        Object.defineProperty(Product, "amountTaxe", {
            set: function (value) {
                console.log('Changement de la taxe:', value);
                this.$amountTaxe = value;
            },
            enumerable: false,
            configurable: true
        });
        Product.prototype.getRealPrice = function () {
            return (this.price * (Product.$amountTaxe / 100)) + this.price;
        };
        Product.$amountTaxe = 20;
        return Product;
    }());
    exports.Product = Product;
});
//# sourceMappingURL=product.model.js.map