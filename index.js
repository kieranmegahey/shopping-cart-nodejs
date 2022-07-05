// Initialising the shopping cart
let shoppingCart = [];

// Function to add products to shoppingCart
export function addToShoppingCart(productName, price, quantity) {
  //take in a product name, price and quantity
  // look through the shopping cart to see if the product already exists
  const foundItem = shoppingCart.find((i) => i.name === productName);
  // If the prouct exists find the index of the product in the shopping cart
  const foundItemIndex = shoppingCart.indexOf(foundItem);
  // if product already exists, slice the shopping cart, add the item back to the shopping cart and increase the quantity by 1
  if (foundItem) {
    const newCart = [
      ...shoppingCart.slice(0, foundItemIndex),
      { ...foundItem, quantity: foundItem.quantity + 1 },
      ...shoppingCart.slice(foundItemIndex + 1),
    ];

    shoppingCart = newCart;
  } else {
    // If the product doesn't exist, push it to the shopping cart
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
  const foundItem = shoppingCart.find((i) => i.name === itemName);
  const foundItemIndex = shoppingCart.indexOf(foundItem);
  if (foundItem && foundItem.quantity <= 1) {
    shoppingCart.splice(foundItemIndex, 1);
  } else {
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
    let productTotal = shoppingCart.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);
    const finalPrice = productTotal.toFixed(2);
    shoppingCart = [];
    return `Total Price = $${finalPrice}`;
  } else {
    console.log("shopping cart empty");
  }
}
