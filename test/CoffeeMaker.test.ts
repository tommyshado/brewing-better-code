import assert from "assert";
import { CoffeeMaker } from "../src/StrategyPattern/CoffeMaker";
import { EspressoStrategy } from "../src/StrategyPattern/EspressoStrategy";
import { FrenchPressStrategy } from "../src/StrategyPattern/FrenchPressStrategy";
import { PourOverStrategy } from "../src/StrategyPattern/PourOverStrategy";

const espressStrategy = new EspressoStrategy();
const coffeMaker = new CoffeeMaker(espressStrategy);
const frenchPressStrategy = new FrenchPressStrategy();
const pourOverStrategy = new PourOverStrategy();

describe("CoffeMaker", () => {
    // Testing for EspressoStrategy
    it("should brew coffe using EspressoStrategy", () => {
        const results = coffeMaker.brewCoffee();
        assert.equal(results, 'Brewing coffee with an espresso machine.');
    });
    // Testing for FrenchPressStrategy
    it("should brew coffe using FrenchPressStrategy", () => {
        // Setting a new strategy
        coffeMaker.setStrategy(frenchPressStrategy);
        const results = coffeMaker.brewCoffee();
        assert.equal(results, 'Brewing coffee with a French press.');
    });
    // Testing for PourOverStrategy
    it("should brew coffe using PourOverStrategy", () => {
        coffeMaker.setStrategy(pourOverStrategy);
        const results = coffeMaker.brewCoffee();
        assert.equal(results, 'Brewing coffee with a pour-over method.')
    });
    // Test Switching Brewing Strategies at Runtime
    it("should switch brewing strategies at runtime", () => {
        // Using the espressStrategy to brew coffee
        coffeMaker.setStrategy(espressStrategy);
        assert.equal(coffeMaker.brewCoffee(), 'Brewing coffee with an espresso machine.');

        // Using the FrenchPressStrategy to brew coffee
        coffeMaker.setStrategy(frenchPressStrategy);
        assert.equal(coffeMaker.brewCoffee(), 'Brewing coffee with a French press.');

        // Using the PourOverStrategy
        coffeMaker.setStrategy(pourOverStrategy);
        assert.equal(coffeMaker.brewCoffee(), 'Brewing coffee with a pour-over method.')
    })
})