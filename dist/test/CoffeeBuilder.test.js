"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const CoffeeBuilder_1 = require("../src/BuilderPattern/CoffeeBuilder");
const CoffeeTypes_1 = require("../src/CoffeeTypes");
const CoffeDirector_1 = require("../src/CoffeDirector");
describe("CoffeeBuilder", () => {
    it("should build coffee with milk and without sugar", () => {
        const coffeeBuilder = new CoffeeBuilder_1.CoffeeBuilder();
        const results = coffeeBuilder
            .setType(CoffeeTypes_1.CoffeeTypes.Latte)
            .setSize("small")
            .addMilk();
        assert_1.default.deepEqual(results.build(), {
            milk: true,
            size: "small",
            sugar: 0,
            type: "Latte",
        });
    });
    it("should build coffee without milk and with sugar", () => {
        const coffeeBuilder = new CoffeeBuilder_1.CoffeeBuilder();
        const results = coffeeBuilder
            .setType(CoffeeTypes_1.CoffeeTypes.Americano)
            .setSize("large")
            .addSugar(2);
        assert_1.default.deepEqual(results.build(), {
            milk: false,
            type: "Americano",
            size: "large",
            sugar: 2,
        });
    });
    describe("CoffeeDirector", () => {
        it("CoffeeBuilder should use CoffeeDirector to make an Espressso with milk", () => {
            const coffeDirector = new CoffeDirector_1.CoffeeDirector(new CoffeeBuilder_1.CoffeeBuilder());
            const results = coffeDirector.makeCoffeeWithMilk(CoffeeTypes_1.CoffeeTypes.Espresso, "Medium", 1);
            assert_1.default.deepEqual(results.build(), {
                type: "Espresso",
                size: "Medium",
                sugar: 1,
                milk: true,
            });
        });
        it("CoffeeBuilder should use CoffeeDirector to make an Espressso with milk", () => {
            const coffeDirector = new CoffeDirector_1.CoffeeDirector(new CoffeeBuilder_1.CoffeeBuilder());
            const results = coffeDirector.makeCoffeeWithoutMilk(CoffeeTypes_1.CoffeeTypes.Latte, "Medium", 1);
            assert_1.default.deepEqual(results.build(), {
                type: "Latte",
                size: "Medium",
                sugar: 1,
                milk: false,
            });
        });
    });
});
