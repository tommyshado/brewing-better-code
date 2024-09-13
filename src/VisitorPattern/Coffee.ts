import { Coffee } from "./ICoffe";
import { CoffeeVisitor } from "./ICoffeeVisitor";

export class Espresso implements Coffee {
  accept(visitor: CoffeeVisitor): void {
    visitor.visitEspresso(this);
  }

  cost(): number {
    return 3.0;
  }

  calories(): number {
    return 50;
  }
}

export class Latte implements Coffee {
  accept(visitor: CoffeeVisitor): void {
    visitor.visitLatte(this);
  }

  cost(): number {
    return 4.5;
  }

  calories(): number {
    return 150;
  }
}

export class Cappuccino implements Coffee {
  accept(visitor: CoffeeVisitor): void {
    visitor.visitCappuccino(this);
  }

  cost(): number {
    return 4.0;
  }

  calories(): number {
    return 100;
  }
}
