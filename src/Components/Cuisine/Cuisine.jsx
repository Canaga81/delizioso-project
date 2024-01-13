import React from "react";
import { Link } from "react-router-dom";
import Left_Leaf_Image from '../../Images/left_leaf_image.png';
import Right_Leaf_Image from '../../Images/right_leaf_image.png';
import Pasta_Big_Home_Image from '../../Images/pasta_big_home_image.png';

const Cuisine = () => {
  return (
    <div className="w-full h-full mt-28 mb-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-5">
              <div className="w-[132px] h-[34px] flex items-center justify-center bg-[#FF8A00] bg-opacity-20 rounded-[126px]">
                <p className="text-[#FF8A00] text-[15px] font-primary font-[400]">
                  Restauran
                </p>
              </div>

              <div className="flex flex-col gap-[30px]">
                <h1 className="max-w-[288px] text-[75px] font-primary text-[#311F09] font-[700]">
                  Italian Cuisine
                </h1>
                <p className="text-[20px] text-[#5C4529] font-[400] font-primary max-w-[523px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sodales senectus dictum arcu sit tristique donec eget.
                </p>
              </div>
            </div>
            <div className="lg:flex lg:gap-6">
              <Link to={"/orderOnline"}>
                <button className="mb-6 w-[200px] h-[60px] flex items-center justify-center rounded-[163px] border-none outline-none font-primary text-white text-[20px] font-[600] hover:bg-opacity-75 transition-all duration-200 bg-[#FF8A00]">
                  Order now
                </button>
              </Link>

              <Link to={"/reservation"}>
                <button className="w-[200px] h-[60px] flex items-center justify-center rounded-[163px] border-none outline-none font-primary text-white text-[20px] font-[600] hover:bg-opacity-75 transition-all duration-200 bg-[#3FA72F]">
                  Reservation
                </button>
              </Link>
            </div>
          </div>
          <div>
            <div className="relative hover:scale-105 transition-all duration-300">
              <img className="absolute cursor-pointer" src={Left_Leaf_Image} alt="" />
              <img className="relative cursor-pointer z-30" src={Pasta_Big_Home_Image} alt="" />
              <img className="absolute cursor-pointer bottom-0 right-0" src={Right_Leaf_Image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cuisine;
