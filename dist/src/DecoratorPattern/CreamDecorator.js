"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreamDecorator = void 0;
class CreamDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    cost() {
        return this.coffee.cost() + 1.0; // Cream adds $1.00 to the base price
    }
    description() {
        return `${this.coffee.description()}, with cream`;
    }
}
exports.CreamDecorator = CreamDecorator;
