"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const CoffeeFactory_1 = __importDefault(require("../src/SingletonPattern/CoffeeFactory"));
const CoffeeTypes_1 = require("../src/SingletonPattern/CoffeeTypes");
describe("CoffeeFactory", () => {
    const coffeeFactory = CoffeeFactory_1.default.getInstance();
    it("should get the same instance when called", () => {
        const coffeeFactory1 = CoffeeFactory_1.default.getInstance();
        const coffeeFactory2 = CoffeeFactory_1.default.getInstance();
        assert_1.default.deepEqual(coffeeFactory1, coffeeFactory2);
    });
    it("should brew a cup of Espresso", () => {
        assert_1.default.equal(coffeeFactory.brewCoffee(CoffeeTypes_1.CoffeeTypes.Espresso), 'Brewing a cup of Espresso');
    });
    it("should brew a cup of Americano", () => {
        assert_1.default.equal(coffeeFactory.brewCoffee(CoffeeTypes_1.CoffeeTypes.Americano), 'Brewing a cup of Americano');
    });
    it("should brew a cup of FrenchPress", () => {
        assert_1.default.equal(coffeeFactory.brewCoffee(CoffeeTypes_1.CoffeeTypes.FrenchPress), 'Brewing a cup of FrenchPress');
    });
});
