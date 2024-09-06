"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeDirector = void 0;
class CoffeeDirector {
    constructor(builder) {
        this.builder = builder;
    }
    makeCoffeeWithMilk(type = '', size = '', sugar = 0) {
        return this.builder.setType(type).setSize(size).addSugar(sugar).addMilk();
    }
    makeCoffeeWithoutMilk(type = '', size = '', sugar = 0) {
        return this.builder.setType(type).setSize(size).addSugar(sugar);
    }
}
exports.CoffeeDirector = CoffeeDirector;
