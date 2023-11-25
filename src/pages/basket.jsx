import  { useContext } from "react";
import Navbar from "../components/navbar";
import StoreContext from "../context/storeContext";

export default function Basket() {
  const { state, removeFromCart } = useContext(StoreContext);

  // Create a Map to store unique items and their quantities
  const uniqueItems = new Map();

  // Populate the Map with items from the cart
  state.cart.forEach((item) => {
    const existingItem = uniqueItems.get(item.id);

    if (existingItem) {
      // If item already exists, update quantity
      uniqueItems.set(item.id, { ...item, quantity: existingItem.quantity + 1 });
    } else {
      // If item doesn't exist, add it with quantity 1
      uniqueItems.set(item.id, { ...item, quantity: 1 });
    }
  });

  return (
    <>
      <div className="flex">
        <Navbar />
      </div>
      <div className="flex flex-row justify-between text-center text-2xl font-semibold px-6 py-10 mt-6">
        <h2>Your cart</h2>
        <ul>
          {/* Display unique items and their quantities */}
          {Array.from(uniqueItems.values()).map((uniqueItem) => (
            <li key={uniqueItem.id}>
              <button onClick={() => removeFromCart(uniqueItem)}>Remove</button>
              {uniqueItem.name} - ${uniqueItem.price} x {uniqueItem.quantity}
            </li>
          ))}
        </ul>
        {/* Calculate and display the total price of all items in the cart */}
        <p>Total: ${state.total.toFixed(2)}</p>
      </div>
    </>
  );
}
