import React, { useContext } from "react";

//! Import Icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import SidebarCartItem from "../SidebarCartItem/SidebarCartItem";

import { SidebarContext } from "../../Context/SidebarContext";

import { CartContext } from "../../Context/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, total, clearCart, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full h-full bg-white fixed top-0 shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-50 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Cart ({itemAmount})</div>
        <div>
          <div
            onClick={() => handleClose()}
            className="cursor-pointer w-8 h-8 flex justify-center items-center"
          >
            <IoMdArrowForward className="text-2xl" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-2 h-[520px]  overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <SidebarCartItem item={item} key={item.id} />;
        })}
      </div>

      <div className="flex flex-col gap-y-3 py-5 mt-0">
        <div className="flex justify-between items-center">
          {/* Total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>

          {/* Clear Cart Icon */}
          <div
            onClick={() => clearCart()}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl rounded-md hover:bg-opacity-80 transition duration-300"
          >
            <FiTrash2 />
          </div>
        </div>

        <div>
          <button className="bg-[#3FC66E] text-[#fff] text-[20px] tracking-[1.5px] rounded-[15px] w-[200px] h-[45px] hover:bg-opacity-80 transition duration-300">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
