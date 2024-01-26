import React from 'react'
import chefData from '../../ChefData'

const Chef = () => {

  return (
    <div className='w-full h-full mb-28 mt-28'>
        <div className='container mx-auto flex flex-col gap-[150px] items-center'>
            <div className='flex items-center justify-center gap-[40px] flex-wrap'>
                {
                    chefData.map((item, idx) => {
                        return (
                            <div key={idx} className='flex flex-col gap-10 gap-y-10 hover:scale-105 transition duration-300 cursor-pointer'>
                                <div>
                                    <img className='' src={item.image} alt="" />
                                </div>
                                <div className='flex flex-col gap-8'>
                                    <h2 className='text-center text-[#311F09] text-[20px] font-[500] font-primary tracking-[1.5px]'>{item.name}</h2>
                                    <p className='text-center text-[#A08D76] font-primary tracking-[1.5px]'>{item.job}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div>
                <button className='bg-[#FF8A00] w-[200px] h-[60px] text-white tracking-[1.5px] rounded-[162px] hover:opacity-75 transition duration-300'>View all</button>
            </div>
        </div>
    </div>
  )
}

export default Chef