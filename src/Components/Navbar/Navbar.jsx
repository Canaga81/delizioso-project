import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { SidebarContext } from "../../Context/SidebarContext";
import { CartContext } from "../../Context/CartContext";

const Navbar = () => {

  const {isOpen, setIsOpen} = useContext(SidebarContext);

  const {itemAmount} = useContext(CartContext)

  const [isNavShowing, setIsNavShowing] = useState(false);

  const showingNav = () => {
    setIsNavShowing((prev) => !prev);
  };

  return (
    <div className="w-full sticky top-0 z-40 bg-[#fff]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-[100px]">
          <div className="flex items-center gap-[18px]">
            <div className="w-[51px] h-[51px] flex justify-center items-center font-primary text-white text-[25px] font-bold bg-[#FF8A00] rounded-full">
              D
            </div>
            <div>
              <h3 className="text-[#311F09] text-[14px] font-primary">
                Delizi
                <span className="text-[#FF8A00] font-primary text-[14px] font-[600]">
                  oso
                </span>
              </h3>
            </div>
          </div>
          <div
            className={`lg:static lg:min-h-fit absolute lg:bg-white bg-red-400 min-h-[60vh] right-0 transition-all z-30 duration-1000 ${
              isNavShowing ? "top-[-100%] translate-y-[45%]" : "top-[100px] lg:translate-y-0  translate-y-[-150%]"
            } lg:w-auto w-full flex items-center px-5`}
          >
            <ul className="flex flex-row lg:gap-x-[20px] items-center w-full justify-between lg:items-center lg:px-0 ">
              <div className="flex lg:flex-row flex-col lg:items-center lg:gap-[25px] gap-10">
                <Link
                  className="lg:text-[#311F09] text-[#fff] font-primary hover:text-[#FF8A00] transition-all delay-150"
                  to={"/"}
                >
                  Home
                </Link>
                <Link
                  className="lg:text-[#311F09] text-[#fff] font-primary hover:text-[#FF8A00] transition-all delay-150"
                  to={"/menu"}
                >
                  Menu
                </Link>
                <Link
                  className="lg:text-[#311F09] text-[#fff] font-primary hover:text-[#FF8A00] transition-all delay-150"
                  to={"/aboutUs"}
                >
                  About us
                </Link>
                <Link
                  className="lg:text-[#311F09] text-[#fff] font-primary hover:text-[#FF8A00] transition-all delay-150"
                  to={"/orderOnline"}
                >
                  Order online
                </Link>
                <Link
                  className="lg:text-[#311F09] text-[#fff] font-primary hover:text-[#FF8A00] transition-all delay-150"
                  to={"/reservation"}
                >
                  Reservation
                </Link>
                <Link
                  className="lg:text-[#311F09] text-[#fff] font-primary hover:text-[#FF8A00] transition-all delay-150"
                  to={"/contactUs"}
                >
                  Contact us
                </Link>
              </div>

              <div>
                <Link to={"login"}>
                  <button className="w-[112px] h-[50px] ml-4 border-none outline-none text-white text-[14px] font-primary bg-[#3FA72F] rounded-[133px] hover:bg-opacity-75 transition-all duration-200">
                    Log in
                  </button>
                </Link>
              </div>
            </ul>
          </div>
          <div className="flex items-center gap-[25px]">
            <div onClick={() =>setIsOpen(!isOpen)} className="relative cursor-pointer">
              <div className="w-[16px] h-[16px] bg-[#FF3838] flex justify-center items-center rounded-full text-[8px] text-white absolute -top-2 -right-2">
                {itemAmount}
              </div>
              <div className="text-[24px]">
                <IoCartOutline />
              </div>
            </div>

            <div className="lg:hidden">
              <button onClick={showingNav}>
                {isNavShowing ? (
                  <IoMdClose className="text-[24px]" />
                  
                ) : (
                  
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="2.75"
                    y="2.75"
                    width="7.5"
                    height="7.5"
                    rx="2.25"
                    stroke="#311F09"
                    stroke-width="1.5"
                  />
                  <rect
                    x="13.75"
                    y="2.75"
                    width="7.5"
                    height="7.5"
                    rx="2.25"
                    stroke="#311F09"
                    stroke-width="1.5"
                  />
                  <rect
                    x="2.75"
                    y="13.75"
                    width="7.5"
                    height="7.5"
                    rx="2.25"
                    stroke="#311F09"
                    stroke-width="1.5"
                  />
                  <rect
                    x="13.75"
                    y="13.75"
                    width="7.5"
                    height="7.5"
                    rx="3.75"
                    stroke="#FF8A00"
                    stroke-width="1.5"
                  />
                </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
