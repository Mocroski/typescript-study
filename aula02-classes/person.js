"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.showAge = function (age) {
        console.log("".concat(this.name, " has ").concat(age, " years"));
    };
    Person.prototype.toString = function () {
        return "Class Person, name ".concat(this.name, ";");
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=person.js.map