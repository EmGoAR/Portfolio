import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => (

  <section id='home' className={`flex md:flex-row flex-col bg-slate-900 ${styles.paddingY}`}>

    <div className={`flex-1 ${styles.flexStart} flex-col xl:p-0 sm:px-16 px-6`}>

      {/* Esta es la barrita de descuento*/}
      <div className='flex flex-row items-center py_[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
        <p className={` ${styles.paragraph} ml-2`}>
          <span className='text-white'>20%</span> Discount For {" "}
          <span className='text-white'>1 Month</span> Account
        </p>
      </div>

      {/* Estas son las Letras Grandes*/}
      <div className='flex flex-row justify-between items-center w-full'>

        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[750px] '>
          The Next <br className='sm:block hidden' /> {" "}
          <span className='text-gradient'>Generation</span> {" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[750px] w-full'>
        Payment Method
      </h1>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, at quia. Ratione velit voluptate sit et assumenda quas distinctio! Itaque iusto eum molestias. Veniam accusantium dignissimos repellat nisi, totam porro.</p>
    </div>

    <div className=''>
      <img src={robot} alt="billing" className='w-[100%] h-[100%] relative z-[5] '/>

      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink_gradient '></div>
    </div>
  </section>
)

export default Hero