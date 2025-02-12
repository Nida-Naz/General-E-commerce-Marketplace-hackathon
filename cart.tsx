"use client";

import { useState } from "react";
import { ShoppingCartIcon, TrashIcon } from "@heroicons/react/24/outline";

type Item = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const initialItems: Item[] = [
  { id: 1, name: "Laptop", price: 1000, quantity: 1 },
  { id: 2, name: "Phone", price: 500, quantity: 1 },
];

export default function Cart() {
  const [cart, setCart] = useState<Item[]>(initialItems);

  const increaseQty = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-lg mx-auto p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <ShoppingCartIcon className="h-6 w-6 text-blue-500" />
        Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 mt-4">Your cart is empty.</p>
      ) : (
        <ul className="mt-4 space-y-3">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center p-2 border rounded-lg">
              <span>{item.name}</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-2 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-2 bg-gray-200 rounded"
                >
                  +
                </button>
                <button onClick={() => removeItem(item.id)} className="text-red-500">
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 text-lg font-bold">Total: ${totalPrice}</div>
    </div>
  );
}
