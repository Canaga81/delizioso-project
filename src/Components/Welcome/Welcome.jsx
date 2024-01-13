import React from 'react';
import Welcome_Image from '../../Images/welcome_image.png';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className='w-full h-full mb-28'>
        <div className='container mx-auto'>
            <div className='flex flex-col-reverse items-center gap-16 lg:flex-row lg:items-center lg:justify-between'>
                <div>
                    <div>
                        <img className='cursor-pointer hover:scale-105 transition-all duration-300' src={Welcome_Image} alt="" />
                    </div>
                </div>
                <div className='flex flex-col gap-[122px]'>
                    <div className='flex flex-col gap-[60px]'>
                        <h2 className='text-[35px] lg:text-[75px] font-primary text-[#311F09] font-[700] '>Welcome to <br /><span>delizioso</span></h2>
                        <p className='text-[15px] lg:text-[20px] text-[#5C4529] font-[400] font-primary max-w-[523px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Facilisis ultricies at eleifend proin. 
                            Congue nibh nulla malesuada ultricies nec quam 
                        </p>
                    </div>
                    <div>
                        <Link to={'/menu'} >
                            <button className="mb-6 w-[200px] h-[60px] flex items-center justify-center rounded-[163px] border-none outline-none font-primary text-white text-[14px] lg:text-[20px] font-[600] hover:bg-opacity-75 transition-all duration-200 bg-[#FF8A00]">See our menu</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Welcome;