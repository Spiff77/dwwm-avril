define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Creature = void 0;
    var Creature = /** @class */ (function () {
        function Creature(nom) {
            this.nom = nom;
            this.$pointDeVie = 100;
            this.$vivant = true;
            this.nom = nom;
        }
        Object.defineProperty(Creature.prototype, "pointDeVie", {
            get: function () {
                return this.$pointDeVie;
            },
            set: function (value) {
                this.$pointDeVie = value;
                if (this.$pointDeVie <= 0) {
                    this.$vivant = false;
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Creature.prototype, "vivant", {
            get: function () {
                return this.$vivant;
            },
            enumerable: false,
            configurable: true
        });
        return Creature;
    }());
    exports.Creature = Creature;
});
//# sourceMappingURL=creature.model.js.map