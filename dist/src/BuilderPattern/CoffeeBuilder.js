"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeBuilder = void 0;
const Coffee_1 = require("../Coffee");
class CoffeeBuilder {
    constructor() {
        this.coffee = new Coffee_1.Coffee();
    }
    setType(type) {
        this.coffee.type = type;
        return this;
    }
    setSize(size) {
        this.coffee.size = size;
        return this;
    }
    addSugar(sugar) {
        this.coffee.sugar = sugar;
        return this;
    }
    addMilk() {
        this.coffee.milk = true;
        return this;
    }
    build() {
        return this.coffee;
    }
}
exports.CoffeeBuilder = CoffeeBuilder;
