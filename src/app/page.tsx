"use client";
import React, { useEffect } from "react";
import axios from "axios";
import Head from "next/head";
import HomePage from "@/components/HomePage/HomePage";
// import { OrderContextProvider } from "./store/orderContext";
import FoodContextProvider from "../store/foodContext";

interface Props {}
const Home: React.FC<Props> = ({}) => {
  return (
    // /* // @ts-ignore */
    <FoodContextProvider>
      <HomePage />
    </FoodContextProvider>
  );
};

export default Home;
