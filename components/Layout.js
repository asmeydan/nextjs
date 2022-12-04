import React from "react";
import Navigation from "./Navigation";

const layout = ({ children }) => {
  return (
    <div className=" min-h-screen flex flex-col">
      <Navigation className=" flex-none"/>
      <main className=" flex-1 flex justify-center items-center">
        {children}
      </main>
      <footer className="  bottom-0 flex justify-center items-center w-full">design by asm</footer>
    </div>
  );
};

export default layout;
