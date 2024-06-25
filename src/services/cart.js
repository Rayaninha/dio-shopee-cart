export async function addItem(userCart, item) {
  userCart.push(item);
}

export async function calculateTotal(userCart) {
  const total = userCart.reduce((total, item) => total + item.subTotal(), 0);

  console.log(`\nShopee Cart total is: ${total}`);
}

export async function deleteItem(userCart, itemName) {
  const index = userCart.findIndex((item) => item.name === itemName);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

export async function removeItem(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  if (indexFound == -1) {
    console.log("Item não encotrado.");
  }

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    return
  }

  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return
  }
}

export async function displayCart(userCart) {
  console.log("Shopee cart list:\n");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      }x | Subtotal ${item.subTotal()}`
    );
  });
}
