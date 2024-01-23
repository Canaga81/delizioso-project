import React from 'react';
import menuItemData from '../../MenuItemData';
import CardMenuItem from '../CardMenuItem/CardMenuItem';

const CardMenuItemsCon = () => {
  return (
    <div className='w-full h-full mt-28 mb-28'>
        <div className='container mx-auto'>
            <div className='flex flex-col gap-16'>
                <div>
                    <h1 className='text-center text-[70px] font-medium font-primary text-[#311F09]'>Our popular menu</h1>
                </div>

                <div className='flexl flex-col gap-8'>
                    <div className='flex items-center justify-center gap-[30px] flex-wrap'>
                        <button className='w-[200px] h-[60px] text-[16px] lg:w-[200px] lg:h-[60px] bg-transparent text-center lg:text-[20px] text-[#311F09] border-[#311F09] border-solid border-[1px] font-primary font-normal rounded-[150px] hover:bg-[#311F09] hover:text-white transition-all duration-300'>All catagory</button>
                        <button className='w-[200px] h-[60px] text-[16px] lg:w-[200px] lg:h-[60px] bg-transparent text-center lg:text-[20px] text-[#311F09] border-[#311F09] border-solid border-[1px] font-primary font-normal rounded-[150px] hover:bg-[#311F09] hover:text-white transition-all duration-300'>Dinner</button>
                        <button className='w-[200px] h-[60px] text-[16px] lg:w-[200px] lg:h-[60px] bg-transparent text-center lg:text-[20px] text-[#311F09] border-[#311F09] border-solid border-[1px] font-primary font-normal rounded-[150px] hover:bg-[#311F09] hover:text-white transition-all duration-300'>Lunch</button>
                        <button className='w-[200px] h-[60px] text-[16px] lg:w-[200px] lg:h-[60px] bg-transparent text-center lg:text-[20px] text-[#311F09] border-[#311F09] border-solid border-[1px] font-primary font-normal rounded-[150px] hover:bg-[#311F09] hover:text-white transition-all duration-300'>Dessert</button>
                        <button className='w-[200px] h-[60px] text-[16px] lg:w-[200px] lg:h-[60px] bg-transparent text-center lg:text-[20px] text-[#311F09] border-[#311F09] border-solid border-[1px] font-primary font-normal rounded-[150px] hover:bg-[#311F09] hover:text-white transition-all duration-300'>Drink</button>
                    </div>
                    <div className='flex items-center justify-center mt-16 flex-wrap gap-10'>

                        {
                            menuItemData.map((item, i) => {
                                return (
                                    <CardMenuItem 
                                        key={i} 
                                        id={item.id} 
                                        image={item.image}
                                        name={item.name}
                                        text={item.text}
                                        price={item.price}
                                        category={item.category}
                                    />
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardMenuItemsCon