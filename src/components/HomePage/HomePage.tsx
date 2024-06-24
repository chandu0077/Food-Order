"use client"; // This is a client component 👈🏽
import NavBar from "../NavBar/NavBar";
import React, { useEffect, useState } from "react";
import MenuItems from "../MenuItems/MenuItems";

interface Props {}
const HomePage: React.FC<Props> = ({}) => {
  return (
    <div>
      <NavBar />
      <MenuItems />
    </div>
  );
};
export default HomePage;
