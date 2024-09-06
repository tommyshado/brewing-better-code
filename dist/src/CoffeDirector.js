"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeDirector = void 0;
class CoffeeDirector {
    constructor(builder) {
        this.builder = builder;
    }
    makeCoffee(type = "", size = "", sugar = 0, addMilk = false) {
        if (!addMilk)
            return this.builder.setType(type).setSize(size).addSugar(sugar);
        return this.builder.setType(type).setSize(size).addSugar(sugar).addMilk();
    }
}
exports.CoffeeDirector = CoffeeDirector;
