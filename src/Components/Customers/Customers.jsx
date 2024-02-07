import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import imagesTextData from "../../ImagesTextData";

const Customers = () => {
  const [selectedImg, setSelectedImg] = useState(imagesTextData[0]);

  return (
    <div className="w-full h-full pt-52 pb-52 mb-60 bg-[#D0CCC7] bg-opacity-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-14 items-center">
          <div className="text-[#311F09] font-primary lg:text-[60px] text-[35px] font-normal text-center">
            Our customers say
          </div>
          <div className="flex flex-col gap-24">
            <div className="flex flex-col items-center gap-16">
              <img
                className="sm:w-[200px] sm:h-[200px] w-[160px] h-[160px] cursor-pointer"
                src={selectedImg}
                alt="Selected"
              />
              <p className="max-w-[500px] text-center font-primary lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-[#5C4529] tracking-[1.5px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis ultricies at eleifend proin. Congue nibh nulla
                malesuada ultricies nec quam
              </p>
            </div>
            <div className="flex justify-center gap-6 flex-wrap items-center">
              {imagesTextData.map((item, idx) => {
                return (
                  <div
                    className="sm:w-[150px] sm:h-[150px] w-[120px] h-[120px]"
                    key={idx}
                  >
                    <img
                      className="w-full h-full cursor-pointer object-contain hover:bg-[#FF8A00] hover:scale-105 rounded-full p-3 transition duration-200"
                      src={item.image}
                      alt="images"
                      onClick={() => setSelectedImg(item.image)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
