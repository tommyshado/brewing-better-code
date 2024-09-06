"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const SugarDecorator_1 = require("../src/DecoratorPattern/SugarDecorator");
const SimpleCoffee_1 = require("../src/DecoratorPattern/SimpleCoffee");
const MilkDecorator_1 = require("../src/DecoratorPattern/MilkDecorator");
const CreamDecorator_1 = require("../src/DecoratorPattern/CreamDecorator");
let simpleCoffee;
describe("CoffeeDecorators", () => {
    beforeEach(() => {
        simpleCoffee = new SimpleCoffee_1.SimpleCoffee();
    });
    it("should update coffee cost, and description when adding sugar", () => {
        let coffee = {
            cost: simpleCoffee.cost(),
            description: simpleCoffee.description(),
        };
        assert_1.default.deepEqual(coffee, { cost: 5, description: "Simple coffee" });
        // Add Sugar
        simpleCoffee = new SugarDecorator_1.SugarDecorator(simpleCoffee);
        coffee = {
            cost: simpleCoffee.cost(),
            description: simpleCoffee.description(),
        };
        assert_1.default.deepEqual(coffee, {
            cost: 5.5,
            description: "Simple coffee, with sugar",
        });
    });
    it("should update coffee cost, and description when adding sugar and milk", () => {
        let coffee = {
            cost: simpleCoffee.cost(),
            description: simpleCoffee.description(),
        };
        assert_1.default.deepEqual(coffee, { cost: 5, description: "Simple coffee" });
        // Add Sugar
        simpleCoffee = new SugarDecorator_1.SugarDecorator(simpleCoffee);
        coffee = {
            cost: simpleCoffee.cost(),
            description: simpleCoffee.description(),
        };
        assert_1.default.deepEqual(coffee, {
            cost: 5.5,
            description: "Simple coffee, with sugar",
        });
        // Add Milk
        simpleCoffee = new MilkDecorator_1.MilkDecorator(simpleCoffee);
        coffee = {
            cost: simpleCoffee.cost(),
            description: simpleCoffee.description()
        };
        assert_1.default.deepEqual(coffee, {
            cost: 7.0,
            description: "Simple coffee, with sugar, with milk",
        });
    });
    it("should update coffee cost, and description when adding sugar, cream, and milk", () => {
        let coffee = {
            cost: simpleCoffee.cost(),
            description: simpleCoffee.description(),
        };
        assert_1.default.deepEqual(coffee, { cost: 5, description: "Simple coffee" });
        // Add Sugar
        simpleCoffee = new SugarDecorator_1.SugarDecorator(simpleCoffee);
        coffee = {
            cost: simpleCoffee.cost(),
            description: simpleCoffee.description(),
        };
        assert_1.default.deepEqual(coffee, {
            cost: 5.5,
            description: "Simple coffee, with sugar",
        });
        // Add Milk
        simpleCoffee = new MilkDecorator_1.MilkDecorator(simpleCoffee);
        coffee = {
            cost: simpleCoffee.cost(),
            description: simpleCoffee.description()
        };
        assert_1.default.deepEqual(coffee, {
            cost: 7.0,
            description: "Simple coffee, with sugar, with milk",
        });
        // Add Cream
        simpleCoffee = new CreamDecorator_1.CreamDecorator(simpleCoffee);
        coffee = {
            cost: simpleCoffee.cost(),
            description: simpleCoffee.description()
        };
        assert_1.default.deepEqual(coffee, {
            cost: 8.0,
            description: "Simple coffee, with sugar, with milk, with cream",
        });
    });
});
