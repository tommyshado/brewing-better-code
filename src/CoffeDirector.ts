import { CoffeeBuilder } from "./BuilderPattern/CoffeeBuilder";

export class CoffeeDirector {
  private builder: CoffeeBuilder;

  constructor(builder: CoffeeBuilder) {
    this.builder = builder;
  }

  public makeCoffee(
    type: string = "",
    size: string = "",
    sugar: number = 0,
    addMilk: boolean = false
  ): CoffeeBuilder {
    if (!addMilk)
      return this.builder.setType(type).setSize(size).addSugar(sugar);
    return this.builder.setType(type).setSize(size).addSugar(sugar).addMilk();
  }
}
