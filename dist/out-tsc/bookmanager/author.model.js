define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Author = void 0;
    var Author = /** @class */ (function () {
        function Author(id, firstname, lastname, books) {
            this.id = id;
            this.firstname = firstname;
            this.lastname = lastname;
            this.books = [];
            this.books = books || [];
        }
        return Author;
    }());
    exports.Author = Author;
});
//# sourceMappingURL=author.model.js.map