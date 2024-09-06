"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeDirector = void 0;
class CoffeeDirector {
    constructor(builder) {
        this.builder = builder;
    }
    makeEspresso() {
        return this.builder.setType('Espresso').setSize('Small').addSugar(1).addMilk();
    }
    makeLatte() {
        return this.builder.setType('Latte').setSize('Large').addSugar(2).addMilk();
    }
}
exports.CoffeeDirector = CoffeeDirector;
