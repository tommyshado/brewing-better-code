"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const CoffeMaker_1 = require("../src/StrategyPattern/CoffeMaker");
const EspressoStrategy_1 = require("../src/StrategyPattern/EspressoStrategy");
const FrenchPressStrategy_1 = require("../src/StrategyPattern/FrenchPressStrategy");
const PourOverStrategy_1 = require("../src/StrategyPattern/PourOverStrategy");
const espressStrategy = new EspressoStrategy_1.EspressoStrategy();
const coffeMaker = new CoffeMaker_1.CoffeeMaker(espressStrategy);
const frenchPressStrategy = new FrenchPressStrategy_1.FrenchPressStrategy();
const pourOverStrategy = new PourOverStrategy_1.PourOverStrategy();
describe("CoffeMaker", () => {
    // Testing for EspressoStrategy
    it("should brew coffe using EspressoStrategy", () => {
        const results = coffeMaker.brewCoffee();
        assert_1.default.equal(results, 'Brewing coffee with an espresso machine.');
    });
    // Testing for FrenchPressStrategy
    it("should brew coffe using FrenchPressStrategy", () => {
        // Setting a new strategy
        coffeMaker.setStrategy(frenchPressStrategy);
        const results = coffeMaker.brewCoffee();
        assert_1.default.equal(results, 'Brewing coffee with a French press.');
    });
    // Testing for PourOverStrategy
    it("should brew coffe using PourOverStrategy", () => {
        coffeMaker.setStrategy(pourOverStrategy);
        const results = coffeMaker.brewCoffee();
        assert_1.default.equal(results, 'Brewing coffee with a pour-over method.');
    });
    // Test Switching Brewing Strategies at Runtime
    it("should switch brewing strategies at runtime", () => {
        // Using the espressStrategy to brew coffee
        coffeMaker.setStrategy(espressStrategy);
        assert_1.default.equal(coffeMaker.brewCoffee(), 'Brewing coffee with an espresso machine.');
        // Using the FrenchPressStrategy to brew coffee
        coffeMaker.setStrategy(frenchPressStrategy);
        assert_1.default.equal(coffeMaker.brewCoffee(), 'Brewing coffee with a French press.');
        // Using the PourOverStrategy
        coffeMaker.setStrategy(pourOverStrategy);
        assert_1.default.equal(coffeMaker.brewCoffee(), 'Brewing coffee with a pour-over method.');
    });
});
