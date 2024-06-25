import {
  addItem,
  calculateTotal,
  deleteItem,
  displayCart,
  removeItem,
} from "./services/cart.js";
import { createItem } from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart.\n");

const item1 = await createItem("hotwheels ferrari", 19.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

await addItem(myCart, item1);
await addItem(myCart, item2);

await removeItem(myCart, item2)
await removeItem(myCart, item2)

await displayCart(myCart);

// await deleteItem(myCart, item1.name)
// await deleteItem(myCart, item2.name)

await calculateTotal(myCart);
