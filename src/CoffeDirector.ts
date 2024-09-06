import { CoffeeBuilder } from './BuilderPattern/CoffeeBuilder';

export class CoffeeDirector {
    private builder: CoffeeBuilder;

    constructor(builder: CoffeeBuilder) {
        this.builder = builder;
    }

    public makeCoffeeWithMilk(type: string = '', size: string = '', sugar: number = 0): CoffeeBuilder {
        return this.builder.setType(type).setSize(size).addSugar(sugar).addMilk();
    }

    public makeCoffeeWithoutMilk(type: string = '', size: string = '', sugar: number = 0): CoffeeBuilder {
        return this.builder.setType(type).setSize(size).addSugar(sugar);
    }
}