import React from 'react';
import Small_Reserve_Image_1 from '../../Images/reserve_image_2.png';
import Small_Reserve_Image_2 from '../../Images/reserve_image_1.png';
import Big_Reserve_Image from '../../Images/reserve_big_image.png';
import { Link } from 'react-router-dom';

const Reserve = () => {
  return (
    <div className='w-full h-full mb-28 mt-32'>
      <div className='container mx-auto'>
        <div className='flex flex-col-reverse items-center gap-16 lg:flex-row lg:items-center lg:justify-between'>
          <div className='relative lg:block hidden'>
            <div className='py-16 px-16 bg-transparent border rounded-full flex items-center justify-center'>
              <img className='lg:block lg:absolute lg:top-16 lg:right-6 lg:hover:-rotate-180 lg:transition lg:duration-1000 lg:cursor-pointer hidden' src={Small_Reserve_Image_1} alt="" />
              <div className='py-16 px-16 rounded-full bg-[#E1C39F] flex justify-center items-center bg-opacity-20'>
                <img className='hover:rotate-180 transition duration-1000 cursor-pointer' src={Big_Reserve_Image} alt="" />
              </div>
              <img className='lg:block lg:absolute lg:bottom-16 lg:left-6 lg:hover:-rotate-180 lg:transition lg:duration-1000 lg:cursor-pointer hidden' src={Small_Reserve_Image_2} alt="" />
            </div>
          </div>
          <div className='flex flex-col lg:gap-[132px] gap-8'>
            <div className='flex flex-col gap-12'>
              <div className='lg:text-[75px] text-[30px] font-primary font-[600]'>
                <h1 className='text-[#311F09]'>Let's reserve <br /> <span className='text-[#FF8A00]'>a table</span></h1>
              </div>
              <div>
                <p className='max-w-[433px] text-[#5C4529] font-primary lg:text-[18px] text-[14px] font-[400] tracking-[1.5px]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Facilisis ultricies at eleifend proin. 
                  Congue nibh nulla malesuada ultricies nec quam 
                </p>
              </div>
            </div>
            <div>
              <Link to={'/reservation'}>
                <button className='text-white lg:text-[18px] text-[14px] font-primary font-normal tracking-[1.5px] bg-[#FF8A00] w-[200px] h-[60px] flex items-center justify-center rounded-[163px] border-none outline-none hover:bg-opacity-75 transition-all duration-200'>Reservation</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reserve