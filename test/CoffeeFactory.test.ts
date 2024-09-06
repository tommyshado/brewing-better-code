import assert from "assert";
import CoffeeFactory from "../src/SingletonPattern/CoffeeFactory";
import { CoffeeTypes } from "../src/CoffeeTypes";

describe("CoffeeFactory", () => {
    const coffeeFactory = CoffeeFactory.getInstance();

    it("should get the same instance when called", () => {
        const coffeeFactory1 = CoffeeFactory.getInstance();
        const coffeeFactory2 = CoffeeFactory.getInstance();
        assert.deepEqual(coffeeFactory1, coffeeFactory2);
    });

    it("should brew a cup of Espresso", () => {
        assert.equal(coffeeFactory.brewCoffee(CoffeeTypes.Espresso), 'Brewing a cup of Espresso');
    });

    it("should brew a cup of Americano", () => {
        assert.equal(coffeeFactory.brewCoffee(CoffeeTypes.Americano), 'Brewing a cup of Americano');
    });

    it("should brew a cup of FrenchPress", () => {
        assert.equal(coffeeFactory.brewCoffee(CoffeeTypes.FrenchPress), 'Brewing a cup of FrenchPress')
    });
})