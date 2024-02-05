import React from 'react'
import { FaCircleChevronLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const CheckOut = () => {
  return (
    <div className='w-full h-full'>
        <div className='container mx-auto'>
            <div className='flex items-center justify-between mb-32 mt-32'>
                <Link to={'/'}>
                    <FaCircleChevronLeft className='lg:w-[30px] w-[20px] lg:h-[30px] h-[20px] transition duration-200 hover:opacity-80' />
                </Link>
                <h1 className='mx-auto lg:text-[70px] md:text-[45px] text-[30px] font-primary tracking-[1.5px]'>Checkout</h1>
            </div>
            <div>
                <form>
                    <div className='flex flex-col gap-7'>
                        <p className='lg:text-[25px] md:text-[20px] text-[16px] tracking-[1.5px] font-primary text-black'>Shipping address</p>
                        <div className='flex flex-col sm:flex-row gap-y-6 sm:items-center gap-6'>
                            <input className='lg:h-[70px] md:h-[50px] h-[40px] lg:w-[800px] md:w-[500px] w-[200px] bg-[#D0CCC7] bg-opacity-20 pl-10 text-[#311F09] border-none outline-none rounded-[6px]' type="text" placeholder='Address' />
                            <button className='lg:w-[180px] md:w-[140px] w-[100px] lg:h-[70px] md:h-[50px] h-[40px] bg-[#749FE0] text-white rounded-[20px] lg:text-[20px] md:text-[16px] text-[14px] tracking-[1.5px] hover:bg-opacity-75 transition duration-200'>Change</button>
                        </div>
                    </div>
                    <div>

                    </div>
                </form>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default CheckOut