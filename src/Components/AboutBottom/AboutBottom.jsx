import React from 'react';
import About_Image_3 from '../../Images/about_image_3.png';

const AboutBottom = () => {
    return (
        <div className='w-full h-full lg:py-36 py-12'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between gap-y-10 flex-wrap'>
                    <div className='md:block hidden mx-auto'>
                        <div>
                            <img className='cursor-pointer hover:scale-105 transition duration-1000' src={About_Image_3} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-16 mx-auto'>
                        <h1 className='font-primary lg:text-[75px] text-[35px] tracking-[1.5px] text-center'><span className='text-[#FF8A00]'>Owner</span><br />& Executive Chef</h1>
                        <p className='max-w-[420px] tracking-[1.5] lg:text-[20px] text-[14px] md:text-[16px] leading-[1.75]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default AboutBottom