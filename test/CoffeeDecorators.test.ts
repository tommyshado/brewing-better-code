import assert from "assert";
import { SugarDecorator } from "../src/DecoratorPattern/SugarDecorator";
import { SimpleCoffee } from "../src/DecoratorPattern/SimpleCoffee";
import { MilkDecorator } from "../src/DecoratorPattern/MilkDecorator";
import { CreamDecorator } from "../src/DecoratorPattern/CreamDecorator";

let simpleCoffee: SimpleCoffee;

describe("CoffeeDecorators", () => {
  beforeEach(() => {
    simpleCoffee = new SimpleCoffee();
  });

  it("should update coffee cost, and description when adding sugar", () => {
    let coffee = {
      cost: simpleCoffee.cost(),
      description: simpleCoffee.description(),
    };
    assert.deepEqual(coffee, { cost: 5, description: "Simple coffee" });

    // Add Sugar
    simpleCoffee = new SugarDecorator(simpleCoffee);
    coffee = {
      cost: simpleCoffee.cost(),
      description: simpleCoffee.description(),
    };
    assert.deepEqual(coffee, {
      cost: 5.5,
      description: "Simple coffee, with sugar",
    });
  });

  it("should update coffee cost, and description when adding sugar and milk", () => {
    let coffee = {
      cost: simpleCoffee.cost(),
      description: simpleCoffee.description(),
    };
    assert.deepEqual(coffee, { cost: 5, description: "Simple coffee" });

    // Add Sugar
    simpleCoffee = new SugarDecorator(simpleCoffee);
    coffee = {
      cost: simpleCoffee.cost(),
      description: simpleCoffee.description(),
    };
    assert.deepEqual(coffee, {
      cost: 5.5,
      description: "Simple coffee, with sugar",
    });
  
    // Add Milk
    simpleCoffee = new MilkDecorator(simpleCoffee);
    coffee = {
      cost: simpleCoffee.cost(),
      description: simpleCoffee.description()
    }
    assert.deepEqual(coffee, {
      cost: 7.0,
      description: "Simple coffee, with sugar, with milk",
    })
  });

  it("should update coffee cost, and description when adding sugar, cream, and milk", () => {
    let coffee = {
      cost: simpleCoffee.cost(),
      description: simpleCoffee.description(),
    };
    assert.deepEqual(coffee, { cost: 5, description: "Simple coffee" });

    // Add Sugar
    simpleCoffee = new SugarDecorator(simpleCoffee);
    coffee = {
      cost: simpleCoffee.cost(),
      description: simpleCoffee.description(),
    };
    assert.deepEqual(coffee, {
      cost: 5.5,
      description: "Simple coffee, with sugar",
    });
  
    // Add Milk
    simpleCoffee = new MilkDecorator(simpleCoffee);
    coffee = {
      cost: simpleCoffee.cost(),
      description: simpleCoffee.description()
    }
    assert.deepEqual(coffee, {
      cost: 7.0,
      description: "Simple coffee, with sugar, with milk",
    })

    // Add Cream
    simpleCoffee = new CreamDecorator(simpleCoffee);
    coffee = {
      cost: simpleCoffee.cost(),
      description: simpleCoffee.description()
    }
    assert.deepEqual(coffee, {
      cost: 8.0,
      description: "Simple coffee, with sugar, with milk, with cream",
    })
  });
});
