import React from 'react';

const Form = () => {
  return (
    <div className='w-full h-full mt-9'>
        <div className='container mx-auto'>
            <div className='flex flex-col gap-14'>
                <div className='flex flex-col gap-7 items-center'>
                    <h1 className='lg:text-[70px] text-[35px] tracking-[1.5px] font-primary text-[#311F09] text-center'>Contact us</h1>
                    <p className='lg:text-[20px] md:text-[16px] text-[14px] text-[#5C4529] tracking-[1.5px] text-center'>
                        We love hearing from our customers. Feel free to share 
                        your experience or ask any questions you may have.
                    </p>
                </div>
                <div className='w-full'>
                    <form className='flex flex-col gap-6'>
                        <div className='flex md:flex-row flex-col gap-y-6 items-center justify-between gap-5'>
                            <input className='rounded-[20px] lg:w-[550px] md:w-[350px] w-[300px] lg:h-[80px] md:h-[70px] h-[60px] bg-[#D0CCC7] pl-6 lg:text-[18px] text-[14px] tracking-[1.5px] bg-opacity-20 font-primary border-none outline-none' type="text" placeholder='First name'/>
                            <input className='rounded-[20px] lg:w-[550px] md:w-[350px] w-[300px] lg:h-[80px] md:h-[70px] h-[60px] bg-[#D0CCC7] pl-6 lg:text-[18px] text-[14px] tracking-[1.5px] bg-opacity-20 font-primary border-none outline-none' type="text" placeholder='Last name'/>
                        </div>

                        <div className='flex md:flex-row flex-col gap-y-6 items-center justify-between gap-5'>
                            <input className='rounded-[20px] lg:w-[550px] md:w-[350px] w-[300px] lg:h-[80px] md:h-[70px] h-[60px] bg-[#D0CCC7] pl-6 lg:text-[18px] text-[14px] tracking-[1.5px] bg-opacity-20 font-primary border-none outline-none' type="email" placeholder='Email address' />
                            <input className='rounded-[20px] lg:w-[550px] md:w-[350px] w-[300px] lg:h-[80px] md:h-[70px] h-[60px] bg-[#D0CCC7] pl-6 lg:text-[18px] text-[14px] tracking-[1.5px] bg-opacity-20 font-primary border-none outline-none' type="text" placeholder='Subject' />
                        </div>

                        <textarea className='rounded-[20px] resize-none w-full h-[320px] bg-[#D0CCC7] pl-6 pt-9 lg:text-[18px] text-[14px] tracking-[1.5px] bg-opacity-20 font-primary border-none outline-none' placeholder='Message'></textarea>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form;