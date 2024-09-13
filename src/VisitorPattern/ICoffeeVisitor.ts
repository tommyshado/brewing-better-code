import { Espresso, Cappuccino, Latte } from "./Coffee";

export interface CoffeeVisitor {
  visitEspresso(espresso: Espresso): void;
  visitLatte(latte: Latte): void;
  visitCappuccino(cappuccino: Cappuccino): void;
}
