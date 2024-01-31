import React from "react";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-full bg-[#311F09] lg:py-40 py-20 mt-40">
      <div className="container mx-auto">
        <div className="flex items-start justify-between flex-wrap gap-y-12">
          <div className="flex flex-col gap-11">
            <div className="flex items-center gap-[18px]">
              <div className="w-[51px] h-[51px] flex justify-center items-center font-primary text-white text-[25px] font-bold bg-[#FF8A00] rounded-full">
                D
              </div>
              <div>
                <h3 className="text-[#fff] text-[14px] font-primary">
                  Delizi
                  <span className="text-[#FF8A00] font-primary text-[14px] font-[600]">
                    oso
                  </span>
                </h3>
              </div>
            </div>

            <div className="max-w-[280px]">
                <p className="font-primary text-[#fff] tracking-[1.5px]">
                    Viverra gravida morbi egestas facilisis 
                    tortor netus non duis tempor. 
                </p>
            </div>

            <div className="flex items-center gap-7">
                <div className="w-[45px] h-[45px] cursor-pointer flex justify-center items-center bg-[#E3E2E0] rounded-full transition duration-150 hover:bg-[#fff]">
                    <FaTwitter />
                </div>
                <div className="w-[45px] h-[45px] cursor-pointer flex justify-center items-center bg-[#E3E2E0] rounded-full transition duration-150 hover:bg-[#fff]">
                    <FaInstagram />
                </div>
                <div className="w-[45px] h-[45px] cursor-pointer flex justify-center items-center bg-[#E3E2E0] rounded-full transition duration-150 hover:bg-[#fff]">
                    <FaFacebookF />
                </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
                <h4 className="text-[#FF8A00] text-[20px] tracking-[1.2px]">Page</h4>
            </div>
            <div className="flex flex-col gap-4">
                <Link className="text-[14px] tracking-[1.2px] text-white hover:text-[#FF8A00] transition duration-150" to={'/'} >
                    Home
                </Link>
                <Link className="text-[14px] tracking-[1.2px] text-white hover:text-[#FF8A00] transition duration-150" to={'/menu'} >
                    Menu
                </Link>
                <Link className="text-[14px] tracking-[1.2px] text-white hover:text-[#FF8A00] transition duration-150" to={'/orderOnline'} >
                    Order online
                </Link>
                <Link className="text-[14px] tracking-[1.2px] text-white hover:text-[#FF8A00] transition duration-150" to={'/'} >
                    Catering
                </Link>
                <Link className="text-[14px] tracking-[1.2px] text-white hover:text-[#FF8A00] transition duration-150" to={'/reservation'} >
                    Reservation
                </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
                <h4 className="text-[#FF8A00] text-[20px] tracking-[1.2px]">Information</h4>
            </div>
            <div className="flex flex-col gap-4">
                <Link className="text-[14px] tracking-[1.2px] text-white hover:text-[#FF8A00] transition duration-150" to={'/aboutUs'} >
                    About us
                </Link>
                <Link className="text-[14px] tracking-[1.2px] text-white hover:text-[#FF8A00] transition duration-150" to={'/'} >
                    Testimonial
                </Link>
                <Link className="text-[14px] tracking-[1.2px] text-white hover:text-[#FF8A00] transition duration-150" to={'/'} >
                    Event
                </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
                <h4 className="text-[#FF8A00] text-[20px] tracking-[1.2px]">Get in touch</h4>
            </div>
            <div className="flex flex-col gap-4">
                <Link className="max-w-[260px] text-[14px] tracking-[1.2px] text-white hover:text-[#FF8A00] transition duration-150" to={'/'} >
                    3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat
                </Link>
                <Link className="text-[14px] tracking-[1.2px] text-white hover:text-[#FF8A00] transition duration-150" to={'/'} >
                    delizioso@gmail.com
                </Link>
                <Link className="text-[14px] tracking-[1.2px] text-white hover:text-[#FF8A00] transition duration-150" to={'/'} >
                    +123 4567 8901
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
