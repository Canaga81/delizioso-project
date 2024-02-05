// import { useState } from "react";
// import Customer_1_image from "../../Images/Customer_1.png";
// import Customer_2_image from "../../Images/Customer_2.png";
// import Customer_3_image from "../../Images/Customer_3.png";
// import Customer_4_image from "../../Images/Customer_4.png";
// import Customer_5_image from "../../Images/Customer_5.png";
// import Customer_6_image from "../../Images/Customer_6.png";
// import Customer_7_image from "../../Images/Customer_7.png";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Autoplay } from "swiper/modules";

import "./style.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Customers = () => {
  // const [index, setIndex] = useState(0);

  // const img = [
  //   Customer_1_image,
  //   Customer_2_image,
  //   Customer_3_image,
  //   Customer_4_image,
  //   Customer_5_image,
  //   Customer_6_image,
  //   Customer_7_image,
  // ];

  return (
    <div className="w-full h-full mb-60">
      <div className="container mx-auto">
        <div className="flex flex-col gap-14 items-center">
          <div className="text-[#311F09] font-primary lg:text-[60px] text-[35px] font-normal text-center">
            Our customers say
          </div>
          {/* <div>
            <div className="slider-content">
              {img.map((item, i) => {
                index === i && (
                  <img
                    src={item}
                    className="w-[200px] h-[200px] rounded-full"
                    alt=""
                  />
                );
              })}
            </div>
            <div className="swiper-content">
              <Swiper
                loop={true}
                modules={[EffectCoverflow, Autoplay]}
                // autoplay={{ delay: 1000 }}
                effect={"coverflow"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 10,
                  depth: -30,
                  modifier: 1,
                  slideShadows: false,
                }}
              >
                <SwiperSlide>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Facilisis ultricies at eleifend proin. Congue nibh nulla
                    malesuada ultricies nec quam
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Facilisis ultricies at eleifend proin. Congue nibh nulla
                    malesuada ultricies nec quam
                  </p>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="justyfy">
              <Swiper
                loop={true}
                effect={"coverflow"}
                initialSlide={0}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={5}
                //  spaceBetween={20}
                onSlideChange={(e) => {
                  setIndex(e.realIndex);
                }}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 10,
                  depth: -30,
                  modifier: 1,
                  scale: 0.8,
                }}
                pagination={true}
                modules={[EffectCoverflow, Autoplay]}
                autoplay={{ delay: 1000 }}
                className="mySwiper"
              >
                {img.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className="slider-img"
                      style={{ height: "150px" }}
                      src={item}
                      alt="json"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Customers;
