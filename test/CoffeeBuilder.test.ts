import assert from "assert";
import { CoffeeBuilder } from "../src/BuilderPattern/CoffeeBuilder";
import { CoffeeTypes } from "../src/CoffeeTypes";
import { CoffeeDirector } from "../src/CoffeDirector";

describe("CoffeeBuilder", () => {
  it("should build coffee with milk and without sugar", () => {
    const coffeeBuilder = new CoffeeBuilder();
    const results = coffeeBuilder
      .setType(CoffeeTypes.Latte)
      .setSize("small")
      .addMilk();
    assert.deepEqual(results.build(), {
      milk: true,
      size: "small",
      sugar: 0,
      type: "Latte",
    });
  });

  it("should build coffee without milk and with sugar", () => {
    const coffeeBuilder = new CoffeeBuilder();
    const results = coffeeBuilder
      .setType(CoffeeTypes.Americano)
      .setSize("large")
      .addSugar(2);
    assert.deepEqual(results.build(), {
      milk: false,
      type: "Americano",
      size: "large",
      sugar: 2,
    });
  });

  describe("CoffeeDirector", () => {
      it("CoffeeBuilder should use CoffeeDirector to make an Espressso with milk", () => {
      const coffeDirector = new CoffeeDirector(new CoffeeBuilder());
      const results = coffeDirector.makeCoffeeWithMilk(
        CoffeeTypes.Espresso,
        "Medium",
        1
      );
      assert.deepEqual(results.build(), {
        type: "Espresso",
        size: "Medium",
        sugar: 1,
        milk: true,
      });
    });
    it("CoffeeBuilder should use CoffeeDirector to make an Espressso with milk", () => {
        const coffeDirector = new CoffeeDirector(new CoffeeBuilder());
        const results = coffeDirector.makeCoffeeWithoutMilk(
          CoffeeTypes.Latte,
          "Medium",
          1
        );
        assert.deepEqual(results.build(), {
          type: "Latte",
          size: "Medium",
          sugar: 1,
          milk: false,
        });
      });
  });
  
});
