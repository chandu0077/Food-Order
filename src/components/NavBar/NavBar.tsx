"use client";
import { LuIndianRupee } from "react-icons/lu";
import { IoCloseCircleSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { foodcontext } from "@/store/foodContext";

const NavBar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [finalOrderData, setFinalOrderData] = useState<any>();

  const foodCtx = useContext(foodcontext);

  const OpenModal = () => {
    if (finalOrderData && finalOrderData.orderDetails.length) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    const ordersData = foodCtx.orders;
    const foodItemsData = foodCtx.availableFoodItems;
    const res = [];
    for (let order of ordersData) {
      for (let foodItem of foodItemsData) {
        if (order.itemId === foodItem.id) {
          const temp = {
            title: foodItem.title,
            price: foodItem.price,
            quantity: order.quantity,
            amount: foodItem.price * order.quantity,
          };
          res.push(temp);
        }
      }
    }

    const finalOrder = {
      orderDetails: res,
      orderPrice: res.reduce((x, el) => (x += el.amount), 0),
      gst: 18,
      deliveryFee: 20,
    };
    setFinalOrderData(finalOrder);
  }, [foodCtx.orders, foodCtx.availableFoodItems]);

  return (
    <>
      <div
        className="flex justify-between items-center w-full h-[72px] p-4 bg-white"
        style={{ boxShadow: "0 15px 40px -20px rgba(40,44,63,.15)" }}
      >
        <p className="text-[16px] xl:text-[32px] text-black">Food Order Restaurant</p>
        <button
          className="bg-black text-white rounded-md xl:rounded-md text-[12px] xl:text-[18px] p-2 "
          onClick={OpenModal}
        >
          Add to Cart
        </button>

        {modalVisible && (
          <div className="w-screen h-screen overflow-auto fixed top-0 left-0 z-[10]">
            <div className="w-screen h-screen absolute top-0 left-0 opacity-80 bg-black"></div>
            <div className="flex flex-col top-[50px] xl:overflow-auto items-center xl:flex-row xl:items-center w-full xl:w-[60%] leading-6 bg-[#f0f0f5]  p-[34px] rounded-xl h-auto mx-auto relative">
              <div className="w-full h-[550px] overflow-y-scroll">
                {finalOrderData.orderDetails.length > 0 &&
                  finalOrderData.orderDetails.map(
                    (fooditem: any, idx: number) => {
                      return (
                        <div key={idx}>
                          <div className="flex items-center justify-between">
                            <p className="text-black text-[18px] xl:text-[26px]  mt-[24px] font-medium">
                              {fooditem.title}
                            </p>
                          </div>
                          <div className="w-full h-auto   rounded-xl p-6 bg-white mt-[28px]">
                            <div className="flex justify-between items-center border-b-2 mt-[12px] border-slate-500">
                              <div className="flex items-center gap-x-2 mb-[24px] ">
                                <div className="flex items-center">
                                  <LuIndianRupee size={20} />
                                  <p className="text-black font-bold text-[18px] lg:text-[26px]">
                                    {fooditem.price}
                                  </p>
                                </div>
                                <div className="flex items-center ms-[24px] border-2 p-[1px] border-slate-400">
                                  <IoClose size={20} />
                                  <p className="text-black font-bold text-[14px] xl:text-[18px]">
                                    {fooditem.quantity}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center mb-[24px]">
                                <LuIndianRupee size={20} />
                                <p className="text-[18px] xl:text-[24px] font-bold text-black">
                                  {fooditem.amount}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    },
                  )}
                <div className="w-full h-auto mt-[32px] p-6 bg-white rounded-2xl">
                  <div className="flex items-center justify-between">
                    <p className="text-[18px] xl:text-[24px] text-black">Total amount:</p>
                    <div className="flex items-center">
                      <LuIndianRupee size={20} />
                      <p className="text-[24px] text-black">
                        {" "}
                        {finalOrderData.orderPrice}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mt-[12px] justify-between">
                    <p className="text-[18px] xl:text-[24px] text-black mt-[8px]">GST:</p>
                    <div className="flex items-center">
                      <LuIndianRupee size={20} />
                      <p className="text-[18px] xl:text-[24px] text-black">
                        {" "}
                        {finalOrderData.gst}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-[8px]">
                    <p className="text-[18px] xl:text-[24px] text-black mt-[12px]">
                      Delivery Charge:
                    </p>
                    <div className="flex items-center">
                      <LuIndianRupee size={20} />
                      <p className="text-[18px] xl:text-[24px] text-black">
                        {" "}
                        {finalOrderData.deliveryFee}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-[8px]">
                    <p className="text-[18px] xl:text-[24px] text-black mt-[12px]">
                      Final Amount:
                    </p>
                    <div className="flex items-center">
                      <LuIndianRupee size={20} />
                      <p className="text-[18px] xl:text-[24px] text-black">
                        {finalOrderData.orderPrice +
                          finalOrderData.gst +
                          finalOrderData.deliveryFee}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  style={{ float: "right" }}
                  className="flex items-center mb-[14px] gap-x-2 mb-[14px] mt-[38px]"
                >
                  <button
                    onClick={() => closeModal()}
                    className="bg-red-400  rounded-md text-[18px] xl:text-[24px]  p-3 text-white"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {}}
                    className="bg-green-400  rounded-md text-[18px] xl:text-[24px]  p-3 text-white"
                  >
                    Order
                  </button>
                </div>
              </div>
              <div
                className="absolute top-[20px] right-[20px]"
                onClick={() => closeModal()}
              >
                <IoCloseCircleSharp
                  color="black"
                  size={28}
                  cursor={"pointer"}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default NavBar;
