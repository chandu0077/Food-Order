"use client"; // This is a client component 👈🏽
import FoodItems from "./FoodItems/FoodItems";
import RestaurantHeader from "../RestaurantHeader/RestaurantHeader";

const MenuItems = () => {
  return (
    <>
      <div className="w-[60%] mx-auto h-[650px] p-4 mt-[24px] ">
        <p className="text-black font-bold text-[42px]">Dominos Pizza</p>
        <RestaurantHeader />
        <FoodItems />
      </div>
    </>
  );
};
export default MenuItems;
