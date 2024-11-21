"use client"; // This is a client component 👈🏽
import { LuIndianRupee } from "react-icons/lu";
import { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { foodItem } from "@/interfaces/food.interface";
import { foodcontext } from "@/store/foodContext";

const FoodItems = () => {
  const foodCtx = useContext(foodcontext);

  return (
    <>
      <div className="w-full h-[550px] bg-white mt-[32px] rounded-xl p-6">
        {foodCtx.availableFoodItems &&
          foodCtx.availableFoodItems.map((item: foodItem, idx) => {
            return (
              <div
                key={item.id}
                className="w-full flex flex-col-reverse xl:flex-row h-auto border-b-4 border-slate-400 mt-[26px]"
              >
                <div className="w-full xl:w-3/4 mb-[12px]">
                  <p className="font-bold text-black text-[16px] xl:text-[20px]">
                    {item.title}
                  </p>
                  <div className="flex justify-start items-center gap-x-2 mt-[16px]">
                    <LuIndianRupee size={20} />
                    <p className="text-black font-bold text-[16px] xl:text-[18px]">
                      {item.price}
                    </p>
                  </div>
                  <div className="flex justify-start items-center gap-x-2 mt-[12px]">
                    <FaStar size={20} color="green" />
                    <p className="text-green-800 text-[16px] xl:text-[18px]">{item.rating}</p>
                  </div>
                  <p className="text-[#02060c99] text-[14px] xl:text-[16px] font-semibold mt-[18px]">
                    {item.description}
                  </p>
                </div>
                <div className="w-full xl:w-1/4 mb-[22px]">
                  <div className="flex justify-center">
                    <Image
                      className="rounded-xl"
                      src={item.image}
                      alt="pizza"
                      objectFit="contain"
                      width={156}
                      height={144}
                    />
                  </div>
                  <div className="flex items-center gap-x-4">
                    {foodCtx.getInputValue(item.id) ? (
                      <div className="flex items-center gap-x-4 mt-[22px]">
                        <p className="text-black text-[18px]">Items count :</p>
                        <input
                          type="number"
                          defaultValue={""}
                          value={foodCtx.getInputValue(item.id)}
                          className="rounded-md text-center w-[76px] border-2 border-slate-400"
                          min="0"
                          max="5"
                          onChange={(e) =>
                            foodCtx.handleItemsChange(
                              Number(e.target.value),
                              item.id,
                            )
                          }
                        />
                      </div>
                    ) : (
                      <div className="flex justify-center w-full">
                        <button
                          onClick={() => foodCtx.handleItemsChange(1, item.id)}
                          className="mt-[-12px] w-[65%] bg-red-600 p-1 text-white text-[20px] rounded-2xl"
                        >
                          Add
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default FoodItems;
