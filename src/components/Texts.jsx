import React from 'react'

const Texts = () => {
  return (
    <section className='flex flex-col items-center justify-center text-center gap-6 mt-10'>
        <h3 className='text-purple-500 text-[18px] font-bold leading-[100%]'>PRICING</h3>
        <h1 className='text-[40px] font-bold leading-[100%]'>Choose the plan that fits your needs</h1>
        <div className='flex flex-row justify-between items-center min-w-[250px] mt-7 text-center'>
            <p className='text-[16px]'>Monthly</p>
            <div className='flex flex-col text-[16px]'>
                 <p>Annually</p>
                 <p className='text-purple-500'>Save 30%</p>
            </div>
        </div>
    </section>
  )
}

export default Texts