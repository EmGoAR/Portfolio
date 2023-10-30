import styles from '../style'

const AboutMe = () => {
  return (

    /* este es el main container - coloca flex responsivamente */
    <section id='AboutMe' className={`flex   flex-col ${styles.paddingY}`}>
      {/* este es el div que les pone los padding y contiene todo */}
      <div className='flex-1 flex-col xl:px-0 sm:px-16 px-6'>

        {/* Animacion
        <Lottie animationData={Laptop} loop className='flex w-full min-w-[500px] max-w-[500px] self-center' />
        */}

        {/* Title */}
        <div className='font-poppins font-semibold ss:text-center text-center mb-12 '>
          <h1 className='ss:text-[55px] text-[42px] ss:leading-[60px] leading-[55px] text-[#3D84C5]'>
            Love developing <br />
            <span className='text-gradient'>Awesome</span><br />
            Apps and Sites! <br />
          </h1>

          {/* Texto */}
          <p className='ss:text-[28px] text-[18px] ss:leading-[38px] leading-[25px] max-w-4xl font-normal text-white text-mdv text mx-auto mt-[10%]  '>
            I am currently developing Front-End responsive websites, my goal is to continue honing my skills as a Full Stack to fulfill my current goal, which is Software Engineer. <br /><br />I love crafting friendly styled UI apps.
          </p>
        </div>

        {/* gradient start */}
        <div className='absolute z-[0] w-[50%] h-[50%] right-96 bottom-20 blue__gradient' />
        {/* gradient end */}

      </div>
    </section>

  )
}

export default AboutMe
