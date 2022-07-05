import assertImport from "assert";
const assert = assertImport.strict;
import {
  addToShoppingCart,
  totalShoppingCart,
  removeFromShoppingCart2,
} from "./index.js";

// TEST 1 -- Create a ShoppingCart, then add 2 "Apple" Products for $4.95 each and 1 "Orange" Product for $3.99, and check that the ShoppingCart total price is correct.
describe("testing add, remove and total functionality of a shopping cart", function () {
  it("should add 2 apples and 1 orange to a cart with the total equaling 13.89", function () {
    const expected = "Total Price = $13.89";

    const testJourney1 = () => {
      //Shopping cart initialised in index.js
      // Add 2 apples at 4.95 each
      addToShoppingCart("apple", 4.95, 2);
      // add 1 orange at 3.99 each
      addToShoppingCart("orange", 3.99, 1);
      //run function to total cart
      const total = totalShoppingCart();
      return total;
    };
    let actual = testJourney1();
    assert.equal(actual, expected);
  });
  // TEST 2 -- Create a ShoppingCart and add 3 "Apple" products, then remove 1 "Apple" product, and check that total price is correct.
  it("should add 3 apples and then remove 1 apple, then check the total price for the remaining 2 apples", function () {
    const expected = "Total Price = $9.90";
    const testJourney2 = () => {
      //Shopping cart initialised in index.js
      // Add 3 apples at 4.95 each
      addToShoppingCart("apple", 4.95, 3);
      // Remove 1 apple
      removeFromShoppingCart2("apple");
      //run function to total cart
      const total = totalShoppingCart();
      return total;
    };
    let actual = testJourney2();
    assert.equal(actual, expected);
  });
});
