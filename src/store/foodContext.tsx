"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from "react";
import { Order } from "@/interfaces/orders.interface";
import { foodItem } from "@/interfaces/food.interface";
interface IContextProps {
  availableFoodItems: foodItem[];
  handleItemsChange: (quantity: number, itemId: number) => void;
  getInputValue: (itemId: number) => number;
  orders: Order[];
}

export const foodcontext = React.createContext({} as IContextProps);

const FOOD_ITEMS = [
  {
    id: 1,
    title: "Chicken keema & Onion with Desi Makhani Sauce",
    price: 149,
    rating: 4.2,
    description:
      "Authentic Indian Flavour of Makhani Sauce loaded with meaty chicken keema and crunchy Onion",
    image: "/img/chicken-kema.png",
  },
  {
    id: 2,
    title: "Chicken Pepperoni Stuffed Garlic Bread",
    price: 189,
    rating: 3.8,
    description:
      "Freshly Baked Garlic Bread stuffed with Delectable Chicken Pepperoni, Cheese and sprinkled with Basil Parsley",
    image: "/img/pepparoni.jpeg",
  },
  {
    id: 3,
    title: "Chicken Dominator Pizza",
    price: 669,
    rating: 3.9,
    description:
      "Loaded with double pepper barbecue chicken, peri-peri chicken, chicken tikka & grilled chicken rashers.",
    image: "/img/dominator.jpg",
  },
  {
    id: 4,
    title: "Non Veg Supreme Pizza",
    price: 669,
    rating: 3.1,
    description:
      "Supreme combination of black olives, onion, capsicum, grilled mushroom, pepper barbecue chicken, peri-peri chicken & grilled chicken rashers",
    image: "/img/supreme.jpg",
  },
  {
    id: 5,
    title: "Pepper Barbecue Chicken Pizza",
    price: 469,
    rating: 3.9,
    description:
      "Pepper barbecue chicken for that extra zing. Available in Cheese Burst, Wheat Thin Crust and Pan Crust options.",
    image: "/img/barbequee.jpg",
  },
];

const FoodContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const handleItemsChange = (quantity: number, itemId: number) => {
    // case 1:
    // empty orders

    // case 2:
    // order exists, find the item from orders & update the quantity

    // case 3:
    // if quantity is 0, remove the order from orders.

    // Check if the item is existing item.
    let orderExists = false;
    for (let order of orders) {
      if (order.itemId === itemId) {
        orderExists = true;
      }
    }

    if (!orderExists) {
      const order = {
        itemId: itemId,
        quantity: quantity,
      };
      setOrders([...orders, order]);
    } else {
      // case 1: quantity is not zero
      // find the existing item & update it's quantity.
      if (quantity) {
        const updatedOrders = orders.map((order) => {
          if (order.itemId === itemId) {
            return {
              ...order,
              quantity: quantity,
            };
          }
          return order;
        });
        setOrders([...updatedOrders]);
      } else {
        // case 2: quantity is zero
        // find the existing item & filter it out of the orders.
        const updatedOrders = orders.filter((order) => order.itemId !== itemId);
        setOrders([...updatedOrders]);
      }
    }
  };

  const getInputValue = (itemId: number) => {
    if (orders) {
      let val = 0;
      for (let order of orders) {
        if (order.itemId === itemId) {
          val = order.quantity;
        }
      }
      return val;
    }
    return 0;
  };

  return (
    <foodcontext.Provider
      value={{
        availableFoodItems: FOOD_ITEMS,
        orders: orders,
        handleItemsChange: handleItemsChange,
        getInputValue: getInputValue,
      }}
    >
      {children}
    </foodcontext.Provider>
  );
};

export default FoodContextProvider;
