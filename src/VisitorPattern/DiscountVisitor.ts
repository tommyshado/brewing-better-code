import { CoffeeVisitor } from "./ICoffeeVisitor";
import { Espresso, Cappuccino, Latte } from "./Coffee";

class DiscountVisitor implements CoffeeVisitor {
  visitEspresso(espresso: Espresso): void {
    console.log(`Espresso cost after discount: ${espresso.cost() * 0.9}`);
  }

  visitLatte(latte: Latte): void {
    console.log(`Latte cost after discount: ${latte.cost() * 0.85}`);
  }

  visitCappuccino(cappuccino: Cappuccino): void {
    console.log(`Cappuccino cost after discount: ${cappuccino.cost() * 0.8}`);
  }
}

class CalorieVisitor implements CoffeeVisitor {
  visitEspresso(espresso: Espresso): void {
    console.log(`Espresso has ${espresso.calories()} calories`);
  }

  visitLatte(latte: Latte): void {
    console.log(`Latte has ${latte.calories()} calories`);
  }

  visitCappuccino(cappuccino: Cappuccino): void {
    console.log(`Cappuccino has ${cappuccino.calories()} calories`);
  }
}

export { DiscountVisitor, CalorieVisitor };
