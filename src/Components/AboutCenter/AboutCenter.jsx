import React from "react";
import About_Image_2 from "../../Images/about_image_2.png";

const AboutCenter = () => {
  return (
    <div className="w-full h-full lg:py-36 py-12">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-y-10 flex-wrap">
          <div className="mx-auto">
            <p className="max-w-[420px] tracking-[1.5] lg:text-[20px] text-[14px] md:text-[16px] leading-[1.75]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
          </div>

          <div className="md:block hidden mx-auto">
            <div className="p-[70px] bg-[#D0CCC7] rounded-full">
              <img
                className="cursor-pointer hover:rotate-180 transition duration-1000"
                src={About_Image_2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCenter;