import Sinon from "sinon";
import assert from "assert";
import { Espresso, Cappuccino, Latte } from "../src/VisitorPattern/Coffee";
import { DiscountVisitor, CalorieVisitor } from "../src/VisitorPattern/DiscountVisitor";
import { Coffee } from "../src/VisitorPattern/ICoffe";
import { CoffeeVisitor } from "../src/VisitorPattern/ICoffeeVisitor";

describe("CoffeeVisitor", () => {
    let discountVisitor: CoffeeVisitor = new DiscountVisitor();
    let calorieVisitor: CoffeeVisitor = new CalorieVisitor();

    it("should apply discount to Espresso, Cappuccino, and Latte", () => {
        let espresso: Coffee = new Espresso();
        let cappuccino: Coffee = new Cappuccino();
        let latte: Coffee = new Latte();
        
        const logSpy = Sinon.spy(console, 'log');

        espresso.accept(discountVisitor);
        cappuccino.accept(discountVisitor);
        latte.accept(discountVisitor);
        
        // Espresso asserts
        assert.equal(logSpy.calledWith("Espresso cost after discount: 2.7"), true);
        assert.equal(logSpy.calledWith("Espresso cost after discount: 2.100"), false);
    
        // Cappuccino asserts
        assert.equal(logSpy.calledWith("Cappuccino cost after discount: 3.2"), true);
        assert.equal(logSpy.calledWith("Cappuccino cost before discount: 4.50"), false);

        // Latte asserts
        assert.equal(logSpy.calledWith("Latte cost after discount: 3.8249999999999997"), true); 
        assert.equal(logSpy.calledWith("Latte cost before discount: 10"), false); 

        logSpy.restore();
    });  

    it("should display the correct calories for an Espresso, Cappuccino, and Latte", () => {
        let espresso: Coffee = new Espresso();
        let cappuccino: Coffee = new Cappuccino();
        let latte: Coffee = new Latte();
        
        const logSpy = Sinon.spy(console, 'log');

        espresso.accept(calorieVisitor);
        cappuccino.accept(calorieVisitor);
        latte.accept(calorieVisitor);

        // Espresso asserts
        assert.equal(logSpy.calledWith("Espresso has 50 calories"), true);
        assert.equal(logSpy.calledWith("Espresso has 90 calories"), false);
    
        // Cappuccino asserts
        assert.equal(logSpy.calledWith("Cappuccino has 100 calories"), true);
        assert.equal(logSpy.calledWith("Cappuccino has 200 calories"), false);

        // Latte asserts
        assert.equal(logSpy.calledWith("Latte has 150 calories"), true); 
        assert.equal(logSpy.calledWith("Latte has 300 calories"), false); 

        logSpy.restore();
    });
})