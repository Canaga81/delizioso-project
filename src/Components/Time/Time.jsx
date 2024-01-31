import React from 'react';
import Time_bg_image from '../../Images/Time_bg_image.png';
import { Link } from 'react-router-dom';

const Time = () => {
  return (
    <div className='w-full h-full mt-24'>
        <div className='container mx-auto'>
            <div className='relative flex justify-center'>
                <div>
                    <img className='min-h-[450px]' src={Time_bg_image} alt="" />
                </div>

                <div className='absolute flex flex-col items-center lg:gap-5 gap-2 top-[50%] translate-y-[-50%] text-[#fff]'>
                    <h3 className='lg:text-[70px] md:text-[30px] text-[20px] font-primary tracking-[1.5px]'>we are open from</h3>
                    <h4 className='lg:text-[40px] md:text-[20px] text-[14px] font-primary tracking-[1.5px]'>Monday-Sunday</h4>
                    <div className='flex flex-col gap-3'>
                        <p className='lg:text-[18px] md:text-[14px] text-[12px] font-primary'>Launch : Mon-Sun : 11:00am-02:00pm</p>
                        <p className='lg:text-[18px] md:text-[14px] text-[12px] font-primary'>Dinner : sunday : 04:00pm-08:00pm</p>
                        <p className='lg:text-[18px] md:text-[14px] text-[12px] font-primary flex justify-end'>04:00pm-09:00pm</p>
                    </div>

                    <div className='flex lg:flex-row flex-col items-center lg:gap-6 mt-7'>
                        <Link to={'/orderOnline'}>
                            <button className='mb-6 lg:w-[200px] lg:h-[60px] w-[150px] h-[40px] flex items-center justify-center rounded-[163px] border-none outline-none font-primary text-white text-[14px] lg:text-[20px] font-[600] hover:bg-opacity-75 transition-all duration-200 bg-[#FF8A00]'>Order now</button>
                        </Link>
                        <Link to={'/reservation'}>
                            <button className='mb-6 lg:w-[200px] lg:h-[60px] w-[150px] h-[40px] flex items-center justify-center rounded-[163px] border-none outline-none font-primary text-black text-[14px] lg:text-[20px] font-[600] hover:bg-opacity-75 transition-all duration-200 bg-[#fff]'>Reservation</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Time;