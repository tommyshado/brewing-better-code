export interface Coffee {
  cost(): number;
  description(): string;
}

export class SimpleCoffee implements Coffee {
  cost(): number {
    return 5; // Base price for a simple coffee
  }

  description(): string {
    return "Simple coffee";
  }
}
