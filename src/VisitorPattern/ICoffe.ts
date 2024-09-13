import { CoffeeVisitor } from "./ICoffeeVisitor";

export interface Coffee {
    accept(visitor: CoffeeVisitor): void;
    cost(): number;
    calories(): number;
}