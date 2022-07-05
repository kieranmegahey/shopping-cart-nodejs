// Initialise the shopping cart
let shoppingCart = [];

// Function to add products to shoppingCart
export function addToShoppingCart(productName, price, quantity) {
  //take in a product name, price and quantity
  // look through the shopping cart to see if the product already exists
  const foundItem = shoppingCart.find((i) => i.name === productName);
  // If the prouct exists find the index of the product in the shopping cart
  const foundItemIndex = shoppingCart.indexOf(foundItem);
  // if product already exists, slice the shopping cart, slice the product, increase the quantity by 1 add the item back to the shopping cart
  if (foundItem) {
    const newCart = [
      ...shoppingCart.slice(0, foundItemIndex),
      { ...foundItem, quantity: foundItem.quantity + 1 },
      ...shoppingCart.slice(foundItemIndex + 1),
    ];

    shoppingCart = newCart;
  } else {
    // Else if the product doesn't exist, push it to the shopping cart
    return shoppingCart.push({
      name: productName,
      price: price,
      quantity: quantity,
    });
  }

  return shoppingCart;
}

// Function to remove item from shoppingCart
export function removeFromShoppingCart2(itemName) {
  //take in the name of the item to be removed and search through the shopping car to find the product
  const foundItem = shoppingCart.find((i) => i.name === itemName);
  //find the index of the found product
  const foundItemIndex = shoppingCart.indexOf(foundItem);
  // if the item is found and the quantity is less than or equal to 1, remove the item from the shopping cart using splice method
  if (foundItem && foundItem.quantity <= 1) {
    shoppingCart.splice(foundItemIndex, 1);
  } else {
    // if the product has a quantity higher than 1, spread the shopping cart and slice it before and after the product while reinserting the product with the 1 less quantity.
    const newCart = [
      ...shoppingCart.slice(0, foundItemIndex),
      { ...foundItem, quantity: foundItem.quantity - 1 },
      ...shoppingCart.slice(foundItemIndex + 1),
    ];
    shoppingCart = newCart;
    return shoppingCart;
  }
}

// Function to total the price of all items in shoppingCart
export function totalShoppingCart() {
  if (shoppingCart) {
    // if there are items in the shopping cart use the reduce method to calculate the total. Make sure to multiply the price by quantity before adding to the accumulator. (initial value = 0)
    let productTotal = shoppingCart.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);
    const finalPrice = productTotal.toFixed(2);
    // reset the shopping cart back to empty to start a new user journey
    shoppingCart = [];
    return `Total Price = $${finalPrice}`;
    //if no products return message that cart is empty
  } else {
    console.log("shopping cart empty");
  }
}
