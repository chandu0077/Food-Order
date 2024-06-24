"use client";
import { useState } from "react";
import { MdStarHalf } from "react-icons/md";

// This is a client component 👈🏽
const RestaurantHeader = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div
      className="relative w-full rounded-3xl h-[200px] mt-[24px]"
      style={{
        background:
          "linear-gradient(rgb(255, 255, 255) -6.71%, rgb(235, 235, 242) 56.19%, rgb(223, 223, 231) 106.56%)",
        padding: "0px 16px 16px",
      }}
    >
      <div className="absolute w-[97%] rounded-3xl h-auto bg-white p-[24px]">
        <div className="flex items-center gap-x-2">
          <MdStarHalf color="green" size={26} />
          <p className=" font-bold text-[24px] text-black">3.9</p>
        </div>
        <p className="text-[20px] text-red-700 mt-[16px]">pizzas, Italian</p>
        <p className="text-[16px] text-black font-medium mt-[16px]">
          Gunadala, Vijayawada AndhraPradesh India
        </p>
      </div>
    </div>
  );
};
export default RestaurantHeader;
